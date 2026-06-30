import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "On orders above ₹999",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% Safe & Secure",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "7 Days Return Policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We're always here to help",
  },
];

function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Why Choose <span className="text-green-500">SmartBuy?</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Shopping made simple, secure, and reliable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
                <Icon size={30} className="text-green-600" />
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;