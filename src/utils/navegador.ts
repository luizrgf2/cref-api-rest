import { navegadorInterface, newPageType } from "../protocols/navegador";
import puppeteer, { Browser, Page } from 'puppeteer'


export class Navegador implements navegadorInterface{
    
    private readonly headless : boolean
    private readonly args : string[] | undefined

    constructor(headlers:boolean, args?:string[]){
        this.headless = headlers
        this.args = args
    }

    async nav() : Promise<Browser>{

        let browser : Browser
        
        try{
            browser = await puppeteer.launch({
                headless:this.headless,
                args:this.args,
                defaultViewport: null
            })
        }catch{
            console.log("Algum erro ao abrir o navegador, tentando novamente.....")
            browser = await this.nav()
        }

        return browser


    }

    async newPage({
        browser,
        requestInterception
    }: newPageType){
        let page : Page

        try{
            page = await browser.newPage()
            await page.setRequestInterception(requestInterception)
            await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36")
        }catch{
            console.log("Erro ao abrir uma nova página, tentando novamente...")
            page = await this.newPage({
                browser,
                requestInterception
            })
        }

        return page
        

    }
    
}