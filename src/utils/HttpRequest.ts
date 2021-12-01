import {HttpRequest,dlt,get,post,put,HttpResponse} from '../protocols/http'
import axios, { AxiosRequestHeaders } from 'axios'

export class HTTPRequest implements HttpRequest{
    private readonly baseUrl: string
    constructor(baseUrl?:string){
        this.baseUrl = baseUrl || ""
    }
    async get({headers,url}:get){

        var res = undefined

        const promise =  new Promise((res,rej)=>{
            axios.get(`${this.baseUrl}${url || ""}`,{headers: headers === undefined ? headers : headers as AxiosRequestHeaders}).
            then(response=>{
                res({
                    statusCode:response.status,
                    body:response.data
                } as HttpResponse)
            }).
            catch(error=>{
                res({
                    statusCode:error.response.status,
                    body:error.response.data
                } as HttpResponse)
            })
        })

        res = await promise
        return res
    }

    async post({headers,url,data}:post){
        var res = undefined

        const promise =  new Promise((res,rej)=>{
            axios.post(`${this.baseUrl}${url || ""}`,data,{headers: headers === undefined ? headers : headers as AxiosRequestHeaders}).
            then(response=>{
                res({
                    statusCode:response.status,
                    body:response.data
                } as HttpResponse)
            }).
            catch(error=>{
                res({
                    statusCode:error.response.status,
                    body:error.response.data
                } as HttpResponse)
            })
        })

        res = await promise
        return res

    }
    
    async put({url,headers,data}:put){
        var res = undefined

        const promise =  new Promise((res,rej)=>{
            axios.put(`${this.baseUrl}${url || ""}`,data,{headers: headers === undefined ? headers : headers as AxiosRequestHeaders}).
            then(response=>{
                res({
                    statusCode:response.status,
                    body:response.data
                } as HttpResponse)
            }).
            catch(error=>{
                res({
                    statusCode:error.response.status,
                    body:error.response.data
                } as HttpResponse)
            })
        })

        res = await promise
        return res
    }

    async delete({headers,url}:dlt){
        var res = undefined

        const promise =  new Promise((res,rej)=>{
            axios.delete(`${this.baseUrl}${url || ""}`,{headers: headers === undefined ? headers : headers as AxiosRequestHeaders}).
            then(response=>{
                res({
                    statusCode:response.status,
                    body:response.data
                } as HttpResponse)
            }).
            catch(error=>{
                res({
                    statusCode:error.response.status,
                    body:error.response.data
                } as HttpResponse)
            })
        })

        res = await promise
        return res

    }
}


