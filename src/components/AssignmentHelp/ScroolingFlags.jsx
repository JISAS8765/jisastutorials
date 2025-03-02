"use client";
import { useEffect, useRef } from "react";

const countries = [
  { name: "Singapore", code: "sg" },
  { name: "India", code: "in" },
  { name: "Australia", code: "au" },
  { name: "United Kingdom", code: "gb" },
  { name: "Ireland", code: "ie" },
  { name: "Canada", code: "ca" },
  { name: "United Arab Emirates", code: "ae" },
];

export default function ScrollingFlags() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Assignment Help Services Across the Globe!</h2>

      <div className="w-full max-w-screen-xl mx-auto overflow-hidden relative">
        <div ref={scrollRef} className="flex items-center gap-6 whitespace-nowrap overflow-hidden">
          {[...countries, ...countries].map((country, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              <div className="w-[120px] h-[80px] flex items-center justify-center overflow-hidden bg-gray-200 rounded-md shadow-md">
                <img
                  src={`https://flagcdn.com/w320/${country.code}.png`}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-gray-700 text-sm font-semibold">{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
