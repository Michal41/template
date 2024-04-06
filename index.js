const puppeteer = require('puppeteer');
const template = require('./template').template;

// import { template } from './template';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const finalContent = template.replace('{{username}}', 'John Doe');

  await page.setContent(finalContent);
  await page.pdf({path: 'example.pdf', format: 'A4'});

  await browser.close();
})();