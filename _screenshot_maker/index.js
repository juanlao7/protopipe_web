const fs = require('fs');
const request = require('request-promise-native');
const captureWebsite = require('capture-website');

const DEBUG = false;

const constants = {
    username: 'juan',
    password: 'we'
};

let chosenPlans = null;
chosenPlans = ['basics/returns_1'];
//chosenPlans = ['basics/events-and-callbacks_1'];

(async () => {
    const directOptions = ['delay', 'selector'];

    const defaultPlanOptions = {
        login: true,
        createProject: true,
        width: 2000,
        height: 2000,
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0
    }

    const plans = JSON.parse(fs.readFileSync('plans.json', 'utf8'));

    if (chosenPlans == null) {
        chosenPlans = Object.keys(plans);
    }

    // Preparing project uploader.
    const cookieJar = request.jar();

    await request.post('http://localhost:3000/logIn', {
        jar: cookieJar,
        form: {
            username: constants.username,
            password: constants.password
        }
    });

    // Preparing screenshots.
    let scriptSkeleton = fs.readFileSync('embedded_script_skeleton.js', 'utf8');

    for (let constantName in constants) {
        scriptSkeleton = scriptSkeleton.split(`%${constantName}%`).join(JSON.stringify(constants[constantName]));
    }

    for (let filePath of chosenPlans) {
        const plan = {...defaultPlanOptions, ...plans[filePath]};

        if ('project' in plan) {
            console.log(`Uploading project for "${filePath}"`);
            const projectUploadRequest = request.post('http://localhost:3000/uploadProject', {jar: cookieJar});
            projectUploadRequest.form().append('file', fs.createReadStream(plan.project));
            await projectUploadRequest;
            plan.createProject = false;
            plan.openProject = true;
        }
        
        console.log(`Taking screenshot "${filePath}"`);

        if (!('projectName' in plan)) {
            plan.projectName = filePath;
        }

        let scriptContents = scriptSkeleton.split(`%plan%`).join(JSON.stringify(plan));

        const captureOptions = {
            width: plan.width,
            height: plan.height,
            scaleFactor: 1,
            modules: [scriptContents],
            overwrite: true,
            waitForElement: '#patata',
            debug: DEBUG
        }

        if (('x' in plan && 'y' in plan && 'w' in plan && 'h' in plan) || 'frameCards' in plan) {
            captureOptions.element = '#screenshotArea';
        }

        for (let directOption of directOptions) {
            if (directOption in plan) {
                captureOptions[directOption] = plan[directOption];
            }
        }

        await captureWebsite.file('http://localhost:3000', `${__dirname}/../assets/img/${filePath}.png`, captureOptions);
    }
})();
