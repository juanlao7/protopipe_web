import subprocess
import json
import pprint
import jinja2
import os
import shutil

def renderTemplate(templateFilePath, outputFilePath, **data):
    templateLoader = jinja2.FileSystemLoader(searchpath='./')
    template = jinja2.Environment(loader=templateLoader).get_template(templateFilePath)
    outputText = template.render(**data)
    
    with open(outputFilePath, 'w') as handler:
        handler.write(outputText)

def insertInTree(tree, path, id):
    if len(path) == 1:
        if 'leaves' not in tree:
            tree['leaves'] = {}

        tree['leaves'][id] = path.pop(0)
        return
    
    if 'branches' not in tree:
        tree['branches'] = {}
    
    branchText = path.pop(0)
    
    if branchText not in tree['branches']:
        tree['branches'][branchText] = {}
    
    insertInTree(tree['branches'][branchText], path, id)

def treeToBullets(tree, indent=0):
    buffer = ''
    
    if 'branches' in tree:
        for branchName in sorted(tree['branches']):
            buffer += (4 * indent) * ' ' + '* %s\n' % branchName
            buffer += treeToBullets(tree['branches'][branchName], indent + 1)

    if 'leaves' in tree:
        for leafId in sorted(tree['leaves']):
            buffer += (4 * indent) * ' ' + '* [%s](cards/%s.html)\n' % (tree['leaves'][leafId], leafId)
    
    return buffer

modules = json.loads(subprocess.check_output('protopipe-engine modules', shell=True))

# Emptying ../cards

for relativeFilePath in os.listdir('../cards'):
    filePath = os.path.join('../cards', relativeFilePath)

    try:
        if os.path.isfile(filePath):
            os.unlink(filePath)
    except Exception as e:
        print(e)

# Generating cards index.
tree = {}

for moduleId, module in modules.items():
    insertInTree(tree, module['path'] + [module['title']], moduleId)

renderTemplate('cards_index_skeleton.md', '../cards/index.md', tree=treeToBullets(tree))

# Generating reference page for each card.
screenshotPlans = {}

for moduleId, module in modules.items():
    outputs = [x for x in module.get('outputs', []) if x['type'] != 'Event']
    events = [x for x in module.get('outputs', []) if x['type'] == 'Event']
    renderTemplate('card_reference_skeleton.md', '../cards/%s.md' % moduleId, id=moduleId, title=module['title'], help=module.get('help', ''), inputs=module.get('inputs', []), outputs=outputs, events=events)

    plan = {
        'card': module['path'] + [module['title']],
        'frameCards': True
    }

    if moduleId.startswith('parameter') or moduleId.startswith('return'):
        plan['clickElementWhenReady'] = ['t:Set']
    
    screenshotPlans['cards/%s' % moduleId] = plan

os.chdir('../_screenshot_maker')

with open('cards.json', 'w') as handler:
    json.dump(screenshotPlans, handler)

subprocess.check_call(['node', 'index.js', 'cards.json'])
