const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    console.log('Launching browser via Playwright...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Source HTML in the wireframe directory
    const htmlPath = path.resolve(__dirname, 'dashboards_wireframes.html');
    const outputDir = __dirname; // Current directory (landing/web-profile-wirabhakti/wireframe)

    console.log(`Loading HTML source: ${htmlPath}`);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

    // Set a large enough viewport to capture 1280x800 elements without issues
    await page.setViewportSize({ width: 1400, height: 4000 });

    const roles = [
      { id: '#admin-dashboard', filename: 'admin_dashboard_wireframe.png' },
      { id: '#coach-dashboard', filename: 'coach_dashboard_wireframe.png' },
      { id: '#student-dashboard', filename: 'student_dashboard_wireframe.png' },
      { id: '#parent-dashboard', filename: 'parent_dashboard_wireframe.png' }
    ];

    for (const role of roles) {
      console.log(`Capturing selector ${role.id}...`);
      const element = await page.$(role.id);
      if (element) {
        const outputPath = path.join(outputDir, role.filename);
        await element.screenshot({ path: outputPath });
        console.log(`Successfully saved: ${outputPath}`);
      } else {
        console.warn(`Selector ${role.id} not found!`);
      }
    }

    console.log('All wireframe screenshots generated successfully!');
    await browser.close();
  } catch (error) {
    console.error('Failed to generate wireframe screenshots:', error);
    process.exit(1);
  }
})();
