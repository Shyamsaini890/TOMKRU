import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <div className=" bg-[#111421] text-white ">
      <div className="bg-[#191E32] flex sm:w-[80%] w-[95%]  mx-auto p-10 rounded-tr-[80px] rounded-bl-[80px] flex-col gap-5 my-10">
        <div className="flex gap-6 flex-wrap lg:flex-nowrap md:flex-wrap ">
          {Array(4)
            .fill(null)
            .map(() => (
              <div className=" bg-[#191E32] flex gap-5 mx-auto ">
                <Image src={"/vector.svg"} width={60} height={0} />
                <div>
                  <h1>Customer support 24/7</h1>
                  <p className="text-xs">
                    have a question ? Speak to our agent online
                  </p>
                  <a href="#" className="text-[#FAFF00]">
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
        </div>
        <div className=" border border-[#FAFF00] w-[80%] mx-auto"></div>
        <div>
          <h1 className="text-[#FAFF00] sm:text-2xl font-bold text-lg text-center sm:text-start md:text-center">
            TomKru World: Cricket Exchange & Casino Sites in India 2022
          </h1>
          {Array(5)
            .fill(null)
            .map(() => (
              <div className="text-md">
                <p className="text-xs lg:text-lg text-center lg:text-start md:text-lg">
                  The challenge of choosing the best betting site in India is
                  made more difficult for novices. There are many sites that
                  offer you bonus money if you register, but this does not make
                  them better than other casinos because it's only one factor
                  among many others to consider when looking at which gambling
                  website will suit your needs most effectively.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
