
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";

// Feature Data
const features = [
  {
    icon: Truck,
    title: "Free Express Shipping",
    desc: "Complimentary delivery on all orders over ₹999 across India.",
    badge: "Fast & Free",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted Payments",
    desc: "100% secure checkout via UPI, Cards, and NetBanking.",
    badge: "Verified",
  },
  {
    icon: RotateCcw,
    title: "Hassle-Free Returns",
    desc: "No questions asked 7-day return policy with instant refunds.",
    badge: "Easy Policy",
  },
  {
    icon: Headphones,
    title: "24/7 Priority Support",
    desc: "Dedicated customer service team available via chat and call.",
    badge: "Always On",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="  bg-linear-to-b from-black to-stone-200 text-slate-100 py-20 px-6 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
         
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Choose <span className="text-green-500">BuySmart?</span>
          </h2>
          
          <p className="text-slate-200 mt-4 text-base sm:text-lg leading-relaxed">
            We prioritize quality, security, and speed at every step of your online shopping journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-black border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-emerald-500/5"
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon size={26} />
                    </div>

                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}