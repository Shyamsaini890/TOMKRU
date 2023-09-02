import Home from "@/components/Home";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { UserContext } from "@/context/UserContext";

const Register = () => {
  const { signUpHandler } = useContext(UserContext);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleOnClick = async () => {
    signUpHandler(value.email, value.password);
  };

  return (
    <div className="bg-[#111421] text-white">
      <div className="bg-[#2A3254]">
        <h1 className="sm:text-2xl font-bold text-center">
          WELCOME TO OUR <span className="text-[#faff00]"> WORLD!!</span>
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
              Register
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
                placeholder="Enter Password"
                name="password"
                className="bg-[#FFFFFF11] p-2 rounded"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmpassword" className="text-xs">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className="bg-[#FFFFFF11] p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Choosecurrency" className="text-xs">
                Choose Currency
              </label>
              <select name="" id="" className="bg-[#ffffff11] rounded p-2">
                <option value="INR" className="text-white bg-[#191E32]">
                  INR
                </option>
                <option value="USD" className="text-white bg-[#191E32]">
                  USD
                </option>
                <option value="Euro" className="text-white bg-[#191E32]">
                  $
                </option>
                <option value="UAE Dirham" className="text-white bg-[#191E32]">
                  UAE
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmpassword" className="text-xs">
                Referral Code
              </label>
              <input
                type="passwprd"
                placeholder="Referral Code (optional)"
                className="bg-[#FFFFFF11] p-2 rounded"
              />
            </div>
            <button
              onClick={handleOnClick}
              className="bg-[#faff00] sm:w-[30%] w-[30%] rounded text-black font-semibold mx-auto"
            >
              REGISTER
            </button>
          </div>
          <Image
            src={"/registerimage.svg"}
            width={100}
            height={0}
            className="sm:w-[500px] w-[200px] hidden lg:block md:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
