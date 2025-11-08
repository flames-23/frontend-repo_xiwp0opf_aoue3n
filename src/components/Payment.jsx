import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck } from 'lucide-react';

export default function Payment() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', card: '', month: '', year: '', cvv: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const canPay = form.name && form.email && form.card.length >= 16 && form.month && form.year && form.cvv.length >= 3;

  return (
    <section id="payment" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
          <div className="p-6 border-b border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 inline-flex items-center justify-center">
                <CreditCard />
              </div>
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-600">Pay with card – demo only</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <ShieldCheck className="text-emerald-600" size={18} /> 256-bit SSL
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="A.R. Sharma" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input name="email" value={form.email} onChange={onChange} type="email" className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Card Number</label>
                <input name="card" value={form.card} onChange={onChange} inputMode="numeric" maxLength={19} className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="4242 4242 4242 4242" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-sm text-gray-700">MM</label>
                  <input name="month" value={form.month} onChange={onChange} inputMode="numeric" maxLength={2} className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="08" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">YY</label>
                  <input name="year" value={form.year} onChange={onChange} inputMode="numeric" maxLength={2} className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="28" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">CVV</label>
                  <input name="cvv" value={form.cvv} onChange={onChange} inputMode="numeric" maxLength={4} className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="123" />
                </div>
              </div>
              <button
                disabled={!canPay}
                onClick={() => setStep(2)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${canPay ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-gray-200 text-gray-500'}`}
              >
                Pay Now (Demo)
              </button>
              <p className="text-xs text-gray-500">This is a demo payment UI. No real charges.</p>
            </div>

            <div className="p-6 bg-gradient-to-b from-orange-50/60 to-white border-t md:border-l border-black/5">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <h4 className="font-semibold">Order Summary</h4>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between"><span>Package</span><span>Selected at booking</span></div>
                  <div className="flex justify-between"><span>Travellers</span><span>2 Adults</span></div>
                  <div className="flex justify-between"><span>Taxes & Fees</span><span>Included</span></div>
                  <div className="border-t pt-2 flex justify-between font-semibold"><span>Total</span><span>₹ 29,999</span></div>
                </div>
                <div className="mt-4 text-xs text-gray-600">Free cancellation within 24 hours of booking confirmation.</div>
              </motion.div>
              <Animate step={step} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Animate({ step }) {
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-6 text-center"
    >
      {step === 1 ? (
        <p className="text-sm text-gray-600">Enter payment details to complete your booking.</p>
      ) : (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
          Payment successful (demo)! Your itinerary is now available in Dashboard.
        </div>
      )}
    </motion.div>
  );
}
