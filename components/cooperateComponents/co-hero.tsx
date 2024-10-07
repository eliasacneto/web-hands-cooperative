import { CircleArrowRight } from "lucide-react";
import Broom from "../../public/assets/icons/broom.png";
import React from "react";
import Image from "next/image";
import BHCLogo from "../../public/assets/logo_g.png";

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
        <div className="flex flex-col items-center lg:items-center mt-1 lg:mt-20 lg:mb-8">
          <p className="text-center lg:text-start bg-blue-200 w-fit px-4 py-2 rounded-full text-blue-600 font-bold mb-5">
            #01 Cooperativa Brasileira na Irlanda 🇮🇪
          </p>

          <h1 className="text-3xl text-center px-1 lg:px-0 font-bold lg:text-[60px] lg:w-[800px] lg:leading-none lg:text-center">
            Junte-se à Brazilian Hands Cooperative
          </h1>
          <p className="mt-5 text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[800px]">
            Na Brazilian Hands Cooperative, estamos sempre em busca de novos
            colaboradores brasileiros dispostos a oferecer serviços de limpeza,
            manutenção, beleza, e outros. Se você está na Irlanda e procura uma
            oportunidade de trabalho flexível e bem remunerada, venha fazer
            parte da nossa equipe!
          </p>
        </div>
        <div className="flex mt-4 mb-6 gap-4">
          <a
            href="#coabout"
            className="flex bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 lg:px-7 lg:py-4 lg:text-lg h-fit rounded-lg"
          >
            Quero saber mais
          </a>
          <a
            href="#apply"
            className="flex bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-4 py-3 lg:px-7 lg:py-4 lg:text-lg h-fit rounded-lg"
          >
            Quero me candidatar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoHero;
