"use client";
import { GraduationCap, FlaskRound, Laptop, Briefcase, Brain, Handshake } from "lucide-react";

const subjects = [
  { icon: <Laptop size={40} color="#06B6D4" />, title: "IT, programming, and web" },
  { icon: <Briefcase size={40} color="#06B6D4" />, title: "Business studies" },
  { icon: <Brain size={40} color="#06B6D4" />, title: "Social sciences" },
  { icon: <FlaskRound size={40} color="#06B6D4" />, title: "Applied and professional sciences" },
  { icon: <GraduationCap size={40} color="#06B6D4" />, title: "Formal sciences" },
  { icon: <Handshake size={40} color="#06B6D4" />, title: "Humanities" },
];

export default function SubjectsGrid() {
  return (
    <section className="py-12 bg-white text-center px-6 md:px-16 lg:px-48">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Expert Assignment Help Across Diverse Subjects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {subjects.map((subject, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition">
            {subject.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{subject.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
