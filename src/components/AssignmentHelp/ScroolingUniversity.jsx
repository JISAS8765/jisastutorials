"use client";
import { useEffect, useRef } from "react";

const universities = [
  { name: "University of London", logo: "University of London.png" },
  { name: "Cardiff University", logo: "Cardiff University.png" },
  { name: "Middlesex University", logo: "Middlesex University London.png" },
  { name: "University of Manchester", logo: "University of Manchester.png" },
  { name: "University of Waterloo", logo: "University of Waterloo Vertical.png" },
  { name: "University of British Columbia", logo: "UBC University of British Columbia.png" },
];

export default function ScrollingUniversities() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 2;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 bg-white text-center px-6 md:px-16 lg:px-48">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Students from Leading Universities</h2>

      <div className="w-full max-w-screen-xl mx-auto overflow-hidden relative">
        <div ref={scrollRef} className="flex items-center gap-8 whitespace-nowrap overflow-hidden">
          {[...universities, ...universities].map((university, index) => (
            <div key={index} className="flex flex-col items-center min-w-[200px]">
              <div className="w-[180px] h-[100px] flex items-center justify-center overflow-hidden rounded-md shadow-md">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-gray-700 text-base font-semibold">{university.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
