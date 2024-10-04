import React from "react";
import { Button } from "./ui/button";
import OurPurpose from "./AboutUs/ourPurpose";
import CleanerIMG from "../public/assets/cleaner.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 w-full py-10">
      <div className="flex flex-col mx-10 lg:mx-10 ">
        <Image
          className="rounded-3xl w-[300px] lg:w-[450px] "
          src={CleanerIMG}
          width={0}
          height={0}
          quality={100}
          alt="hero-img"
        />
      </div>

      <div className="mx-4 flex flex-col items-center justify-center lg:items-start mt-10">
        <p className="text-center lg:text-start text-emerald-500 font-bold pb-5">
          About us
        </p>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start">
            Experience expert cleaning services
          </h1>

          <p className="pb-5 text-start">
            Discover the skilled and dedicated individuals behind Brazilian
            Hands Co-operative, offering a variety of high-quality services to
            make your life easier and your home more beautiful.
          </p>
        </div>
        <Link href="#hero">
          <Button className="bg-[#FDE047] flex justify-center items-center lg:justify-start text-black hover:bg-yellow-400 px-8 py-3 rounded-full font-semibold lg:hover:-translate-y-2 transition-transform duration-700">
            Request now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;

//rafce
