import { motion } from 'framer-motion';
import { Mountain, Sun, Waves } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* 3D playful cover as background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft painterly overlays to evoke 2D animation style */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ opacity: 0.9, y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[140%] h-64 bg-[radial-gradient(ellipse_at_center,rgba(255,241,232,0.8),rgba(255,241,232,0)_70%)] blur-2xl"
        />
        <ParallaxMist className="absolute bottom-0 left-0 right-0" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <motion.h1
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900"
            >
              Explore Incredible India
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-gray-700"
            >
              From the Himalayas to the Indian Ocean, discover hand‑painted journeys with smooth motion, secure payments, and a delightful dashboard.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#packages" className="px-5 py-3 rounded-lg bg-black text-white shadow-lg shadow-black/10 hover:bg-gray-900 transition-colors">Browse Packages</motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#account" className="px-5 py-3 rounded-lg bg-white/90 text-black border border-black/10 backdrop-blur hover:bg-white transition-colors">Login / Sign up</motion.a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[{icon: Mountain, label: 'Himalayas'}, {icon: Sun, label: 'Deserts'}, {icon: Waves, label: 'Beaches'}].map(({icon: Icon, label}) => (
                <motion.div key={label} whileHover={{ y: -6, rotate: [-1, 1, 0] }} transition={{ duration: 0.4 }} className="p-4 rounded-xl bg-white/80 backdrop-blur border border-black/5 shadow-sm">
                  <Icon className="text-orange-500" />
                  <p className="mt-2 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <motion.div
              initial={{ y: 8 }}
              animate={{ y: [8, -6, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-black/5"
            >
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                alt="India collage"
                className="w-full h-full object-cover saturate-[1.1] contrast-[1.05]"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxMist({ className = '' }) {
  // layered 2D parallax shapes for a painterly/Disney-esque feel
  return (
    <div className={className}>
      <motion.svg
        width="100%"
        height="180"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="text-orange-100"
        initial={{ y: 10, opacity: 0.7 }}
        animate={{ y: [10, 0, 10] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path fill="currentColor" d="M0,64 C180,120 360,0 540,40 C720,80 900,200 1080,160 C1260,120 1440,80 1440,80 L1440,180 L0,180 Z" />
      </motion.svg>
      <motion.svg
        width="100%"
        height="180"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="-mt-10 text-sky-100"
        initial={{ y: -4, opacity: 0.6 }}
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path fill="currentColor" d="M0,96 C220,140 420,80 640,120 C860,160 1100,100 1440,120 L1440,180 L0,180 Z" />
      </motion.svg>
    </div>
  );
}
