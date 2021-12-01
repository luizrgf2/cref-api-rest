export interface get{
    url?:string,
    headers?:object
}
export interface post{
    url?:string,
    headers?:object,
    data: any
}
export interface put{
    url?:string,
    headers?:object,
    data: any
}
export interface dlt{
    url?:string,
    headers?:object
}

export interface HttpRequest{

    get: (item:get) => any
    post: (item:post) => any
    put: (item:put) => any
    delete: (item:dlt) => any

}

export interface HttpResponse{
    statusCode:number,
    body: any
}