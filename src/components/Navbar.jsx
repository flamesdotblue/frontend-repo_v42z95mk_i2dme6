import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'New', href: '#new' },
    { label: 'Men', href: '#men' },
    { label: 'Women', href: '#women' },
    { label: 'Lookbook', href: '#lookbook' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border-b border-neutral-200/70 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl sm:text-2xl">
            <span className="bg-gradient-to-r from-black to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">VibeWear</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded-md text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
