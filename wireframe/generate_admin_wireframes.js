const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser via Playwright...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Source HTML in the wireframe directory
    const htmlPath = path.resolve(__dirname, 'admin_wireframes.html');
    const outputDir = __dirname; // Current directory (landing/web-profile-wirabhakti/wireframe)

    console.log(`Loading HTML source: ${htmlPath}`);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

    // Set viewport size large enough to contain all canvases stacked vertically
    await page.setViewportSize({ width: 1400, height: 12000 });

    const screens = [
      { id: '#admin-members', filename: 'admin_members_wireframe.png' },
      { id: '#admin-users', filename: 'admin_users_wireframe.png' },
      { id: '#admin-financial-overview', filename: 'admin_financial_overview_wireframe.png' },
      { id: '#admin-financial-billing', filename: 'admin_financial_billing_wireframe.png' },
      { id: '#admin-financial-automation', filename: 'admin_financial_automation_wireframe.png' },
      { id: '#admin-waha', filename: 'admin_waha_wireframe.png' },
      { id: '#admin-admin-sponsors', filename: 'admin_admin_sponsors_wireframe.png' },
      { id: '#admin-admin-events', filename: 'admin_admin_events_wireframe.png' },
      { id: '#admin-admin-marketplace', filename: 'admin_admin_marketplace_wireframe.png' },
      { id: '#admin-admin-news', filename: 'admin_admin_news_wireframe.png' },
      { id: '#admin-admin-gallery', filename: 'admin_admin_gallery_wireframe.png' },
      { id: '#admin-kurikulum-overview', filename: 'admin_kurikulum_overview_wireframe.png' },
      { id: '#admin-kurikulum-builder', filename: 'admin_kurikulum_builder_wireframe.png' },
      { id: '#admin-kurikulum-audit', filename: 'admin_kurikulum_audit_wireframe.png' }
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

    console.log('All 14 Admin wireframe screenshots generated successfully!');
    await browser.close();
  } catch (error) {
    console.error('Failed to generate Admin wireframe screenshots:', error);
    process.exit(1);
  }
})();
