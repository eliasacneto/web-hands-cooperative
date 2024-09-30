import React from "react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ResidentialIMG from "../public/assets/services/Discount.jpg";
import Image from "next/image";
import Link from "next/link";

const SpecialOffer = () => {
  return (
    <div className="bg-gray-100 bg-cover  w-full p-3 py-10 lg:flex lg:justify-center lg:items-center lg:gap-10">
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
        <h2 className="font-bold text-center lg:text-start pt-4 text-emerald-500 ">
          Special Offer
        </h2>

        <h1 className="font-bold text-4xl text-center pb-2 pt-4 lg:text-left">
          Exclusive Limited-Time Offer:
        </h1>
        <h1 className="text-emerald-500 font-black text-3xl text-center pb-4 lg:text-left">
          GET 20% OFF
        </h1>

        <div className="pl-4">
          <div>
            <div className="lg:flex">
              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-emerald-500  " />
                <h1 className="pl-2 text-sm font-semibold">
                  Personalized service
                </h1>
              </div>

              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-emerald-500 lg:ml-4 " />
                <h1 className="pl-2 text-sm font-semibold">Unbeatable Value</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:flex">
              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-emerald-500  " />
                <h1 className="pl-2 text-sm font-semibold">
                  Enhanced Health and Hygiene
                </h1>
              </div>

              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-emerald-500  lg:ml-4" />
                <h1 className="pl-2 text-sm font-semibold">
                  Deep Cleaning Delight
                </h1>
              </div>
            </div>
          </div>

          <div className="pb-4">
            <div className="lg:flex">
              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-emerald-500  " />
                <h1 className="pl-2 text-sm font-semibold">
                  Time-Saving Convenience
                </h1>
              </div>

              <div className="flex pt-2">
                <FaRegArrowAltCircleRight className="text-2xl text-emerald-500  lg:ml-4" />
                <h1 className="pl-2 text-sm font-semibold">
                  Sparkling Results
                </h1>
              </div>
            </div>
          </div>

          <h3 className="mt-10 font-bold">
            Book Now and Experience the Super clean difference!
          </h3>

          <Link href="#hero">
            <Button className="bg-[#FDE047] flex justify-center items-center lg:justify-start text-black hover:bg-yellow-400 px-8 py-6 rounded-3xl font-semibold mt-4  mb-4">
              <Calendar className="mr-2" /> Book now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
