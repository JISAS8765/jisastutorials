import { FaWhatsapp, FaFileAlt, FaPaypal, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { id: 1, title: 'Contact on WhatsApp', desc: 'Text me on WhatsApp by clicking on the WhatsApp icon in the right bottom.', icon: <FaWhatsapp size={40} /> },
  { id: 2, title: 'Send Requirements', desc: 'Send your assignment, lab report, or PPT requirements.', icon: <FaFileAlt size={40} /> },
  { id: 3, title: 'Make Payment', desc: 'Complete the payment securely through PayPal.', icon: <FaPaypal size={40} /> },
  { id: 4, title: 'Receive Assignment', desc: 'Get your assignment on WhatsApp within the deadline.', icon: <FaCheckCircle size={40} /> }
];

export default function HowWeWork() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">HOW WE WORK?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border-t-4 border-[#06B6D4]">
              <div className="text-[#06B6D4] mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.id}. {step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
