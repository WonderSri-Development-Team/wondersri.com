"use client"; // Required for client-side interactivity in Next.js

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageSlider: React.FC = () => {
  // Array of image URLs
  const images = [
    "https://deyotours.com/wp-content/uploads/2022/10/Madu-River-mongroves.jpg",
    "https://www.ceylonexpeditions.com/medias/media/big/861/sathapaha-duwa-madu-river-balapitiya.jpg",
    "https://www.ceylonexpeditions.com/medias/media/big/854/mangrove-cave-madu-ganga.jpg",
    "https://www.beyondescapes.com/uploads/dayTours/day-tour-240812-phGEA1.jpg",
  ];

  // State for the pop-up modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // State for the thumbnail Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="bg-blue-500 w-full py-8">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Main Swiper Slider */}
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 md:h-96 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="mt-4"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20 object-cover rounded-lg cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pop-Up Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full p-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              {/* Improved Close Button */}
              <button
                className="absolute -top-4 -right-4 text-white text-4xl bg-transparent hover:bg-opacity-25 rounded-full p-2 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Custom CSS for Swiper Arrows and Pagination */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important; /* White arrows */
            font-size: 2rem !important; /* Bigger arrows */
            background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
            width: 40px !important;
            height: 40px !important;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.5rem !important; /* Adjust arrow icon size */
          }

          /* Customize Pagination Dots */
          .swiper-pagination-bullet {
            background: white !important; /* White dots */
            opacity: 0.5 !important; /* Semi-transparent */
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important; /* Fully visible for active dot */
          }

          /* Thumbnail Swiper */
          .swiper-slide-thumb-active img {
            opacity: 1 !important; /* Highlight the selected thumbnail */
          }
        `}</style>
      </div>
    </div>
  );
};

export default ImageSlider;
