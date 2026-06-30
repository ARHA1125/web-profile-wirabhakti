const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser via Playwright...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    const outputDir = __dirname; // Current directory (landing/web-profile-wirabhakti/wireframe)
    const htmlFile = 'landing_wireframes.html';
    const htmlPath = path.resolve(outputDir, htmlFile);

    console.log(`\n========================================`);
    console.log(`Loading HTML source: ${htmlPath}`);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

    // Set a viewport height large enough to avoid any vertical cropping issues
    await page.setViewportSize({ width: 1400, height: 6000 });

    const screens = [
      { id: '#landing-home', filename: 'landing_page_wireframe.png' },
      { id: '#landing-programs', filename: 'programs_page_wireframe.png' },
      { id: '#landing-coaches', filename: 'coaches_page_wireframe.png' },
      { id: '#landing-gallery', filename: 'gallery_page_wireframe.png' },
      { id: '#landing-location', filename: 'location_page_wireframe.png' },
      { id: '#landing-news', filename: 'news_page_wireframe.png' }
    ];

    for (const screen of screens) {
      console.log(`Capturing selector ${screen.id}...`);
      const element = await page.$(screen.id);
      if (element) {
        const outputPath = path.join(outputDir, screen.filename);
        await element.screenshot({ path: outputPath });
        console.log(`Successfully saved: ${outputPath}`);
      } else {
        console.warn(`Selector ${screen.id} not found!`);
      }
    }

    console.log('\nAll 6 landing page wireframe screenshots generated successfully!');
    await browser.close();
  } catch (error) {
    console.error('Failed to generate landing page wireframe screenshots:', error);
    process.exit(1);
  }
})();
