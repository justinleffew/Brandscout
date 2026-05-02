import './globals.css';
import Link from 'next/link';
export default function RootLayout({children}:{children:React.ReactNode}){return <html><body><div className='max-w-7xl mx-auto p-6 space-y-6'><header className='flex gap-4 flex-wrap'>{['dashboard','discover','brands','outreach','media-kit','case-studies','deals','settings'].map(p=><Link className='text-sm text-sky-300' key={p} href={`/${p}`}>{p}</Link>)}</header>{children}</div></body></html>}
