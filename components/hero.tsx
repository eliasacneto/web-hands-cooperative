import { CircleArrowRight } from "lucide-react";
import Broom from "../public/assets/icons/broom.png";
import React from "react";
import Image from "next/image";
import Form from "./form";
import BHC from "../public/assets/bhc-hero.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <div className=" bg-hero bg-cover flex flex-col items-center mx-4 lg:mx-0 lg:flex-row lg:justify-center lg:w-full lg:h-full">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center lg:items-start mt-10">
          <p className="text-center items-center lg:text-start bg-black w-fit px-4 py-2 rounded-full text-white font-bold mb-5 ">
            #01 Cleaning Service
          </p>

          <h1 className="text-3xl text-center font-semibold lg:text-[52px] lg:w-[563px] lg:leading-relaxed lg:text-start ">
            Brazillian Hands Expert Cleaning Services Await
          </h1>
          <p className="mt-5 text-center lg:w-[448px] lg:text-start">
            Discover reliable residential cleaning, garden maintenance,
            painting, beauty services, and more with Brazilian Hands
            Co-operative.
          </p>
        </div>
        <div className="lg:flex flex-col hidden">
          <div className="flex mt-10 justify-start items-center lg:justify-start gap-4">
            <div className="flex bg-emerald-400 px-4 py-4 items-center justify-center rounded-full">
              <Image src={Broom} alt="broom icon" width={24} height={24} />
            </div>
            <h2 className="font-bold text-2xl">Our Services</h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#DAF9FF] w-fit px-10 py-6 lg:w-[300px] lg:px-0 mt-4 rounded-xl ">
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
      </div>
      <div className="flex flex-col lg:flex-row items-center w-1/2 lg:justify-center ">
        <Image
          className="w-[250px] lg:w-[450px] items-end "
          src={BHC}
          width={0}
          height={0}
          alt="hero-img"
        />
        <div className="flex z-10 lg:-ml-6 lg:mt-10">
          <Form />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
