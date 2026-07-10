import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  
  // Set viewport to mobile (iPhone 12/13/14 Pro dimensions)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  
  console.log('Navigating to http://localhost:3000/...');
  try {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  } catch (err) {
    console.error('Failed to connect to dev server. Make sure Vite is running on port 3000.', err);
    await browser.close();
    process.exit(1);
  }

  // Create screenshots directory inside workspace
  const dir = './screenshots';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  console.log('Taking screenshot of Top Header...');
  await page.screenshot({ path: path.join(dir, '00_header.png') });

  // Scroll step by step
  const steps = await page.$$('.step');
  console.log(`Found ${steps.length} steps. Scrolling and taking screenshots...`);

  for (let i = 0; i < steps.length; i++) {
    const stepName = await steps[i].evaluate(el => el.dataset.step || el.id || `step-${i+1}`);
    console.log(`Scrolling to step ${i+1}: ${stepName}...`);
    
    // Scroll element to center of viewport
    await steps[i].evaluate(el => {
      el.scrollIntoView({ block: 'center', behavior: 'instant' });
    });
    
    // Wait for scroll and CSS transitions/animations to stabilize
    await new Promise(r => setTimeout(r, 800));
    
    const screenshotPath = path.join(dir, `${(i+1).toString().padStart(2, '0')}_${stepName}.png`);
    await page.screenshot({ path: screenshotPath });
    console.log(`Saved ${screenshotPath}`);
  }

  console.log('Testing interactions in Section 5 (Constellation)...');
  // Scroll to constellation interactive step
  const constStepIndex = 9; // 10th step is constellation-interactive
  await steps[constStepIndex].evaluate(el => el.scrollIntoView({ block: 'center' }));
  await new Promise(r => setTimeout(r, 800));
  
  // Click on the Access Node Circle
  console.log('Clicking on Access Node circle...');
  const accessCircle = await page.$('.n-access circle');
  if (accessCircle) {
    await accessCircle.click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(dir, 'hud_constellation_access.png') });
    console.log('Saved constellation HUD screenshot.');
  }

  console.log('Testing interactions in Section 6 (Agency)...');
  // Scroll to agency paths step
  const agencyStepIndex = 11; // 12th step is agency-paths
  await steps[agencyStepIndex].evaluate(el => el.scrollIntoView({ block: 'center' }));
  await new Promise(r => setTimeout(r, 800));
  
  // Click on the Co-create path circle
  console.log('Clicking on Co-create circle...');
  const cocreateCircle = await page.$('.term-cocreate circle');
  if (cocreateCircle) {
    await cocreateCircle.click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(dir, 'hud_agency_cocreate.png') });
    console.log('Saved agency HUD screenshot.');
  }

  console.log('Closing browser...');
  await browser.close();
  console.log('Screenshot capture complete!');
})();
