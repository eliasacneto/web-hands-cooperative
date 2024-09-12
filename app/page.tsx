"use client";
import Broom from "./assets/icons/broom.png";
import { Calendar, CircleArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Form from "@/components/form";
import About from "@/components/about";



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hidden lg:flex justify-between mx-36 mt-7 mb-7">
        <h4 className="text-gray-400 font-semibold text-base">
          brazilianhandscooperative@gmail.com
        </h4>
        <a
          href="https://api.whatsapp.com/send?phone=353833471038&text=Hello,%20I%20came%20from%20the%20website%20and%20I%20would%20like%20to%20schedule%20a%20service!%0A"
          target="_blank"
          className="text-2xl font-semibold text-emerald-500"
        >
          {" "}
          +353 83 347 1038
        </a>
      </div>
      <div className="flex fixed items-center z-40 bg-white w-screen lg:hidden px-6 py-6 shadow-md">
        <a href="#" className="">
          <img
            className="w-12"
            src="./assets/images/logo-icon.png"
            alt="logo"
          />
        </a>

        <button
          onClick={toggleMenu}
          className="fixed flex items-center top-2 right-0 p-4 z-40 lg:hidden lg:bg-none  rounded-lg"
        >
          <MenuIcon size={28} className="text-emerald-400 font-bold" />
        </button>
      </div>

      {/* Menu */}
      <header className="h-12 md:h-24 px-8 md:px-12 lg:px-8 xl:px-28 flex gap-8 items-center bg-emerald-500  text-white antialiased font-bold mb-24">
        <a href="#" className="">
          <img
            className="w-12"
            src="./assets/images/logo-icon.png"
            alt="logo"
          />
        </a>

        <div
          className={`fixed lg:relative top-0 left-0 bg-emerald-500 lg:bg-transparent bg-opacity-95 text-center overflow-hidden transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center justify-center w-full z-10 lg:h-full lg:opacity-100 ${
            isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <nav className="lg:flex-1 justify-end flex gap-8 flex-col lg:flex-row lg:ml-16">
            <a
              className=" hover:text-[#024218] transition-all duration-500"
              href="index.html"
            >
              Home
            </a>
            <a
              className="hover:text-[#024218] transition-all duration-500"
              href="about-us.html"
            >
              About Us
            </a>
            <a
              className="hover:text-[#024218] transition-all duration-500"
              href="services.html"
            >
              Services
            </a>
            <a
              className="hover:text-[#024218] transition-all duration-500"
              href="services.html"
            >
              Work with us
            </a>
          </nav>
          <div className="flex items-center flex-col gap-5 lg:flex-row lg:gap-0">
            <a
              href="https://wa.me/557499797700?text=Ol%C3%Ahttps://api.whatsapp.com/send?phone=353833471038&text=Hello,%20I%20came%20from%20the%20website%20and%20I%20would%20like%20to%20schedule%20a%20service!%0A1%21+Vim+pelo+site+e+gostaria+de+saber+mais+sobre+o+projeto%21"
              target="_blank"
              className="flex w-full px-8 py-4 bg-yellow-300 rounded-full text-base font-semibold text-black hover:bg-yellow-400 transition-all duration-500  hover:font-semibold"
            >
              <Calendar className="mr-2" /> Book schedule
            </a>
          </div>
        </div>
      </header>
      <div className="flex ">
        <div className="flex flex-col mx-20 lg:mx-40">
          <h1 className="text-3xl text-center font-medium lg:text-4xl lg:w-[563px] lg:text-start ">
            Brazillian Hands Expert Cleaning Services Await
          </h1>
          <p className="mt-5 text-center lg:w-[448px] lg:text-start">
            Discover reliable residential cleaning, garden maintenance,
            painting, beauty services, and more with Brazilian Hands
            Co-operative.
          </p>
          <div className="flex mt-10 justify-center items-center lg:justify-start gap-4">
            <div className="flex bg-emerald-400 px-4 py-4 items-center justify-center rounded-full">
              <Image src={Broom} alt="broom icon" width={24} height={24} />
            </div>
            <h2 className="font-bold text-2xl">Our Services:</h2>
          </div>
          <div className="flex flex-col justify-center bg-[#DAF9FF] py-6 lg:w-[273px] mt-4 rounded-xl ">
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
{/*Aqui */} 
<br />
          <Form />

          <br /><br /><br />          

          <About />
        </div>
      </div>
    </>
  );
}
