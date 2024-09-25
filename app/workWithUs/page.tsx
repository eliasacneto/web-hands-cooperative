"use client";

import React from 'react'
import { Calendar, MenuIcon } from "lucide-react";
import LogoWhite from '../../assets/logo/logo_w.png'
import Logo from '../../assets/logo/logo_g.png'
import Image from "next/image";
import { useState } from "react";
import FormWorkUs from '@/components/FormWorkUs/formWorkUs';


const WorkWithUs = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>

        <div className="hidden lg:flex justify-between lg:mx-20 mt-7 mb-7">

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

        <div className="flex fixed items-center z-40 bg-white w-screen lg:hidden px-6 py-6 shadow-md ">

                <a href="#" className="">
                <Image src={Logo} alt="logoo" width={60} height={50} />
                </a>

                <button
                onClick={toggleMenu}
                className="fixed flex items-center top-4 right-0 p-4 z-40 lg:hidden lg:bg-none  rounded-lg"
                >
                <MenuIcon size={28} className="text-emerald-400 font-bold" />
                </button>
        </div>

        <header className="h-12 md:h-24 px-8 md:px-12 lg:px-8 xl:px-28 flex gap-8 items-center bg-emerald-500  text-white antialiased font-bold mb-24 lg:mb-0">
        <a href="#" className="">
          <Image src={LogoWhite} alt="logoo" width={100} height={100} />
        </a>

        <div
          className={`fixed lg:relative top-0 left-0 bg-emerald-500  z-20 lg:bg-transparent bg-opacity-95 text-center overflow-hidden transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center justify-center w-full lg:h-full lg:opacity-100 ${
            isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <nav className="lg:flex-1 justify-end flex gap-8 flex-col lg:flex-row lg:ml-16">
            <a
              className=" hover:text-[#024218] transition-all duration-500"
              href="/"
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
              href="/workWithUs"
            >
              Work with us
            </a>
          </nav>

          

          <div className="flex items-center flex-col gap-5 lg:flex-row lg:gap-0">
            <a
              href="https://api.whatsapp.com/send?phone=353833471038&text=Hello,%20I%20came%20from%20the%20website%20and%20I%20would%20like%20to%20schedule%20a%20service!%0A"
              target="_blank"
              className="flex w-full px-8 py-4 bg-yellow-300 rounded-full text-base font-semibold text-black hover:bg-yellow-400 transition-all duration-500  hover:font-semibold"
            >
              <Calendar className="mr-2" /> Book schedule
            </a>
          </div>
        </div>
      </header>


            <FormWorkUs />

       
          
          
    
    
    </>
  )
}

export default WorkWithUs