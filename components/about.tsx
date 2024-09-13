import React from "react";
import { Button } from "./ui/button";
import OurPurpose from "./AboutUs/ourPurpose";

const About = () => {

  return (

    <div>

      <div className="bg-emerald-500 lg:w-screen w-[100%] p-12 text-white font-bold mb-20 ">

          <h1 className="text-3xl">About Us</h1>
          <p className="text-sm">Home / About Us</p>

      </div>

      <div className="flex flex-col w-full justify-center items-center lg:mx-20  lg:flex-row">

      
        <div className="lg:w-[50%]">
          <div className="w-80 h-[450px] bg-[#020618] rounded-[15px]">IMG</div>
        </div>

        <div className="w-[50%] items-center mt-10">

              <p className="text-emerald-500 font-bold pb-5 text-center">About us</p>

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

        <div className="bg-emerald-500 w-full p-12 text-white mt-20 mb-20 flex gap-8 justify-center items-center">

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

        <OurPurpose />


    </div>
  );
};

export default About;

//rafce
