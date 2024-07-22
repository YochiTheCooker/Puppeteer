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