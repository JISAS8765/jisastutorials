"use client";
import { ClipboardList, GraduationCap, Globe, Award, Video } from "lucide-react";

const highlights = [
  { icon: <ClipboardList size={40} color="#06B6D4" />, count: "11,287+", text: "Assignments Completed" },
  { icon: <GraduationCap size={40} color="#06B6D4" />, count: "6,833+", text: "Students Trusted AMA" },
  { icon: <Globe size={40} color="#06B6D4" />, count: "60+", text: "Countries Serving" },
  { icon: <Award size={40} color="#06B6D4" />, count: "100+", text: "Professional Experts" },
  { icon: <Video size={40} color="#06B6D4" />, count: "938+", text: "Video Tutorials Completed" },
];

export default function KeyHighlights() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
              {highlight.icon}
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-800">{highlight.count}</h3>
            <p className="text-gray-600">{highlight.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
