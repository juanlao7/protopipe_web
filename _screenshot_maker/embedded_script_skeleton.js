try {
    const LOGIN = %login%;
    const OPEN_PROJECT = %openProject%;

    const USERNAME = 'juan';
    const PASSWORD = 'we';
    const PROJECT_NAME = 'ScreenshotsProject';

    function findOrFail(text, index=0) {
        const element = find(text, index);

        if (element == null) {
            throw `Element with text "${text}" not found.`;
        }

        return element;
    }

    function find(text, index=0) {
        text = text.split('\\').join('\\\\');
        text = text.split('"').join('\\"');
        const iterator = document.evaluate(`//*[text()="${text}" or @placeholder="${text}"]`, document);
        let element = null;

        while (index >= 0) {
            element = iterator.iterateNext();
            --index;
        }

        return element;
    }

    const screenshotArea = document.createElement('div');
    screenshotArea.id = 'screenshotArea';
    screenshotArea.style.position = 'fixed';
    screenshotArea.style.left = '%x%px';
    screenshotArea.style.top = '%y%px';
    screenshotArea.style.width = '%w%px';
    screenshotArea.style.height = '%h%px';
    document.body.appendChild(screenshotArea);

    if (LOGIN) {
        findOrFail('Username').value = USERNAME;
        findOrFail('Password').value = PASSWORD;
        findOrFail('Log in', 1).click();

        setTimeout(() => {
            if (OPEN_PROJECT) {
                const project = find(PROJECT_NAME);
                
                if (project == null) {
                    findOrFail('add').click();
                    findOrFail('Project name').value = PROJECT_NAME;
                    findOrFail('Start').click();
                }
                else {
                    project.click();
                }
            }
        }, 3000);
    }
}
catch (e) {
    document.body.innerText = e;
}
