import { motion } from 'framer-motion';
import { User, Plane, MapPin, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const [tab, setTab] = useState('trips');

  const trips = [
    { id: 1, title: 'Kerala Backwater Bliss', date: '12 Nov 2025', status: 'Confirmed' },
    { id: 2, title: 'Rajasthan Royal Trail', date: '25 Dec 2025', status: 'Pending' },
  ];

  return (
    <section id="account" className="py-16 bg-gradient-to-t from-white to-sky-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm">
          <div className="p-6 border-b border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 inline-flex items-center justify-center">
                <User />
              </div>
              <div>
                <h3 className="font-semibold">Welcome, Traveller</h3>
                <p className="text-sm text-gray-600">Manage your trips and profile</p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 hover:bg-black/5">
              <LogOut size={18} /> Logout
            </button>
          </div>

          <div className="grid md:grid-cols-4">
            <aside className="p-4 border-b md:border-b-0 md:border-r border-black/5">
              <nav className="space-y-2">
                {[
                  { id: 'trips', label: 'My Trips', icon: Plane },
                  { id: 'profile', label: 'Profile', icon: User },
                  { id: 'saved', label: 'Saved', icon: MapPin },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    className={`w-full text-left inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${tab === id ? 'bg-orange-600 text-white border-orange-600' : 'border-black/10 hover:bg-black/5'}`}
                  >
                    <Icon size={18} /> {label}
                  </button>
                ))}
              </nav>
            </aside>

            <div className="md:col-span-3 p-6">
              <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                {tab === 'trips' && (
                  <div>
                    <h4 className="font-semibold">Upcoming & Recent Trips</h4>
                    <div className="mt-4 space-y-3">
                      {trips.map(t => (
                        <div key={t.id} className="p-4 rounded-xl border border-black/5 bg-white/70 backdrop-blur flex items-center justify-between">
                          <div>
                            <p className="font-medium">{t.title}</p>
                            <p className="text-sm text-gray-600">{t.date}</p>
                          </div>
                          <span className={`px-3 py-1 text-sm rounded-full ${t.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-800'}`}>{t.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {tab === 'profile' && (
                  <div className="space-y-3">
                    <h4 className="font-semibold">Profile</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input placeholder="Full Name" className="px-3 py-2 rounded-lg border border-black/10" />
                      <input placeholder="Email" className="px-3 py-2 rounded-lg border border-black/10" />
                      <input placeholder="Phone" className="px-3 py-2 rounded-lg border border-black/10" />
                      <input placeholder="City" className="px-3 py-2 rounded-lg border border-black/10" />
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-black text-white">Save</button>
                  </div>
                )}
                {tab === 'saved' && (
                  <div>
                    <h4 className="font-semibold">Saved Destinations</h4>
                    <p className="text-sm text-gray-600 mt-2">You haven’t saved any destinations yet.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
