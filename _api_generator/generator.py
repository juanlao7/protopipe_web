import subprocess
import json
import pprint
import jinja2
import os
import shutil
import argparse

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
            buffer += (4 * indent) * ' ' + '* [%s](cards/%s)\n' % (tree['leaves'][leafId], leafId)
    
    return buffer

def ensureArgumentsHelp(moduleId, argumentType, arguments):
    for argument in arguments:
        if 'help' not in argument:
            print('WARNING: %s type argument "%s" in module "%s" does not have "help".' % (argumentType, argument['id'], moduleId))

def ensureHelp(moduleId, module):
    if 'help' not in module:
        print('WARNING: module "%s" does not have "help".' % moduleId)
    
    ensureArgumentsHelp(moduleId, 'input', module.get('inputs', []))
    ensureArgumentsHelp(moduleId, 'output', module.get('outputs', []))

def generateAPI(args, apiName, getModulesCommand):
    modules = json.loads(subprocess.check_output('protopipe-engine NSDFXU-H4WMDM-6BINKG-YLZFRQ %s' % getModulesCommand, shell=True))

    # Emptying ../cards and ../assets/img/cards
    directoriesToEmpty = ['../%s' % apiName]

    if not args.noScreenshots:
        directoriesToEmpty.append('../assets/img/%s' % apiName)

    for directoryToEmpty in directoriesToEmpty:
        for relativeFilePath in os.listdir(directoryToEmpty):
            filePath = os.path.join(directoryToEmpty, relativeFilePath)

            try:
                if os.path.isfile(filePath):
                    os.unlink(filePath)
            except Exception as e:
                print(e)

    # Generating cards index.
    tree = {}

    for moduleId, module in modules.items():
        insertInTree(tree, module['path'] + [module['title']], moduleId)

    renderTemplate('%s_index_skeleton.md' % apiName, '../%s/index.md' % apiName, tree=treeToBullets(tree))

    # Generating reference page for each card.
    screenshotPlans = {}
    types = set()

    for moduleId, module in modules.items():
        ensureHelp(moduleId, module)
        outputs = [x for x in module.get('outputs', []) if x['type'] != 'Event']
        events = [x for x in module.get('outputs', []) if x['type'] == 'Event']

        renderTemplate('%s_card_reference_skeleton.md' % apiName, '../%s/%s.md' % (apiName, moduleId), id=moduleId, title=module['title'], help=module.get('help', ''), inputs=module.get('inputs', []), outputs=outputs, events=events)

        if not args.noScreenshots:
            plan = {
                'card': module['path'] + [module['title']],
                'frameCards': True
            }

            if moduleId.startswith('parameter') or moduleId.startswith('return'):
                plan['clickElementWhenReady'] = ['t:Set']
            
            screenshotPlans['%s/%s' % (apiName, moduleId)] = plan
        
        for argumentDefinition in module.get('inputs', []) + module.get('outputs', []):
            if argumentDefinition['type'] != 'Event':
                types.add(argumentDefinition['type'])

    if apiName == 'cards':
        # Generating types index.
        renderTemplate('types_index_skeleton.md', '../types/index.md', types=sorted(types))

        for dataType in types:
            if not os.path.isfile('../types/%s.md' % dataType):
                print('WARNING: reference for data type "%s" does not exist.' % dataType)

    # Generating card images.

    if not args.noScreenshots:
        os.chdir('../_screenshot_maker')

        with open('cards.json', 'w') as handler:
            json.dump(screenshotPlans, handler)

        subprocess.check_call(['node', 'index.js', 'cards.json'])

def generateCoreAPI(args):
    generateAPI(args, 'cards', 'modules')

parser = argparse.ArgumentParser(prog='Protopipe API generator')
parser.add_argument('targets', nargs='+', choices=['core', 'nn'], help='Possible values: core, nn.')
parser.add_argument('--no-screenshots', action='store_true', dest='noScreenshots', help='Do not remove & create screenshots.')
args = parser.parse_args()

handlers = {
    'core': generateCoreAPI
}

for target in args.targets:
    handlers[target](args)
