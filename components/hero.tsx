import { CircleArrowRight } from "lucide-react";
import Broom from "../assets/icons/broom.png";
import React from "react";
import Image from "next/image";
import Form from "./form";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-center">
      <div className="flex flex-col mx-20 lg:mx-40">
        <h1 className="text-3xl text-center font-medium lg:text-4xl lg:w-[563px] lg:text-start ">
          Brazillian Hands Expert Cleaning Services Await
        </h1>
        <p className="mt-5 text-center lg:w-[448px] lg:text-start">
          Discover reliable residential cleaning, garden maintenance, painting,
          beauty services, and more with Brazilian Hands Co-operative.
        </p>
        <div className="flex mt-10 justify-center items-center lg:justify-start gap-4">
          <div className="flex bg-emerald-400 px-4 py-4 items-center justify-center rounded-full">
            <Image src={Broom} alt="broom icon" width={24} height={24} />
          </div>
          <h2 className="font-bold text-2xl">Our Services:</h2>
        </div>
        <div className="flex flex-col justify-center bg-[#DAF9FF] py-6 lg:w-[273px] mt-4 rounded-xl ">
          <ul className=" flex flex-col justify-center gap-5 lg:items-start ml-6">
            <li className="flex gap-4">
              <CircleArrowRight />
              Residential Cleaning
            </li>
            <li className="flex gap-4">
              <CircleArrowRight />
              Commercial Cleaning
            </li>
            <li className="flex gap-4">
              <CircleArrowRight />
              Deep Cleaning
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <Form />
      </div>
    </div>
  );
};

export default Hero;
