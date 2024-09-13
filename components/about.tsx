import React from "react";
import { CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center lg:mx-20  lg:flex-row">
      <div className="w-[50%]">
        <div className="w-80 h-[450px] bg-[#020618] rounded-[15px]">IMG</div>
      </div>

      <div className="w-[50%] items-center mt-10">
        <p className="text-blue-600 font-bold pb-5 text-center">About us</p>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-3xl text-center font-medium lg:text-4xl lg:text-start">
            Experience Expert Cleaning Services
          </h1>

          <p className="pb-5 text-start">
            Vitae bibendum tincidunt sagittis tellus lectus. Amet quis sed eget
            viverra aliquet magna turpis. Imperdiet sociis viverra sem amet. Cum
            augue sit feugiat eu. Sed gravida integer sit risus sed id a nisl
            nunc.
          </p>
          <Button className="bg-[#FDE047] text-black hover:bg-yellow-400 h-[52px] rounded-3xl">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;

//rafce
