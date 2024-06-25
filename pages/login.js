import Home from "@/components/Home";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { UserContext } from "@/context/UserContext";

const Login = () => {
  const { loginHandler } = useContext(UserContext);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    console.log(e.target.name);
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleOnClick = async () => {
    await loginHandler(value.email, value.password);
  };
  return (
    <div className="bg-[#111421] text-white">
      <div className="bg-[#2A3254]">
        <h1 className="sm:text-2xl font-bold text-center">
          WELCOME TO OURS <span className="text-[#faff00]"> WORLD!!</span>
        </h1>
      </div>
      <div className="flex flex-col items-center py-28 lg:py-10 relative">
        <Link
          href={"/"}
          className=" absolute left-5 top-5 flex items-center  gap-2"
        >
          <BiArrowBack /> Go Back
        </Link>
        <h1 className="sm:text-end sm:w-[60%] text-xs lg:text-sm ">
          IF YOU ENCOUNTER ISSUES, PLEASE CONTACT
          <span className="text-[#FF0000]"> ONLINE CS</span>
        </h1>
        <div className="sm:w-[60%]  sm:py-16 border-4 border-[#faff00] flex justify-between gap-5 px-5 py-5">
          <div className="w-[100%] bg-[#191E32] p-5 flex flex-col gap-5 md:p-2">
            <h1 className=" border-b border-[#faff00] text-center sm:text-2xl">
              SIGN IN
            </h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-xs">
                USERNAME
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Username/Email"
                className="bg-[#FFFFFF11] p-2 rounded"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-xs">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="bg-[#FFFFFF11] p-2 rounded"
                onChange={handleOnChange}
              />
            </div>
            <button
              className="bg-[#faff00] sm:w-[30%] w-[30%] rounded text-black mx-auto"
              onClick={handleOnClick}
            >
              LOGIN
            </button>
            <a href="#" className=" text-center text-xs sm:text-lg">
              Forgot Password?
            </a>
          </div>
          <Image
            src={"/image10.svg"}
            width={100}
            height={0}
            className="sm:w-[500px] w-[200px] hidden lg:block md:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
