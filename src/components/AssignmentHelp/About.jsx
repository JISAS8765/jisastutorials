import Image from 'next/image';

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white px-6 md:px-16 lg:px-48 py-12 md:py-16 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2">
        <Image
          src="/aboutpic.png" 
          alt="Group of happy students"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Jisas Tutorials</h2>
        <p className="text-gray-700 mb-4">
          At <strong>Jisas Tutorials</strong>, we provide expert assistance in assignments, lab reports, PPTs, coding, programming projects, and more. Our experienced professionals ensure high-quality, customized solutions tailored to your academic needs.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you need help with complex programming assignments or detailed lab reports, our team delivers plagiarism-free, AI-free, and well-structured content. We also offer video tutorials for better conceptual clarity, ensuring you grasp the subject effortlessly.
        </p>
        <a href="https://wa.me/+919508888477" className="bg-[#06B6D4] text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center justify-center hover:bg-[#0596B4] transition">
          💬 Chat Now
        </a>
      </div>
    </section>
  );
}
