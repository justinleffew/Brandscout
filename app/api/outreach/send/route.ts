import { mockEmail } from '@/lib/providers/mock';
export async function POST(req:Request){const {to,subject,body,approved}=await req.json();if(!approved)return new Response('approval required',{status:400});const sent=await mockEmail.send({to,subject,body});return Response.json(sent)}
