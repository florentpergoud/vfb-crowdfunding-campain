const got = require('got');
const jsdom = require('jsdom');
const fs = require('fs');

const { JSDOM } = jsdom;

const url = 'https://www.miimosa.com/fr/projects/very-french-beans-la-cuisine-a-l-accent-british';

(async () => {
    const response = await got(url);
    const dom = new JSDOM(response.body);

    const collectedMoneyNode = dom.window.document.querySelector('div.js-collected-value');
    const collectedAmount = collectedMoneyNode.textContent.split('€')[0].split(' ').join('');
    const collectedAmountNumber = parseInt(collectedAmount);
    const amount = { currentAmount: collectedAmountNumber };

    fs.writeFileSync('./src/values.json', JSON.stringify(amount), null, 4);
})();
