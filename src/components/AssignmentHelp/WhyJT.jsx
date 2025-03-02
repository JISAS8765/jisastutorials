import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const students = [
  '/student1.png',
  '/student2.png',
  '/student3.png',
  '/student4.png',
  '/student5.png',
  '/student6.png',
  '/student7.png',
  '/student8.png',
  '/student9.png',
];

const features = [
  {
    icon: '📋',
    title: 'Comprehensive Academic Assistance',
    description:
      'Jisas Tutorials provides expert support for assignments, lab reports, coding, PPTs, and projects, ensuring high-quality and plagiarism-free content.',
  },
  {
    icon: '✅',
    title: 'Quality & Reliability',
    description:
      'We deliver accurate, well-researched, and original work tailored to your academic needs, always on time and meeting the highest standards.',
  },
  {
    icon: '🎥',
    title: 'Personalized Video Tutorials',
    description:
      'Enhance your learning with step-by-step video tutorials on assignments, coding, and projects, offering personalized guidance at your pace.',
  },
  {
    icon: '🚀',
    title: 'Expert Mentorship & Guidance',
    description:
      'Our experienced mentors provide one-on-one guidance to help you excel in academics, from project planning to advanced problem-solving strategies.',
  },
];

export default function WhyJT() {
  return (
    <section className="py-12 text-center px-6 md:px-16 lg:px-48">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Why choose Jisas Tutorials as your Academic Partner?
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        At Jisas Tutorials, we provide expert academic assistance, including assignments, coding, lab reports, and video tutorials, ensuring quality, originality, and timely delivery.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-3 gap-4">
          {students.map((img, index) => (
            <div key={index} className="w-full aspect-square relative">
              <Image
                src={img}
                alt={`Student ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="space-y-6 col-span-2">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4">
              <span className="text-3xl">{feature.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
