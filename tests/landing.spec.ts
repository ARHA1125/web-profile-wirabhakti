import { test, expect } from '@playwright/test';

test.describe('Landing Page UI Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Log browser console messages and unhandled exceptions to help debug the blank page
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER EXCEPTION:', err.message));
    page.on('response', response => {
      if (response.status() === 401) {
        console.log(`HTTP 401 Response URL: ${response.url()}`);
      }
    });
    page.on('requestfailed', request => {
      console.log(`REQUEST FAILED: ${request.url()} - ${request.failure()?.errorText}`);
    });
  });

  test('should load landing page successfully and verify title', async ({ page }) => {
    await page.goto('/');
    // Check that metadata title is correct
    await expect(page).toHaveTitle(/Wirabhakti Basket Akademi/i);
  });

  test('should verify stats and program headers on home page', async ({ page }) => {
    await page.goto('/');
    
    // Check for stats counts
    await expect(page.locator('text=Active Students')).toBeVisible();
    await expect(page.locator('text=Pro Coaches')).toBeVisible();
    await expect(page.locator('text=Trophies Won')).toBeVisible();

    // Check for Our Programs heading section
    await expect(page.locator('#programs').getByText('Our Programs')).toBeVisible();
  });

  test('should navigate to programs and gallery pages from navbar', async ({ page }) => {
    await page.goto('/');

    // 1. Test navigation to Our Programs
    const programsLink = page.locator('nav').getByRole('link', { name: 'Our Programs', exact: true }).first();
    await expect(programsLink).toBeVisible();
    await programsLink.click();
    
    // Assert page navigated to /programs
    await page.waitForURL('**/programs');
    await expect(page.url()).toContain('/programs');

    // 2. Go back and test navigation to Gallery
    await page.goto('/');
    const galleryLink = page.locator('nav').getByRole('link', { name: 'Gallery', exact: true }).first();
    await expect(galleryLink).toBeVisible();
    await galleryLink.click();
    
    // Assert page navigated to /gallery
    await page.waitForURL('**/gallery');
    await expect(page.url()).toContain('/gallery');
  });
});
