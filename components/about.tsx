import React from "react";
import { Button } from "./ui/button";
import OurPurpose from "./AboutUs/ourPurpose";
import CleanerIMG from "../public/assets/cleaner.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex-col justify-center">
      {/* <div className="bg-emerald-500  p-12 text-white font-bold mb-20 ">
        <h1 className="text-3xl">About Us</h1>
        <p className="text-sm">Home / About Us</p>
      </div> */}

      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:w-full">
        <div className="flex flex-col mx-10 lg:mx-10 lg:w-1/2">
          <Image
            className="rounded-3xl"
            src={CleanerIMG}
            width={500}
            height={500}
            alt="hero-img"
          />
        </div>

        <div className="mx-4 lg:w-1/2 flex flex-col items-center justify-center lg:items-start mt-10">
          <p className="text-center lg:text-start text-emerald-500 font-bold pb-5">
            About us
          </p>

          <div className="flex flex-col lg:w-[560px] ">
            <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start">
              Experience Expert Cleaning Services
            </h1>

            <p className="pb-5 text-start">
              Vitae bibendum tincidunt sagittis tellus lectus. Amet quis sed
              eget viverra aliquet magna turpis. Imperdiet sociis viverra sem
              amet. Cum augue sit feugiat eu. Sed gravida integer sit risus sed
              id a nisl nunc.
            </p>
          </div>
          <Button className="bg-[#FDE047] flex justify-center items-center lg:justify-start text-black hover:bg-yellow-400 px-8 py-6 rounded-3xl font-semibold ">
            Request now
          </Button>
        </div>
      </div>

      <div className="bg-emerald-500  p-12 text-white mt-20 mb-20 flex gap-8 justify-center items-center">
        <div className="text-center">
          <h1 className="font-bold text-3xl">100+</h1>
          <p className="text-sm">Types of Tools Used</p>
        </div>

        <div className="text-center">
          <h1 className="font-bold text-3xl">9800+</h1>
          <p className="text-sm">Miles of Pipes Installed</p>
        </div>

        <div className="text-center">
          <h1 className="font-bold text-3xl">24/7</h1>
          <p className="text-sm">Emergency Service</p>
        </div>
      </div>

      {/* <OurPurpose /> */}
    </div>
  );
};

export default About;

//rafce
