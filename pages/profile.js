import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex text-white min-h-[100vh]">
        <Sidebar />
        <div className="flex justify-center  bg-[#111421] w-full">
          <div className="sm:w-[50%] bg-[#2a325444]   mx-5   rounded-[46px] relative my-auto">
            <Image
              src={"/Rectangle23.svg"}
              width={500}
              height={0}
              className="w-[100%]"
            />
            <Image
              src={"/profileimage.svg"}
              width={100}
              height={0}
              className=" absolute top-5  md:w-[150px] lg:w-[270px] "
            />
            <div className=" relative">
              <button className=" absolute bg-[#2EF700]  text-black sm:px-3 px-1 text-xs lg:text-lg rounded right-10 top-5">
                UPDATE
              </button>
            </div>
            <div className=" grid grid-cols-2 gap-3 sm:px-10  px-2 sm:py-28 pb-8 pt-20 ">
              <div className="flex flex-col">
                <label htmlFor="Name" className=" sm:text-sm text-xs">
                  NAME
                </label>
                <input
                  type="text"
                  className=" bg-[#2A325488] rounded-lg sm:p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Name" className=" sm:text-sm text-xs">
                  USERNAME
                </label>
                <input
                  type="text"
                  className=" bg-[#2A325488] rounded-lg sm:p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Name" className=" sm:text-sm text-xs pr-5">
                  MOBILE NO.
                </label>
                <input
                  type="text"
                  className=" bg-[#2A325488] rounded-lg sm:p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Name" className=" sm:text-sm text-xs">
                  ADDRESS
                </label>
                <input
                  type="text"
                  className=" bg-[#2A325488] rounded-lg sm:p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Name" className=" sm:text-sm text-xs">
                  CHOOSE CURRENCY
                </label>
                <select name="" id="" className="bg-[#2A325488] rounded sm:p-2">
                  <option value="INR" className="text-white bg-[#191E32]">
                    INR
                  </option>
                  <option value="USD" className="text-white bg-[#191E32]">
                    USD
                  </option>
                  <option value="Euro" className="text-white bg-[#191E32]">
                    $
                  </option>
                  <option
                    value="UAE Dirham"
                    className="text-white bg-[#191E32]"
                  >
                    UAE
                  </option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="Name" className=" sm:text-sm text-xs">
                  REFERRAL CODE
                </label>
                <input
                  type="text"
                  className=" bg-[#2A325488] rounded-lg sm:p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
