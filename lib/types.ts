export type ContactConfidence='verified'|'likely'|'generic'|'guessed'|'unknown';
export type NextAction='research'|'pitch'|'send'|'follow_up'|'nurture'|'negotiate'|'archive'|'update_proof';
export interface Brand{ id:string; name:string; normalized_name:string; domain:string; sector:string; dream_brand:boolean; existing_partner:boolean; do_not_contact:boolean; fit_score?:number; deal_probability?:number }
export interface ResearchSource{url:string;title:string;snippet:string;confidence:number}
