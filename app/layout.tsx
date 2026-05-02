import './globals.css';
import Link from 'next/link';

const navLinks = [
  { href: '/dashboard', label: 'dashboard' },
  { href: '/discover', label: 'discover' },
  { href: '/brands', label: 'brands' },
  { href: '/outreach', label: 'outreach' },
  { href: '/media-kit', label: 'media-kit' },
  { href: '/case-studies', label: 'case-studies' },
  { href: '/deals', label: 'deals' },
  { href: '/settings', label: 'settings' },
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="max-w-7xl mx-auto p-6 space-y-6">
          <header className="flex gap-4 flex-wrap">
            {navLinks.map((link) => (
              <Link className="text-sm text-sky-300" key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
