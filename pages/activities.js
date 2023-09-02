import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
const Activities = () => {
  return (
    <div className="flex text-white min-h-[100vh]">
      <Sidebar />
      <div className="bg-[#111421] flex w-full   justify-center ">
        <div className=" sm:w-[50%] mx-5 border bg-[#2A3254]  my-auto flex items-center gap-10 sm:px-10 px-5 py-5 rounded-tl-3xl rounded-br-3xl">
          <Image src={"/image11.svg"} width={100} height={0} />
          <div>
            <h1>DIAMOND PARTY</h1>
            <p className=" text-[#FAFF00]">Win ₹7500/-</p>
            <p>Thu,27 July</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
