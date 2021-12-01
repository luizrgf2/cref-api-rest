import {Browser, Page} from 'puppeteer'

export interface newPageType{
    browser:Browser,
    requestInterception: boolean,

}


export interface navegadorInterface{
    nav: () => Promise<Browser>
    newPage : (props:newPageType) =>  Promise<Page>
}