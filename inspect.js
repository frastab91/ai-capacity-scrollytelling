const puppeteer = require('puppeteer');

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3001/...');
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle2' });
  
  console.log('Evaluating elements bounding boxes...');
  const layout = await page.evaluate(() => {
    const header = document.querySelector('.editorial-header');
    const container = document.querySelector('.scrolly-container');
    const graphic = document.querySelector('.sticky-graphic');
    
    return {
      header: header ? header.getBoundingClientRect().toJSON() : null,
      container: container ? container.getBoundingClientRect().toJSON() : null,
      graphic: graphic ? graphic.getBoundingClientRect().toJSON() : null,
      windowScrollY: window.scrollY
    };
  });
  
  console.log('Layout result:', JSON.stringify(layout, null, 2));
  await browser.close();
}

run().catch(console.error);
