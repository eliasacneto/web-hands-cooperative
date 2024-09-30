"use client";

import { Calendar, MenuIcon } from "lucide-react";
import LogoWhite from "../../assets/logo/logo_w.png";
import Logo from "../../assets/logo/logo_g.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import FormWorkUs from "@/components/FormWorkUs/formWorkUs";
import CoServices from "@/components/cooperateComponents/co-services";
import Loader from "@/components/loader";
import CoAbout from "@/components/cooperateComponents/co-about";
import CoHero from "@/components/cooperateComponents/co-hero";
import CoFooter from "@/components/cooperateComponents/co-footer";
import CoChooseUs from "@/components/cooperateComponents/co-chooseUs";
import ScrollToTop from "@/components/scrollToTop";
import CoFaq from "@/components/cooperateComponents/co-faq";
import CoForm from "@/components/cooperateComponents/co-form";

const WorkWithUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Aqui estou simulando um atraso no carregamento para exibir o loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // tempo de 2 segundos de espera

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="hidden lg:flex justify-between lg:mx-20 mt-7 mb-7">
        <h4 className="text-gray-400 font-semibold text-base">
          brazilianhandscooperative@gmail.com
        </h4>
        <a
          href="https://api.whatsapp.com/send?phone=353833471038&text=Hello,%20I%20came%20from%20your%20website%20and%20I'd%20like%20to%work%20with%20you!%0A"
          target="_blank"
          className="text-2xl font-semibold text-blue-500"
        >
          +353 83 347 1038
        </a>
      </div>

      {/*Menu abaixo */}

      <div className="flex fixed items-center z-40 bg-white w-screen lg:hidden px-6 py-6 shadow-md ">
        <a href="#" className="">
          <Image src={Logo} alt="logoo" width={60} height={50} />
        </a>

        <button
          onClick={toggleMenu}
          className="fixed flex items-center top-4 right-0 p-4 z-40 lg:hidden lg:bg-none  rounded-lg"
        >
          <MenuIcon size={28} className="text-blue-400 font-bold" />
        </button>
      </div>

      {/* Menu */}
      <header className="h-12 md:h-24 px-8 md:px-12 lg:px-8 xl:px-28 flex gap-8 items-center bg-blue-600  text-white antialiased font-bold mb-24 lg:mb-0 ">
        <a href="/app/page.tsx" className="">
          <Image src={LogoWhite} alt="logoo" width={100} height={100} />
        </a>

        <div
          className={`fixed lg:relative top-0 left-0 bg-blue-500  z-20 lg:bg-transparent bg-opacity-95 text-center overflow-hidden transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center justify-center w-full lg:h-full lg:opacity-100 ${
            isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <nav className="lg:flex-1 justify-end flex gap-8 flex-col lg:flex-row lg:ml-16">
            <a
              className=" hover:text-yellow-500 transition-all duration-500"
              href="/"
              onClick={() => closeMenuOnClick("#")}
            >
              Início
            </a>

            <a
              className="hover:text-yellow-500 transition-all duration-500"
              href="#who"
              onClick={() => closeMenuOnClick("#about")}
            >
              Para quem é
            </a>

            <a
              className="hover:text-yellow-500 transition-all duration-500"
              href="#reasons"
              onClick={() => closeMenuOnClick("#services")}
            >
              Trabalhe na BHC
            </a>
            <a
              className="hover:text-yellow-500 transition-all duration-500"
              href="#faq"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center flex-col gap-5 lg:flex-row lg:gap-0">
            <a
              href="#form"
              className="flex w-full px-8 py-4 bg-yellow-300 rounded-full text-base font-semibold text-black hover:bg-yellow-400 transition-all duration-500  hover:font-semibold"
              onClick={() => closeMenuOnClick("#hero")}
            >
              <Calendar className="mr-2" /> Candidatar-se
            </a>
          </div>
        </div>
      </header>
      <CoHero />
      <CoAbout />
      <CoChooseUs />
      {/* <CoFaq /> */}
      <CoForm />
      <CoFooter />
      <ScrollToTop />
    </>
  );
};

export default WorkWithUs;