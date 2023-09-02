import Image from "next/image";
import React from "react";
import Faq from "./Faq";
import { AiFillHome } from "react-icons/ai";
import Carousel, { Verticalslider } from "@/components/Carousel";
import Dashboard from "./Sidebar";
const Home = () => {
  const slides = [{ url: "@/public/players.svg" }];
  return (
    <>
      <div>
        <div className="bg-[#2A3254] p-2 flex items-center sm:gap-16 gap-3 justify-center flex-wrap text-sm lg:text-lg text-white">
          <AiFillHome />
          <a href="#">SPORTS</a>
          <a href="#">CASINO</a>
          <a href="#">SLOT</a>
          <a href="#">TABLE</a>
          <a href="#">LOTTERY</a>
          <a href="#">ARCADE</a>
          <a href="#">PROMOTIONS</a>
          <a href="#">VIP</a>
          <p>|</p>
        </div>
        <div className="flex flex-col gap-5 bg-[#111421] text-white w-[100%]">
          <div className=" w-[100%]">
            <Carousel />
          </div>
          <div className="w-[80%] py-4 sm:text-xl mx-auto bg-[#2A3254] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl lg:rounded-br-none flex items-center justify-between px-5">
            <h1 className="text-[#FAFF00]">Slot</h1>
            <div className=" flex gap-3 ">
              <a href="#" className=" hover:text-[#FAFF00] hover:underline">
                JILI
              </a>
              <a href="#" className=" hover:text-[#FAFF00] hover:underline">
                NetEnt
              </a>
              <a href="#" className=" hover:text-[#FAFF00] hover:underline">
                PG
              </a>
              <a href="#" className=" hover:text-[#FAFF00] hover:underline">
                CQ9
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row md:flex-row md:justify-between md:w-[80%] md:mx-auto lg:w-[80%]  lg:justify-between lg:mx-auto px-5 lg:px-0  flex-wrap">
            <div className="flex gap-2 items-center   ">
              <Image
                src={"/image1.svg"}
                width={120}
                height={0}
                className="w-[80px] lg:w-[130px] md:w-[100px]"
              />
              <div className="flex flex-col gap-7 ">
                <div className="flex gap-3 w-[60px] lg:w-[100%] md:w-[90px]">
                  <Image src={"/image2.svg"} width={120} height={0} />
                  <Image src={"/image4.svg"} width={120} height={0} />
                  <Image src={"/image3.svg"} width={120} height={0} />
                  <Image src={"/image5.svg"} width={120} height={0} />
                </div>
                <div className="flex gap-3 w-[60px] lg:w-[100%] h-full md:w-[90px]">
                  <Image src={"/image6.svg"} width={120} height={0} />
                  <Image src={"/image7.svg"} width={120} height={0} />
                  <Image src={"/image8.svg"} width={120} height={0} />
                  <Image src={"/image9.svg"} width={120} height={0} />
                </div>
              </div>
            </div>
            <div>
              <Verticalslider />
            </div>
          </div>

          <Faq />
        </div>
      </div>
    </>
  );
};

export default Home;
