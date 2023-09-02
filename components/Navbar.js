import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Menu";
import { auth } from "@/firebase/firebase";

const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);

  const [clock, setClock] = useState("");

  function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let time = hour + ":" + min + ":" + sec;

    setClock(time);
  }

  setTimeout(() => {
    currentTime();
  }, 1000);
  return (
    <>
      <div className={`text-white ${auth.currentUser ? "hidden" : "block"}`}>
        <div className="flex justify-between sm:px-28 bg-black py-2 text-sm lg:text-lg">
          <p>(GMT+5.5) {clock}</p>
          <div className="flex gap-5">
            <a href="#">24*7 Support</a>
            <a href="#">Facebook</a>
            <a href="#">Email</a>
          </div>
        </div>
        <div className="flex justify-between sm:px-36 px-10  sm:py-2 bg-[#191E32] text-xl">
          <h1 className="font-extrabold text-lg lg:text-xl">TOMKRU</h1>

          <div className="flex gap-4 items-center">
            <button
              className="block lg:hidden md:hidden"
              onClick={() => {
                setsidebar(true);
              }}
            >
              <AiOutlineMenu />
            </button>
            <Link href={"/"} className=" hidden lg:block md:block">
              <AiFillHome />
            </Link>

            <Link
              href={"/login"}
              className="font-bold text-lg lg:text-lg hidden lg:block md:block "
            >
              LOGIN
            </Link>
            <Link
              href={"/register"}
              className="font-bold text-lg lg:text-lg hidden lg:block md:block "
            >
              REGISTER
            </Link>
            <Link
              href={"/about"}
              className="font-bold text-lg lg:text-lg hidden lg:block md:block"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
      <Sidebar show={sidebar} showHandler={setsidebar} />
    </>
  );
};

export default Navbar;
