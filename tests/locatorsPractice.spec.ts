import {test, expect} from '@playwright/test';

test('abc01 First table of notifications', async ({page}) =>  { 

    const leftPanelNotificationLoc = page.locator('a[href="/admin/notifications"]');
    const plainNotificationLoc = page.locator('div.fade:has-text("This is a plain notification")');
    const notificationWithCloseButtonLoc = page.locator('div[role="alert"]:has-text("This is a notification with close button.")'); 
    const notificationAndIconLoc = page.locator('.fade:has-text("This is a notification with close button and icon.")');
    const notificationWithLongTextLoc = page.locator('//span[contains(text(),"This is a notification with close button and icon and have many lines. ")]')

    await page.goto('');
    await leftPanelNotificationLoc.click();
    const text1 = await plainNotificationLoc.textContent();
    console.log(text1);
    await expect(text1).toContain('This is a plain notification');
    const text2 = await notificationWithCloseButtonLoc.textContent();
    console.log(text2);
    await expect(text2).toContain('This is a notification with close button.');
    const text3 = await notificationAndIconLoc.textContent();
    console.log(text3);
    await expect(text3).toContain('This is a notification with close button and icon.');
    const text4 = await notificationWithLongTextLoc.textContent();
    console.log(text4);
    await expect(text4).toContain('and have many lines');
});


test('abc02 Second table of notifications', async ({page}) =>  { 

    const leftPanelNotificationLoc = page.locator('a[href="/admin/notifications"]');
    const primaryNotificationLoc = page.locator('//b[text() = "Primary -"]');
    const infoNotificationLoc = page.locator('//b[text() = "Info -"]');
    const successNotificationLoc = page.locator('//b[text() = "Success -"]');
    const warningNotificationWithLoc = page.locator('//b[text() = "Warning -"]');
    const dangerNotificationWithLoc = page.locator('//b[text() = "Danger -"]');

    await page.goto('');
    await leftPanelNotificationLoc.click();
    const compareText5 = await primaryNotificationLoc.textContent();
    console.log(compareText5);
    await expect(compareText5).toContain('Primary -');
    const compareText6 = await infoNotificationLoc.textContent();
    console.log(compareText6);
    await expect(compareText6).toContain('Info -');
    const compareText7 = await successNotificationLoc.textContent();
    console.log(compareText7);
    await expect(compareText7).toContain('Success -');
    const compareText8 = await warningNotificationWithLoc.textContent();
    console.log(compareText8);
    await expect(compareText8).toContain('Warning -');
    const compareText9 = await dangerNotificationWithLoc.textContent();
    console.log(compareText9);
    await expect(compareText9).toContain('Danger -');
    
});