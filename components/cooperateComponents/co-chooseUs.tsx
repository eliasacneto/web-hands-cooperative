import React from "react";
import { Button } from "../ui/button";
import OurPurpose from "../AboutUs/ourPurpose";
import CleanerIMG from "../public/assets/cleaner.jpg";
import Image from "next/image";
import Broom from "../../public/assets/icons/broom.png";
import ChooseIMG from "../../public/assets/choose-img.jpg";
import Link from "next/link";

const CoChooseUs = () => {
  return (
    <div className="flex flex-col-reverse bg-blue-100 items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 p-10">
      <div className="mx-4 flex flex-col items-center justify-center lg:items-start ">
        <h3 className="text-center lg:text-start text-blue-500 font-bold pt-5 pb-5">
          Por que trabalhar conosco?
        </h3>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-semibold lg:text-4xl lg:text-start ">
            Razões para trabalhar na BHC
          </h1>
        </div>
        <div className="flex flex-col lg:w-[800px]">
          <div className="flex flex-col gap-8 lg:flex-row ">
            <div className="flex mt-4 flex-col justify-start items-start lg:justify-start gap-4 lg:w-full">
              <div className="flex  bg-blue-500 px-4 py-4 items-start justify-start rounded-full">
                <Image src={Broom} alt="broom icon" width={24} height={24} />
              </div>
              <h2 className="font-bold text-2xl">Ganhos Atraentes</h2>
              <p className="text-justify">
                Aqui, você fica com 80% do valor de cada serviço prestado. É um
                dos melhores retornos do mercado, garantindo que o seu esforço
                seja justamente recompensado.
              </p>
            </div>
            <div className="flex mt-4  flex-col justify-start items-start lg:justify-start gap-4 w-full">
              <div className="flex  bg-blue-500 px-4 py-4 items-start justify-start rounded-full">
                <Image src={Broom} alt="broom icon" width={24} height={24} />
              </div>
              <h2 className="font-bold text-2xl">Flexibilidade</h2>
              <p className="text-justify">
                Você decide onde e quando quer trabalhar. Pode optar por atender
                apenas em sua cidade ou se deslocar para outras, conforme sua
                disponibilidade e meios de transporte. Na Brazilian Hands
                Co-operative, quem controla sua agenda é você!
              </p>
            </div>
          </div>
          <div className="flex mt-4  flex-col justify-start items-start lg:justify-start gap-4">
            <div className="flex  bg-blue-500 px-4 py-4 items-start justify-start rounded-full ">
              <Image src={Broom} alt="broom icon" width={24} height={24} />
            </div>
            <h2 className="font-bold text-2xl">Pagamento Garantido</h2>
            <p className="text-justify">
              Nós cuidamos de toda a parte administrativa! A empresa recebe o
              pagamento dos clientes e faz o repasse diretamente para você. Isso
              significa que você pode focar no que faz de melhor, sem
              preocupações com burocracias.
            </p>
          </div>
          <Link href="#hero">
            <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start  hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg mt-10">
              Quero me candidatar
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col mx-10 lg:mx-10  ">
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

export default CoChooseUs;
