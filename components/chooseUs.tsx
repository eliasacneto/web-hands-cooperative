import React from "react";
import { Button } from "./ui/button";
import OurPurpose from "./AboutUs/ourPurpose";
import CleanerIMG from "../public/assets/cleaner.jpg";
import Image from "next/image";
import Broom from "../public/assets/icons/broom.png";
import ChooseIMG from "../public/assets/choose-img.jpg";

const ChooseUs = () => {
  return (
    <div className="flex flex-col-reverse bg-emerald-50 items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 p-8">
      <div className="mx-4 flex flex-col items-center justify-center lg:items-start ">
        <h3 className="text-center lg:text-start text-emerald-500 font-bold pt-5 pb-5">
          Why Choose Us
        </h3>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start">
            Reasons to Choose Brazilian Hands
          </h1>

          <p className="pb-5 text-start">
            Nulla tempor vitae elementum blandit commodo elementum massa
            facilisis est. Bibendum amet placerat lobortis sem. Sagittis aliquam
            habitant elit in. Ut quam odio dolor diam in et volutpat nisl quis.
            Justo aenean quis iaculis massa in.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:w-[657px]">
          <div className="flex mt-10  flex-col justify-start items-start lg:justify-start gap-4">
            <div className="flex  bg-emerald-400 px-4 py-4 items-start justify-start rounded-full">
              <Image src={Broom} alt="broom icon" width={24} height={24} />
            </div>
            <h2 className="font-bold text-2xl">Professional Expertise</h2>
            <p>
              Adipiscing sit at non tempor vitae cursus velit senectus. Dolor
              enim condimentum feugiat malesuada rhoncus egestas arcu quam.
              Fames maecenas ut at.
            </p>
          </div>
          <div className="flex mt-10  flex-col justify-start items-start lg:justify-start gap-4">
            <div className="flex  bg-emerald-400 px-4 py-4 items-start justify-start rounded-full">
              <Image src={Broom} alt="broom icon" width={24} height={24} />
            </div>
            <h2 className="font-bold text-2xl">Customized Solutions</h2>
            <p>
              Adipiscing sit at non tempor vitae cursus velit senectus. Dolor
              enim condimentum feugiat malesuada rhoncus egestas arcu quam.
              Fames maecenas ut at.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-10 lg:mx-10 ">
        <Image
          className="rounded-3xl w-[250px] lg:w-[450px] "
          src={ChooseIMG}
          width={0}
          height={0}
          quality={100}
          alt="hero-img"
        />
      </div>
    </div>
    /* <OurPurpose /> */
  );
};

export default ChooseUs;

//rafce
