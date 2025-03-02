import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";

export default function AssignmentHelp() {
  return (
    <div className="relative bg-cyan-500 text-white py-4 md:py-0 px-6 md:px-16 lg:px-48 flex flex-col md:flex-row items-center justify-between ">
      <div className="max-w-xl  ">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Best Academic Assistance & Project Help for Students</h1>
        <div className="flex flex-col gap-6 font-serif  text-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <p className=" ">Top-rated academic support provider</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💰</span>
            <p>Affordable pricing with top-quality service</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎥</span>
            <p>Get Video Tutorials along with each assignment.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <p>Helped more than 10k+ Students.</p>
          </div>
        </div>
       
      </div>
      <div className="mt-10 md:mt-0">
        <Image
          src="/jisasimggg.png"
          alt="Smiling Student"
          width={350}
          height={350}
          className="rounded-lg "
        />
      </div>
      <div className="fixed bottom-10 right-10 transform -translate-y-1/2  font-semibold cursor-pointer z-20">
  <a  href="https://wa.me/+919508888477" className="flex items-center space-x-1 hover:text-gray-300 ">
  <RiWhatsappFill size={48} color="#42C152"  />

  </a>
</div>
    </div>
  );
}

