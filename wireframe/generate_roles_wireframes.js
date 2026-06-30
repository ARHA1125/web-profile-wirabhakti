const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser via Playwright...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    const outputDir = __dirname; // Current directory (landing/web-profile-wirabhakti/wireframe)

    const configs = [
      {
        htmlFile: 'coach_wireframes.html',
        viewportHeight: 6000,
        screens: [
          { id: '#coach-dashboard-overview', filename: 'coach_overview_wireframe.png' },
          { id: '#coach-attendance', filename: 'coach_attendance_wireframe.png' },
          { id: '#coach-curriculum', filename: 'coach_curriculum_wireframe.png' },
          { id: '#coach-evaluations', filename: 'coach_evaluations_wireframe.png' },
          { id: '#coach-roster', filename: 'coach_roster_wireframe.png' },
          { id: '#coach-weekly-leaderboard', filename: 'coach_leaderboard_wireframe.png' }
        ]
      },
      {
        htmlFile: 'student_wireframes.html',
        viewportHeight: 5000,
        screens: [
          { id: '#student-dashboard-overview', filename: 'student_overview_wireframe.png' },
          { id: '#student-performance', filename: 'student_performance_wireframe.png' },
          { id: '#student-schedule', filename: 'student_schedule_wireframe.png' },
          { id: '#student-store', filename: 'student_store_wireframe.png' },
          { id: '#student-badges', filename: 'student_badges_wireframe.png' }
        ]
      },
      {
        htmlFile: 'parent_wireframes.html',
        viewportHeight: 4000,
        screens: [
          { id: '#parent-dashboard-overview', filename: 'parent_overview_wireframe.png' },
          { id: '#parent-financials', filename: 'parent_financials_wireframe.png' },
          { id: '#parent-reports', filename: 'parent_reports_wireframe.png' },
          { id: '#parent-badges', filename: 'parent_badges_wireframe.png' }
        ]
      }
    ];

    for (const config of configs) {
      const htmlPath = path.resolve(outputDir, config.htmlFile);
      console.log(`\n========================================`);
      console.log(`Loading HTML source: ${htmlPath}`);
      await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

      // Adjust viewport height for scrolling pages containing stacked wireframes
      await page.setViewportSize({ width: 1400, height: config.viewportHeight });

      for (const screen of config.screens) {
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
    }

    console.log('\nAll 15 role wireframe screenshots generated successfully!');
    await browser.close();
  } catch (error) {
    console.error('Failed to generate role wireframe screenshots:', error);
    process.exit(1);
  }
})();
