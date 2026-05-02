import './globals.css';
import Link from 'next/link';
import type { Route } from 'next';
import type { ReactNode } from 'react';

const navItems: Array<{ label: string; href: Route }> = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Discover', href: '/discover' },
  { label: 'Brands', href: '/brands' },
  { label: 'Outreach', href: '/outreach' },
  { label: 'Media Kit', href: '/media-kit' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Deals', href: '/deals' },
  { label: 'Settings', href: '/settings' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-7xl space-y-6 p-6">
          <header className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link className="text-sm text-sky-300" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
