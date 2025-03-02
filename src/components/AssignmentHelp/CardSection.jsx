import Image from "next/image";

export default function CardsSection() {
  return (
    <div className="relative flex flex-col items-center md:flex-row justify-center gap-24 md:gap-48 lg:gap-60 -mt-20">
     
      <div className="bg-white text-gray-900 rounded-lg shadow-lg px-6 w-96 flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="w-40 h-auto flex-shrink-0">
            <Image 
              src="/pic3.jpg" 
              alt="Student" 
              width={160} 
              height={240} 
              className="w-full h-auto object-contain" 
            />
          </div>
          <div className="flex justify-center items-center ml-4">
            <h2 className="text-md font-bold text-center">
            Expert help with assignments, labs, coding, reports, and PPTs.

    </h2>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-900 rounded-lg shadow-lg px-6 w-96 flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="flex justify-center items-center mr-4">
            <h2 className="text-md font-bold text-center">
            Personalized video tutorials for each assignments and coding.</h2>
          </div>
          <div className="w-40 h-auto flex-shrink-0">
            <Image 
              src="/pic2.png" 
              alt="Student" 
              width={160} 
              height={240} 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>

    </div>
  );
}
