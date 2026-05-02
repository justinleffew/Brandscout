import { describe,it,expect } from 'vitest';
import { POST as sendRoute } from '@/app/api/outreach/send/route';
import { POST as discoveryRoute } from '@/app/api/run-discovery/route';

describe('outreach status and gmail mock',()=>{it('requires approval',async()=>{const res=await sendRoute(new Request('http://x',{method:'POST',body:JSON.stringify({to:'a@b.com',subject:'s',body:'b',approved:false})}));expect(res.status).toBe(400)});
it('sends with mock',async()=>{const res=await sendRoute(new Request('http://x',{method:'POST',body:JSON.stringify({to:'a@b.com',subject:'s',body:'b',approved:true})}));expect(res.status).toBe(200)});
});

describe('mock discovery run',()=>{it('returns brands',async()=>{const res=await discoveryRoute(new Request('http://x',{method:'POST',body:JSON.stringify({sector:'travel'})}));const data=await res.json();expect(data.brands.length).toBeGreaterThan(0);});});
