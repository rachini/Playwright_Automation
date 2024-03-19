import { test, expect } from '@playwright/test'
import { TIMEOUT } from 'dns';

test('Demo login test1', async ({page})=>{
    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Rachini')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
   
    await page.locator('[id="log-in"]').click()
});

test.only('Demo login test2', async ({page})=>{
  
   // const context = await browser.newContext();
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Meta+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('Meta+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByLabel('Password:').press('p');
});