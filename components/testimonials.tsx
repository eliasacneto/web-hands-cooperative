import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Samir from "../public/assets/testimonials/samir.jpg";
import Ada from "../public/assets/testimonials/ada.jpg";
import { Calendar } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="flex flex-col-reverse w-full items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 p-8">
      <div className="flex flex-col items-center justify-center lg:items-start">
        <h3 className="text-center lg:text-start text-emerald-500 font-bold pt-5 pb-5">
          Testimonials
        </h3>
        <div className="flex flex-col items-center lg:flex-row justify-between w-full">
          <div className="flex flex-col lg:w-[600px]">
            <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start lg:w-[380px]">
              Testimonials from Our Customers
            </h1>
            <p className="pb-5 text-start">
              Fermentum enim a tellus ac feugiat sit. Posuere cras in duis nec
              potenti. Velit ornare mi auctor aliquam pellentesque arcu.
              Tristique mollis vel turpis.
            </p>
          </div>
          <Link href="#hero">
            <Button className="bg-[#FDE047] flex justify-center items-center lg:justify-start text-black hover:bg-yellow-400 px-8 py-6 rounded-3xl font-semibold">
              <Calendar className="mr-2" /> Book now
            </Button>
          </Link>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col justify-center items-center gap-7 lg:flex-row w-full">
          {/* Primeiro Testimonial */}
          <div className="flex flex-col mt-10 justify-center items-center lg:justify-start lg:items-start gap-4 border border-1 shadow-sm lg:w-[558px] p-14 rounded-xl">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="flex px-4 items-center justify-center rounded-full lg:justify-start lg:items-start">
                <Image
                  src={Samir}
                  alt="Samir Rajesh"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-2xl">Samir Rajesh</h2>
                <span>Marketing Manager</span>
              </div>
            </div>
            <h2 className="font-bold text-xl text-emerald-600">
              Quick and Reliable service
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, voluptates rem amet ratione culpa ullam, quo labore id
              dolore corrupti nesciunt architecto? Consectetur, harum. Dolorem
              excepturi est nulla perspiciatis eius?
            </p>
          </div>

          {/* Segundo Testimonial */}
          <div className="flex flex-col mt-10 justify-center items-center lg:justify-start lg:items-start gap-4 border border-1 shadow-sm lg:w-[558px] p-14 rounded-xl">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="flex px-4  items-center justify-center rounded-full lg:justify-start lg:items-start">
                <Image
                  src={Ada}
                  alt="Ada Waren"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-lg lg:text-2xl">Ada Waren</h2>
                <span>Small Business Owner</span>
              </div>
            </div>
            <h2 className="font-bold text-xl text-emerald-600">
              Impressive Attention to Detail
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, voluptates rem amet ratione culpa ullam, quo labore id
              dolore corrupti nesciunt architecto? Consectetur, harum. Dolorem
              excepturi est nulla perspiciatis eius?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
