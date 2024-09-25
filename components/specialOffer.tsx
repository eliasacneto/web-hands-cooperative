import React from "react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ResidentialIMG from "../public/assets/services/Discount.jpg";
import Image from "next/image";

const SpecialOffer = () => {
  return (
    <div className="bg-black bg-cover text-white w-full p-3 py-10 lg:flex lg:justify-center lg:items-center lg:gap-10">
      <div className="hidden lg:block">
        <Image
          className="rounded-3xl w-[450px] lg:w-[560px] "
          src={ResidentialIMG}
          width={0}
          height={0}
          quality={100}
          alt="hero-img"
        />
      </div>

      <div>
        <h2 className="font-bold text-center lg:text-start pt-4 text-[#FDE047] ">
          Special Offer
        </h2>

        <h1 className="font-bold text-4xl text-center pb-4 pt-4 lg:text-left">
          Exclusive Limited-Time Offer:
        </h1>
        <h1 className="text-[#FDE047] font-bold text-2xl text-center pb-4 lg:text-left">
          GET 20% OFF
        </h1>

        <div className="pl-4">
          <div>
            <div className="lg:flex">
              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-[#FDE047] " />
                <h1 className="pl-2 text-sm">Personalized service</h1>
              </div>

              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-[#FDE047] lg:ml-4 " />
                <h1 className="pl-2 text-sm">Unbeatable Value</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:flex">
              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-[#FDE047] " />
                <h1 className="pl-2 text-sm">Enhanced Health and Hygiene</h1>
              </div>

              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-[#FDE047] lg:ml-4" />
                <h1 className="pl-2 text-sm ">Deep Cleaning Delight</h1>
              </div>
            </div>
          </div>

          <div className="pb-4">
            <div className="lg:flex">
              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-[#FDE047] " />
                <h1 className="pl-2 text-sm">Time-Saving Convenience</h1>
              </div>

              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-[#FDE047] lg:ml-4" />
                <h1 className="pl-2 text-sm">Sparkling Results</h1>
              </div>
            </div>
          </div>

          <h3>Book Now and Experience the Super clean Difference!</h3>

          <Button className="bg-[#FDE047] flex justify-center items-center lg:justify-start text-black hover:bg-yellow-400 px-8 py-6 rounded-3xl font-semibold mt-4  mb-4">
            <Calendar className="mr-2" /> Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
