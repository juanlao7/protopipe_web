(async () => {
    const LOGIN = false;

    const plan = %plan%;
    const USERNAME = %username%;
    const PASSWORD = %password%;

    const CARD_INIT_DELAY = 500;
    const DIALOG_INIT_DELAY = 500;
    const GENERAL_ANIMATION_DELAY = 500;

    // Inheriting properties.
    const margins = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];

    for (var i = 0; i < margins.length; ++i) {
        if (!(margins[i] in plan)) {
            plan[margins[i]] = plan.margin;
        }
    }

    async function takeScreenshot() {
        console.log('3... 2... 1...');
        await clickElementWhenReady();
        await hoverElements();
        await timeout(plan.delay);

        if ('elementWithMargin' in plan) {
            await waitForSelector(plan.elementWithMargin);
            await timeout(GENERAL_ANIMATION_DELAY);
            const bounds = findSelector(plan.elementWithMargin).getBoundingClientRect();
            screenshotArea.style.left = (bounds.x - plan.marginLeft) + 'px';
            screenshotArea.style.top = (bounds.y - plan.marginTop) + 'px';
            screenshotArea.style.width = (bounds.width + plan.marginLeft + plan.marginRight) + 'px';
            screenshotArea.style.height = (bounds.height + plan.marginTop + plan.marginBottom) + 'px';
        }

        await removeElements();

        console.log('PATATA!');
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

    function findSelector(selector) {
        if (selector.startsWith('t:')) {
            return find(selector.substr(2));
        }

        return document.querySelector(selector);
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

    async function clickElementWhenReady() {
        if (!('clickElementWhenReady' in plan)) {
            return;
        }

        while (plan.clickElementWhenReady.length > 0) {
            let selector = plan.clickElementWhenReady.shift();
            await waitForSelector(selector);
            const element = findSelector(selector);
            var event = new MouseEvent('mousedown');
            element.dispatchEvent(event);
            element.click();
        }

        await timeout(GENERAL_ANIMATION_DELAY);
    }

    async function hoverElements() {
        if (!('hover' in plan)) {
            return;
        }

        let rules = '';

        for (let i = 0; i < document.styleSheets.length; ++i) {
            const stylesheet = document.styleSheets[i];

            for (let j = 0; j < stylesheet.cssRules.length; ++j) {
                const rule = stylesheet.cssRules[j];

                 if (rule.cssText.includes(':hover')) {
                     console.log(`Replacing :hover by .hover in rule "${rule.cssText}"`);
                     rules += rule.cssText.split(':hover').join('.hover');
                 }
            }
        }

        const style = document.createElement('style');
        style.appendChild(document.createTextNode(rules));
        document.getElementsByTagName('head')[0].appendChild(style);

        while (plan.hover.length > 0) {
            const selector = plan.hover.shift();
            await waitForSelector(selector);
            let element = findSelector(selector);

            while (element != null) {
                element.classList.add('hover');
                element = element.parentElement;
            }
        }
    }

    async function removeElements() {
        if (!('removeElements' in plan)) {
            return;
        }

        while (plan.removeElements.length > 0) {
            const selector = plan.removeElements.pop();
            console.log(`Removing "${selector}"`);
            await waitForSelector(selector);
            const element = findSelector(selector);
            element.parentElement.removeChild(element);
        }
    }

    function mouseDown(element) {
        var event = new MouseEvent('mousedown');
        element.dispatchEvent(event);
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
        await takeScreenshot();
        return;
    }

    await timeout(DIALOG_INIT_DELAY);

    if (LOGIN) {
        findOrFail('Username').value = USERNAME;
        findOrFail('Password').value = PASSWORD;
        findOrFail('Log in', 1).click();
    }

    await waitForNoProgressBar();

    async function afterProjectOpening() {
        await waitForNoProgressBar();

        if ('openNeuralNetworkEditor' in plan) {
            findOrFail('add').click();
            findOrFail('Modules').click();

            for (let modulePart of ['Models', 'Neural networks', 'Create neural network']) {
                findOrFail(modulePart).click();
            }

            findOrFail('Edit').click();
            await waitForSelector('.ppui_dialog .ppui_blueprintCardsContainer');

            // Deleting preexisting Input and Output cards.

            for (let i = 0; i < 2; ++i) {
                mouseDown(findSelector('.ppui_dialog .ppui_blueprintCard'));
                findOrFail('delete', 1).click();
            }
        }
        
        if ('card' in plan) {
            const index = ('openNeuralNetworkEditor' in plan) ? 1 : 0;
            findOrFail('add', index).click();

            if (!('openNeuralNetworkEditor' in plan)) {
                findOrFail('Modules').click();
            }

            for (let modulePart of plan.card) {
                findOrFail(modulePart).click();
            }

            if ('cardImplicit' in plan) {
                await timeout(DIALOG_INIT_DELAY);
                findSelector('.ppui_dialogModal .ppui_textField input').value = plan.cardImplicit;
                const setButton = find('Set');
                setButton.disabled = false;
                setButton.click();
            }

            findOrFail('zoom_in', index).click();
            findOrFail('Zoom to fit').click();
        }

        await timeout(CARD_INIT_DELAY);

        if (plan.frameCards) {
            let cards;

            if ('openNeuralNetworkEditor' in plan) {
                findOrFail('zoom_in', 1).click();
                cards = findSelector('.ppui_dialog .ppui_blueprintCardsContainer').getElementsByClassName('ppui_blueprintCard');
            }
            else {
                findOrFail('zoom_in').click();
                cards = document.getElementsByClassName('ppui_blueprintCard');
            }

            findOrFail('100%').click();
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

            const x = parseInt(minX - plan.marginLeft + plan.dx);
            const y = parseInt(minY - plan.marginTop + plan.dy);
            const w = parseInt(maxX + plan.marginRight - x + plan.dw);
            const h = parseInt(maxY + plan.marginBottom - y + plan.dh);

            screenshotArea.style.left = x + 'px';
            screenshotArea.style.top = y + 'px';
            screenshotArea.style.width = w + 'px';
            screenshotArea.style.height = h + 'px';
        }
    }

    if (plan.createProject) {
        findOrFail('add').click();
        await timeout(DIALOG_INIT_DELAY);

        if (plan.projectName) {
            findOrFail('Project name').value = plan.projectName;
            findOrFail('Start').click();
            await afterProjectOpening();
        }
    }
    else if (plan.openProject) {
        findOrFail(plan.projectName).click();
        await afterProjectOpening();
    }

    await takeScreenshot();
})();
