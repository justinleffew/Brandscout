export interface SearchProvider{search(q:string):Promise<{title:string,url:string,snippet:string}[]>}
export interface WebFetchProvider{fetch(url:string):Promise<{title:string,content:string}>}
export interface LLMProvider{complete(prompt:string):Promise<string>}
export interface EmailProvider{send(args:{to:string,subject:string,body:string}):Promise<{id?:string,sentAt:string,manual:boolean}>}
