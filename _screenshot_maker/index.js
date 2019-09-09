const fs = require('fs');
const Pageres = require('pageres');

const directOptions = ['delay', 'selector'];

const defaultPlanOptions = {
    login: true,
    openProject: true,
    delay: 5
}

const pageres = new Pageres();
pageres.dest(`${__dirname}/../assets/img/`);

const plans = JSON.parse(fs.readFileSync('plans.json', 'utf8'));
const scriptSkeleton = fs.readFileSync('embedded_script_skeleton.js', 'utf8');

for (let filePath in plans) {
    console.log(`Preparing file "${filePath}"`);
    const plan = {...defaultPlanOptions, ...plans[filePath]};
    let scriptContents = scriptSkeleton;

    for (let token of ['x', 'y', 'w', 'h', 'login', 'openProject']) {
        if (token in plan) {
            scriptContents = scriptContents.split(`%${token}%`).join(plan[token]);
        }
    }

    const options = {
        filename: filePath,
        script: scriptContents
    }

    if ('x' in plan && 'y' in plan && 'w' in plan && 'h' in plan) {
        options.selector = '#screenshotArea';
    }

    for (let directOption of directOptions) {
        if (directOption in plan) {
            options[directOption] = plan[directOption];
        }
    }

    pageres.src('http://localhost:3000', ['1280x768'], options);
}

(async () => {
    await pageres.run();
})();
