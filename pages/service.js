import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Service = () => {
  return (
    <div className="bg-[#111421] text-white flex min-h-[100vh] relative">
      <Sidebar />
      <div className="flex flex-col w-full items-center justify-center">
        <div className="bg-[#2A3254] flex gap-2 items-center w-[50%] mx-auto p-3 rounded-xl">
          <AiOutlineSearch className=" text-xl" />
          <input
            type="search"
            placeholder="Search Anything..."
            className=" bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-5 px-5  justify-center py-10">
            <Image
              src={"/image2.svg"}
              width={100}
              height={0}
              className=" flex "
            />
            <Image src={"/image3.svg"} width={100} height={0} />
            <Image src={"/image4.svg"} width={100} height={0} />
            <Image src={"/image5.svg"} width={100} height={0} />
          </div>
          <button className="bg-[#5348E4] px-10 py-2 rounded-md ">
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
