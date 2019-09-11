(async () => {
    const plan = %plan%;
    const USERNAME = %username%;
    const PASSWORD = %password%;

    const CARD_INIT_DELAY = 500;
    const DIALOG_INIT_DELAY = 500;

    const CARDS_FRAME_MARGIN = 30;

    function takeScreenshot() {
        const patata = document.createElement('span');
        patata.id = 'patata';
        patata.style.position = 'fixed';
        patata.style.opacity = '0';
        document.body.appendChild(patata);
    }

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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

    function findSelector(selector, index=0) {
        return document.querySelectorAll(selector)[index];
    }

    async function waitForNoProgressBar() {
        await waitForSelectorToDisappear('.ppui_progressBar:not(.ppui_hidden)');
    }

    async function waitForSelector(selector) {
        while (findSelector(selector) == null) {
            console.log(`Waiting for selector "${selector}"...`);
            await timeout(100);
        }

        console.log(`Selector "${selector}" found.`);
    }

    async function waitForSelectorToDisappear(selector) {
        while (findSelector(selector) != null) {
            //console.log(`Waiting for selector "${selector}" to disappear...`);
            await timeout(100);
        }

        //console.log(`Selector "${selector}" disappeared.`);
    }

    const screenshotArea = document.createElement('div');
    screenshotArea.id = 'screenshotArea';
    screenshotArea.style.position = 'fixed';
    screenshotArea.style.left = plan.x + 'px';
    screenshotArea.style.top = plan.y + 'px';
    screenshotArea.style.width = plan.w + 'px';
    screenshotArea.style.height = plan.h + 'px';
    document.body.appendChild(screenshotArea);

    if (!plan.login) {
        takeScreenshot();
        return;
    }

    await timeout(DIALOG_INIT_DELAY);
    findOrFail('Username').value = USERNAME;
    findOrFail('Password').value = PASSWORD;
    findOrFail('Log in', 1).click();
    await waitForNoProgressBar();

    async function afterProjectOpening() {
        await waitForNoProgressBar();
        
        if ('card' in plan) {
            findOrFail('add').click();
            findOrFail('Modules').click();

            for (let modulePart of plan.card) {
                findOrFail(modulePart).click();
            }

            if ('cardImplicit' in plan) {
                await timeout(DIALOG_INIT_DELAY);
                findSelector('.ppui_dialogModal .ppui_textField').value = plan.cardImplicit;
                find('Set').click();
            }

            findOrFail('zoom_in').click();
            findOrFail('Zoom to fit').click();
        }

        await timeout(CARD_INIT_DELAY);

        if (plan.frameCards) {
            findOrFail('zoom_in').click();
            findOrFail('100%').click();
            const cards = document.getElementsByClassName('ppui_blueprintCard');
            let bounds = cards[0].getBoundingClientRect();
            let minX = bounds.x;
            let maxX = bounds.x + bounds.width;
            let minY = bounds.y;
            let maxY = bounds.y + bounds.height;

            for (let card of cards) {
                bounds = card.getBoundingClientRect();
                minX = Math.min(minX, bounds.x);
                maxX = Math.max(maxX, bounds.x + bounds.width);
                minY = Math.min(minY, bounds.y);
                maxY = Math.max(maxY, bounds.y + bounds.height);
            }

            const x = parseInt(minX - CARDS_FRAME_MARGIN + plan.dx);
            const y = parseInt(minY - CARDS_FRAME_MARGIN + plan.dy);
            const w = parseInt(maxX + CARDS_FRAME_MARGIN - x + plan.dw);
            const h = parseInt(maxY + CARDS_FRAME_MARGIN - y + plan.dh);

            screenshotArea.style.left = x + 'px';
            screenshotArea.style.top = y + 'px';
            screenshotArea.style.width = w + 'px';
            screenshotArea.style.height = h + 'px';
        }
    }

    if (plan.createProject) {
        findOrFail('add').click();
        await timeout(DIALOG_INIT_DELAY);
        findOrFail('Project name').value = plan.projectName;
        findOrFail('Start').click();
        await afterProjectOpening();
    }
    else if (plan.openProject) {
        findOrFail(plan.projectName).click();
        await afterProjectOpening();
    }

    takeScreenshot();
})();
