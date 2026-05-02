export const normalize=(v:string)=>v.toLowerCase().replace(/[^a-z0-9]/g,'');
export function isDuplicate(name:string,domain:string,set:Set<string>){const key=`${normalize(name)}::${domain.toLowerCase()}`;if(set.has(key))return true;set.add(key);return false}
