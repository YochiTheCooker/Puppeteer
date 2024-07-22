async function captureScreenshot(){
    const browser = await puppeteer.launch({
     headless: false,
     slowMo: 400
    })
    const page = await browser.newPage()
 
    await page.goto('https://example.com')
    await page.screenshot({path: "example.png"})
    await browser.close()
 }
 captureScreenshot()