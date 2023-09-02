import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { auth } from "@/firebase/firebase";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { handleLogout } = useContext(UserContext);

  const { asPath } = useRouter();
  return (
    <>
      <div className=" fixed z-30 w-full text-2xl flex items-center justify-between px-10 bg-[#191E32]">
        <h1 className="  font-extrabold">TOMKRU</h1>
        <FiLogOut
          onClick={() => {
            handleLogout();
          }}
        />
      </div>
      <div className="z-20 sticky left-0 top-6 sm:h-[100vh] mt-8 w-[20%] overflow-hidden  ">
        <div className="bg-[#2A3254] flex justify-center relative h-full w-full">
          <AiOutlineMenu className=" absolute right-5 top-3" />
          <div className="flex  flex-col w-full">
            <Image
              src={"/profileimage.svg"}
              width={100}
              height={0}
              className=" mx-auto pt-10"
            />
            <h1 className=" mx-auto mb-10 flex">
              <span className="hidden sm:block">User,</span>
              <span className=" text-[#faff00] hidden sm:block">
                {auth.currentUser?.displayName}
              </span>
            </h1>
            <div className="flex flex-col sm:pl-10 md:pl-0 items-center">
              <Link
                href={"/dashboard"}
                className={`flex text-xl font-semibold gap-3 py-1 px-3 rounded-tl-full rounded-bl-full w-full items-center ${
                  asPath == "/dashboard" ? "bg-[#191E32]" : ""
                }`}
              >
                <Image src={"/view-dashboard.svg"} width={25} height={0} />
                <span className="hidden sm:block">DASHBOARD</span>
              </Link>
              <Link
                href={"/service"}
                className={`flex text-xl font-semibold gap-3 py-1 px-3 rounded-tl-full rounded-bl-full w-full items-center ${
                  asPath == "/service" ? "bg-[#191E32]" : ""
                }`}
              >
                <Image src={"/cog-outline.svg"} width={25} height={0} />
                <span className="hidden sm:block">SERVICES</span>
              </Link>
              <Link
                href={"/activities"}
                className={`flex text-xl font-semibold gap-3 py-1 px-3 rounded-tl-full rounded-bl-full w-full items-center ${
                  asPath == "/activities" ? "bg-[#191E32]" : ""
                }`}
              >
                <Image src={"/bookmark-outline.svg"} width={25} height={0} />
                <span className="hidden sm:block">ACTIVITIES</span>
              </Link>
              <Link
                href={"/profile"}
                className={`flex text-xl font-semibold gap-3 py-1 px-3 rounded-tl-full rounded-bl-full w-full items-center ${
                  asPath == "/profile" ? "bg-[#191E32]" : ""
                }`}
              >
                <Image src={"/account.svg"} width={25} height={0} />
                <span className="hidden sm:block">PROFILE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
