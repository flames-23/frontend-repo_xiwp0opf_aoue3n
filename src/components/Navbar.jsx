import { useState } from 'react';
import { Menu, X, Plane, MapPin, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Plane },
    { href: '#packages', label: 'Packages', icon: MapPin },
    { href: '#account', label: 'Account', icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
            <Plane size={18} />
          </span>
          Incredible India
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <Icon size={18} className="text-orange-500 group-hover:scale-110 transition-transform" />
              {label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-black/5"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
