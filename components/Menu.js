import React from "react";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";

const Menu = (props) => {
  return (
    <div
      className={` text-white bg-[#191E32] fixed top-0 left-0 h-full flex flex-col gap-20 w-full z-50 md:hidden ${
        props.show ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5 ">
        <h1 className=" font-extrabold text-2xl">TOMKRU</h1>
        <AiFillCloseCircle
          className=" text-white text-3xl"
          onClick={() => {
            props.showHandler(false);
          }}
        />
      </div>
      <div className=" flex flex-col gap-4 items-center">
        <Link
          href={"/login"}
          className="font-bold text-lg lg:text-lg  "
          onClick={() => {
            props.showHandler(false);
          }}
        >
          LOGIN
        </Link>
        <Link
          href={"/register"}
          className="font-bold text-lg lg:text-lg "
          onClick={() => {
            props.showHandler(false);
          }}
        >
          REGISTER
        </Link>
        <Link
          href={"/about"}
          className="font-bold text-lg lg:text-lg "
          onClick={() => {
            props.showHandler(false);
          }}
        >
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Menu;
