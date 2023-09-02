import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
function Verticalslider() {
  return (
    <>
      <Swiper
        direction="vertical"
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay]}
        simulateTouch={false}
        className=" w-[30vh] h-[200px] "
        noSwipingClass="swiper-no-swiping"
      >
        {Array(20)
          .fill(null)
          .map(() => (
            <SwiperSlide className=" py-5">
              <div className=" p-2 bg-[#2A3254]  rounded-xl">
                <h1>Player ****385</h1>
                <p>
                  Win <span className="text-[#faff00]"> ₹45142</span>
                </p>
                <button className="bg-[#faff00] text-black rounded-2xl w-[30%]">
                  Play It
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
export { Verticalslider };

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 1000 }}
        modules={[Pagination, Autoplay]}
        className=" w-[100%]"
      >
        {Array(10)
          .fill(null)
          .map(() => (
            <SwiperSlide>
              <Image
                src={"/players.svg"}
                width={100}
                height={0}
                className="w-[100%] h-[100%]"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Carousel;
