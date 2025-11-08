import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, IndianRupee } from 'lucide-react';

const packagesData = [
  {
    id: 'goa-sunrise',
    title: 'Goa Beach Escape',
    location: 'Goa',
    days: 4,
    price: 14999,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Calangute & Baga', 'Dolphin cruise', 'Candolim sunsets'],
  },
  {
    id: 'rajasthan-royal',
    title: 'Rajasthan Royal Trail',
    location: 'Jaipur, Jodhpur, Udaipur',
    days: 6,
    price: 25999,
    image: 'https://images.unsplash.com/photo-1613864883584-fe89fdd8f2d1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBSb3lhbCUyMFRyYWlsfGVufDB8MHx8fDE3NjI1ODMzMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    highlights: ['Amber Fort', 'City Palace', 'Lake Pichola'],
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwater Bliss',
    location: 'Alleppey & Munnar',
    days: 5,
    price: 22999,
    image: 'https://images.unsplash.com/photo-1621305420187-6e41754c108e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBCYWNrd2F0ZXIlMjBCbGlzc3xlbnwwfDB8fHwxNzYyNTgzMzIxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    highlights: ['Houseboat stay', 'Tea gardens', 'Ayurveda spa'],
  },
  {
    id: 'himachal-trek',
    title: 'Himalayan Adventure',
    location: 'Manali & Kasol',
    days: 7,
    price: 27999,
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Solang Valley', 'Paragliding', 'Café crawl'],
  },
];

export default function Packages() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return packagesData.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="packages" className="py-16 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Trip Packages</h2>
            <p className="text-gray-600 mt-1">Handcrafted journeys across India with smooth itineraries and transparent pricing.</p>
          </div>
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search places or packages..."
              className="w-full sm:w-80 px-4 py-3 pr-10 rounded-xl border border-black/10 bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500" size={18} />
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow hover:shadow-lg transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-white/90 border border-black/5">
                    <Calendar size={14} /> {p.days} days
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.location}</p>
                  <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                    {p.highlights.map(h => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 font-semibold">
                      <IndianRupee size={18} className="text-orange-600" />
                      {(p.price).toLocaleString('en-IN')}
                    </div>
                    <a href="#payment" className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors">Book</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
