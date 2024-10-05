import React from "react";
import { Button } from "../ui/button";
import CleanerIMG from "../../public/assets/working.jpg";
import Image from "next/image";
import Link from "next/link";

const CoAbout = () => {
  return (
    <div className="bg-blue-50 flex flex-col items-center justify-center lg:flex-row lg:justify-evenly lg:gap-10 w-full py-14">
      <div className="flex flex-col mx-10 lg:mx-10 ">
        <Image
          className="rounded-3xl w-[300px] lg:w-[450px] "
          src={CleanerIMG}
          width={0}
          height={0}
          quality={100}
          alt="hero-img"
        />
      </div>

      <div className="mx-4 flex flex-col items-center justify-center lg:items-start mt-10">
        <p className="text-center lg:text-start text-blue-500 font-bold pb-5">
          Na dúvida se é para você?
        </p>

        <div className="flex flex-col lg:w-[560px] ">
          <h1 className="pb-5 text-2xl text-center font-medium lg:text-4xl lg:text-start">
            Quem pode fazer parte?
          </h1>

          <p className="pb-5 text-justify lg:text-lg">
            Se você tem talento para serviços como limpeza residencial,
            jardinagem, pintura, reparos ou beleza, e está na Irlanda procurando
            por uma oportunidade, queremos você na nossa equipe! Seja experiente
            ou novo na área, na{" "}
            <span className="text-blue-500 font-bold">
              Brazilian Hands Cooperative
            </span>{" "}
            oferecemos suporte para que você se sinta seguro e valorizado no
            trabalho.
          </p>
        </div>
        <Link href="#apply">
          <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start  hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg lg:hover:-translate-y-2 transition-transform duration-700">
            Candidate-se agora!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CoAbout;
