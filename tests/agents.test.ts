import { describe,it,expect } from 'vitest';
import { DealProbabilityAgent, FitScoringAgent, FollowUpAgent } from '@/lib/agents';
import { isDuplicate } from '@/lib/dedupe';

describe('scoring',()=>{it('fit scoring',()=>{expect(new FitScoringAgent().score({audience:80,content:80,prestige:70,paid:75,travel:60,evidence:80,contact:90,novelty:85})).toBe(78)});
it('deal scoring',()=>{expect(new DealProbabilityAgent().score({contact:70,evidence:60,timing:50,budget:70,fit:90,warm:40,activity:60})).toBe(63)});});

describe('dedupe',()=>{it('blocks duplicates',()=>{const set=new Set<string>();expect(isDuplicate('Nike','nike.com',set)).toBe(false);expect(isDuplicate('NIKE','nike.com',set)).toBe(true);});});

describe('follow-up',()=>{it('adds business days',()=>{const [d1,d2]=new FollowUpAgent().schedule(new Date('2026-05-01T00:00:00Z'));expect(d1.startsWith('2026-05-08')).toBe(true);expect(d2.startsWith('2026-05-15')).toBe(true);});});
