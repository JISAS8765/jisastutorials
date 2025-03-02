import { Diamond, Package, ShieldCheck, Rocket, Headphones, Shield } from "lucide-react";

const features = [
  { icon: <Diamond size={40} />, title: "Plagiarism and AI Free", subtitle: "Original Content" },
  { icon: <Package size={40} />, title: "Excellent Quality Assurance", subtitle: "At Affordable Prices" },
  { icon: <ShieldCheck size={40} />, title: "100% Result Oriented", subtitle: "" },
  { icon: <Rocket size={40} />, title: "On-Time Delivery", subtitle: "" },
  { icon: <Headphones size={40} />, title: "Dedicated Support 24x7", subtitle: "" },
  { icon: <Shield size={40} />, title: "Robust Content Analyzation", subtitle: "" },
];

export default function Features() {
  return (
    <div className="relative py-12 px-6 md:px-16 lg:px-48 text-center">
        <br/>
      <h1 className="text-4xl font-bold mb-6 font-sans">Our Commitment</h1>
      <br/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="text-[#06b5d4]">{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            {feature.subtitle && <p className="text-gray-600">{feature.subtitle}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
