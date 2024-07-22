import puppeteer, { Puppeteer } from "puppeteer";

async function openWebPage(){
   const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400
   })
   const page = await browser.newPage()

   await page.goto('https://example.com')
   await browser.close()
}
// openWebPagenode()
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
 // captureScreenshot()

 async function clickLogin(){
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 400,
    })
    const page = await browser.newPage()
 
    await page.goto('https://quotes.toscrape.com')
    await page.click('a[href= "/login"]')
    await new Promise(r => setTimeout(r,5000))
    await browser.close()}

//clickLogin()
async function getDataFromWebPage(){
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 300,
    })
    const page = await browser.newPage()
 
    await page.goto('https://quotes.toscrape.com')
    const result = await page.evaluate(()=> {
       const quotes = document.querySelectorAll('.quote')
       const data = [...quotes].map(quote => {
        const quoteText = quote.querySelector('.text').innerText
        const author = quote.querySelector('.author').innerText
        const tags = [...quote.querySelectorAll('.tag')].map(tag => tag.innerText)
        return {
            quoteText,
            author,
            tags
        }
       });
       return data
    });
    console.log(result)
    
    await browser.close()}

    getDataFromWebPage()