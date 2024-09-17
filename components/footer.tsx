import Image from "next/image";
import React from "react";
import LogoWhite from "../assets/logo/logo_white.png";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-emerald-700 w-full h-full flex flex-col justify-center items-start pl-6 gap-6 lg:justify-around lg:flex-row p-10 lg:px-6 lg:py-6 text-white lg:gap-12 lg:pt-10 lg:pb-20">
      <div className="flex flex-col w-[320px] gap-4 items-start lg:items-center  ">
        <Image
          className="-ml-10"
          src={LogoWhite}
          alt="logo"
          width={250}
          height={100}
        />
        <p className="text-white text-start w-full">
          Affordable cleaning, garden care, beauty, and repair services in
          Ireland. Professionalism with a Brazilian touch.
        </p>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-bold text-xl">Services</h3>
        <ul className="flex flex-col gap-2 mt-6">
          <li>Residential Cleaning</li>
          <li>Commercial Cleaning</li>
          <li>Deep Cleaning</li>
          <li>Window Cleaning</li>
        </ul>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-bold text-xl">Contact Info</h3>
        <ul className="flex flex-col gap-2 mt-6">
          <li>123 Main St. Anytown, Ireland</li>
          <li>+353 83 347 1038</li>
          <li>info@email.com</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl">Follow us</h3>
        <ul className="flex  gap-4 mt-6">
          {/* TODO: add social links  */}
          <li>
            <FaWhatsapp size={32} />
          </li>
          <FaInstagram size={32} />
          <FaLinkedin size={32} />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
