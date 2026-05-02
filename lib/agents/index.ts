import { addBusinessDays } from '@/lib/date';
import { mockLLM, mockSearch } from '@/lib/providers/mock';
import { Brand, ContactConfidence, NextAction, ResearchSource } from '@/lib/types';

export class BrandDiscoveryAgent{async run(sector:string){return [{name:'Pottery Barn',domain:'potterybarn.com',sector},{name:'Sunny Family Resort',domain:'sunnyresort.example',sector}]}}
export class BrandEnrichmentAgent{async run(brand:string):Promise<ResearchSource[]>{const r=await mockSearch.search(brand);return r.map(x=>({...x,confidence:0.62}))}}
export class ContactFinderAgent{classify(email?:string):ContactConfidence{if(!email)return'unknown';if(email.includes('partnership'))return'verified';if(email.startsWith('hello@'))return'generic';return'guessed'}}
export class FitScoringAgent{score(input:{audience:number;content:number;prestige:number;paid:number;travel:number;evidence:number;contact:number;novelty:number}){return Math.round(Object.values(input).reduce((a,b)=>a+b,0)/8)}}
export class DealProbabilityAgent{score(input:{contact:number;evidence:number;timing:number;budget:number;fit:number;warm:number;activity:number}){return Math.round(Object.values(input).reduce((a,b)=>a+b,0)/7)}}
export class PitchAngleAgent{async run(brand:Brand){const base=`${brand.name} + Nicole`;return ['Family-first storytelling','Conversion-focused seasonal drop','Travel/lifestyle UGC package'].map((x)=>`${x} for ${base}`)}}
export class OfferBuilderAgent{run(travel:boolean){const base=[{name:'Starter',anchor:1200,floor:800},{name:'Core Campaign',anchor:3000,floor:2200},{name:'Premium Partnership',anchor:6500,floor:5000}];if(travel)base.push({name:'Travel Package',anchor:9000,floor:7000});return base}}
export class OutreachComposerAgent{async run(brand:Brand){const s=await mockLLM.complete(`Write outreach for ${brand.name}`);return {subjectLines:[`Idea for ${brand.name}`,'Partnership concept'],shortEmail:s,longEmail:s,dm:s,follow1:'Checking in after 5 business days',follow2:'Final bump after 10 business days'}}}
export class FollowUpAgent{schedule(start=new Date()){return [addBusinessDays(start,5),addBusinessDays(start,10)]}}
export class NextBestActionAgent{pick(b:Brand):NextAction{if(b.do_not_contact)return'archive';if(!b.fit_score)return'research';if((b.deal_probability??0)>70)return'send';if((b.deal_probability??0)>50)return'pitch';return'nurture'}}
