import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Payment from './components/Payment';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Payment />
        <Dashboard />
      </main>
      <footer className="py-10 border-t border-black/5 text-center text-sm text-gray-600 bg-white">
        © {new Date().getFullYear()} Incredible India — Crafted with love for travelers.
      </footer>
    </div>
  );
}
