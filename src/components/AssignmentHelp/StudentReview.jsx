"use client";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    name: "Khalifa A",
    date: "2025-02-01",
    rating: 5,
    review: "Hey, I'm so grateful .... I got my results and I passed for 2 assignments....",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Saniya",
    date: "2024-11-05",
    rating: 5,
    review: "Best Assignment Service! i got 97% in Arduino Project!!!",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Jacob Burden",
    date: "2024-10-23",
    rating: 5,
    review: "It's my first time in taking their service. I got 95.6 in verolog lab reports.",
    profilePic: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Carmen K",
    date: "2024-10-20",
    rating: 4,
    review: "Great service! The assignments were completed on time and were of high quality.",
    profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Jane Smith",
    date: "2024-10-18",
    rating: 5,
    review: "Excellent support and guidance throughout the process. Highly recommended!",
    profilePic: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Humaid Johnson",
    date: "2024-10-15",
    rating: 4,
    review: "Very professional and helpful. I got a good grade on my assignment.",
    profilePic: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Alwasi Brown",
    date: "2024-10-10",
    rating: 5,
    review: "Amazing experience! The team is very knowledgeable and supportive.",
    profilePic: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Charlie Davis",
    date: "2024-10-05",
    rating: 4,
    review: "Good service, but there was a slight delay in delivery. Otherwise, everything was perfect.",
    profilePic: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Walt White",
    date: "2024-10-01",
    rating: 5,
    review: "Fantastic experience! The quality of work exceeded my expectations.",
    profilePic: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    name: "Frank Wilson",
    date: "2024-09-25",
    rating: 4,
    review: "Very good service. The assignments were well-written and detailed.",
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function StudentReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Student's Reviews</h2>

      <div className="flex flex-col items-center">
        {/* Google Rating */}
        <div className="flex items-center gap-2 text-gray-700 mb-4">
          <p className="text-lg font-bold">EXCELLENT</p>
          <div className="flex text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
          </div>
          <p className="text-sm">Based on <span className="font-bold">469 reviews</span></p>
          <FcGoogle size={36} color="#4285F4" />
        </div>

        {/* Review Carousel */}
        <div className="relative w-full max-w-4xl overflow-hidden">
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
            <FaChevronLeft />
          </button>

          <div className="flex gap-6 justify-start transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-4 rounded-lg shadow-lg w-[280px] bg-white border flex-shrink-0"
              >
                {/* Profile */}
                <div className="flex w-full justify-between items-center gap-2">
                  <div className="flex items-center gap-2"> 
                  <img src={review.profilePic} alt={review.name} className="w-10 h-10 rounded-full" />
                  <div className="text-left">
                    <h3 className="text-sm font-semibold">{review.name}</h3>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                    </div>

                  <FcGoogle size={36} color="#4285F4" />
                </div>

                {/* Star Rating */}
                <div className="flex text-yellow-400 my-2">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-700">{review.review}</p>
              </div>
            ))}
          </div>

          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}