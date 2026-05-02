import { EmailProvider, LLMProvider, SearchProvider, WebFetchProvider } from './interfaces';
export const mockSearch:SearchProvider={async search(q){return [{title:`Result for ${q}`,url:'https://example.com',snippet:'Mock snippet'}]}};
export const mockFetch:WebFetchProvider={async fetch(url){return {title:url,content:'Mock content'}}};
export const mockLLM:LLMProvider={async complete(prompt){return `Mock completion: ${prompt.slice(0,80)}`}};
export const mockEmail:EmailProvider={async send(){return {id:'manual',sentAt:new Date().toISOString(),manual:true}}};
