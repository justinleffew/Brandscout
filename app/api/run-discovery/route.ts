import { BrandDiscoveryAgent } from '@/lib/agents';
export async function POST(req:Request){const {sector='lifestyle'}=await req.json();const brands=await new BrandDiscoveryAgent().run(sector);return Response.json({brands,mocked:true});}
