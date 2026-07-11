const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  
  console.log('Navigating...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  
  const offsets = [300, 600, 1000];
  const dir = '/Users/francescostabilito/.gemini/antigravity/brain/4c0ba667-6629-4112-b1cc-35245b3c48a1';
  
  for (const offset of offsets) {
    console.log(`Scrolling to ${offset}px...`);
    await page.evaluate((y) => window.scrollTo(0, y), offset);
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(dir, `desktop_scroll_${offset}.png`) });
    console.log(`Saved screenshot at ${offset}px.`);
  }
  
  await browser.close();
}

run().catch(console.error);
