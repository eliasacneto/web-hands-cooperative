import { CircleArrowRight } from "lucide-react";
import Broom from "../../public/assets/icons/broom.png";
import React from "react";
import Image from "next/image";
import BHC from "../../public/assets/bhc-hero.png";

import { useInView } from "react-intersection-observer";

const CoHero = () => {
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      id="hero"
      className="bg-cover flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-end w-full"
    >
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex flex-col items-center lg:items-start mt-10">
          <p className="text-center lg:text-start bg-blue-600 w-fit px-4 py-2 rounded-full text-white font-bold mb-5">
            #01 Cooperativa Brasileira na Irlanda 🇮🇪
          </p>

          <h1 className="text-3xl text-center px-1 lg:px-0 font-semibold lg:text-[52px] lg:w-[563px] lg:leading-relaxed lg:text-start">
            Junte-se à Brazilian Hands Co-operative
          </h1>
          <p className="mt-5 text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[448px] lg:text-justify">
            Na Brazilian Hands Co-operative, estamos sempre em busca de novos
            colaboradores brasileiros dispostos a oferecer serviços de limpeza,
            manutenção, beleza, e outros. Se você está na Irlanda e procura uma
            oportunidade de trabalho flexível e bem remunerada, venha fazer
            parte da nossa equipe!
          </p>
          <div className="lg:flex flex-col justify-start items-start hidden">
            <div className="flex mt-10 justify-start items-center gap-4">
              <div className="flex bg-blue-500 px-4 py-4 items-center justify-center rounded-full">
                <Image src={Broom} alt="broom icon" width={24} height={24} />
              </div>
              <h2 className="font-bold text-2xl">Aqui você têm:</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#DAF9FF] w-fit px-10 py-6 lg:w-[300px] lg:px-0 mt-4 rounded-xl lg:mb-10">
              <ul className="flex flex-col justify-center gap-5 lg:items-start ml-6">
                <li className="flex gap-4">
                  <CircleArrowRight />
                  Flexibilidade
                </li>
                <li className="flex gap-4">
                  <CircleArrowRight />
                  Suporte e claro
                </li>
                <li className="flex gap-4">
                  <CircleArrowRight />
                  Excelentes ganhos!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-emerald-50 mt-10 lg:mt-0 lg:py-0 lg:bg-transparent flex-col lg:flex-row w-full justify-center items-center lg:items-end ">
        <div className="flex md:w-1/2">
          {/* <Image
            className="w-[200px] lg:w-[500px] h-full"
            src={BHC}
            width={0}
            height={0}
            alt="hero-img"
          /> */}
        </div>

        <div
          ref={formRef}
          className={`flex z-10 lg:w-1/2 justify-center lg:pr-10 items-center lg:justify-start lg:items-end lg:mt-10 lg:mb-10 pb-10 transition-all duration-1000 
            ${
              formInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
        ></div>
      </div>
    </div>
  );
};

export default CoHero;
