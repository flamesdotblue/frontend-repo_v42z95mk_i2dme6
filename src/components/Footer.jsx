import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'About', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-extrabold text-xl">VibeWear</h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              A modern uniform for creators. Thoughtfully designed essentials made with sustainable materials and ethical production.
            </p>
          </div>
          <nav className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} VibeWear. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
