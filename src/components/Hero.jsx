import { motion } from 'framer-motion';
import { Mountain, Sun, Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-sky-50" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-orange-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900">
              Explore Incredible India
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              From the Himalayas to the Indian Ocean, discover handpicked journeys with smooth planning, secure payments, and a delightful dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packages" className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors">Browse Packages</a>
              <a href="#account" className="px-5 py-3 rounded-lg bg-white text-black border border-black/10 hover:bg-black/5 transition-colors">Login / Sign up</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[{icon: Mountain, label: 'Himalayas'}, {icon: Sun, label: 'Deserts'}, {icon: Waves, label: 'Beaches'}].map(({icon: Icon, label}) => (
                <motion.div key={label} whileHover={{ y: -4 }} className="p-4 rounded-xl bg-white/70 backdrop-blur border border-black/5 shadow-sm">
                  <Icon className="text-orange-500" />
                  <p className="mt-2 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-black/5">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                alt="India collage"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
