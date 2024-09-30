import Image from "next/image";
import React, { useState } from "react";
import ApplyIMG from "../../public/assets/apply.jpg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputMask from "react-input-mask";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface FormData {
  name: string;
  phone: string;
  service: string;
  otherService: string;
  city: string;
  eircode: string;
  street: string;
  district: string;
  houseNumber: string;
}

const CoForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    city: "",
    otherService: "",
    eircode: "",
    street: "",
    district: "",
    houseNumber: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCityChange = (value: string) => {
    setFormData({ ...formData, city: value });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full lg:h-screen">
      {/* Seção da imagem */}
      <div className="lg:w-1/2 w-full h-full hidden lg:block">
        <Image
          className="object-cover w-full h-full"
          src={ApplyIMG}
          alt="hero-img"
          quality={75}
        />
      </div>

      <div className="lg:w-1/2 w-full bg-blue-500 flex items-center justify-center py-14 px-4">
        <div className="mx-4 flex flex-col items-center justify-center lg:items-start mt-10">
          <p className="text-center lg:text-start text-white font-bold pb-5">
            Vamos trabalhar juntos!
          </p>

          <div className="flex flex-col lg:w-[560px] ">
            <h1 className="pb-5 text-4xl text-center text-white lg:text-4xl lg:text-start font-semibold">
              Seja um Cooperado
            </h1>

            <form className="text-white">
              <div className="grid w-full items-center gap-4">
                <div className="flex  gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Nome completo</Label>
                    <Input
                      id="name"
                      typeof="text"
                      placeholder="Seu nome"
                      className="bg-white "
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>WhatsApp</Label>
                    <InputMask
                      mask="+353 99 9999 9999"
                      id="phone"
                      placeholder="Seu número de contato"
                      className="bg-white flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Label>Em qual cidade você reside?</Label>
                  <Select onValueChange={handleCityChange}>
                    <SelectTrigger id="city" className="bg-white text-black">
                      <SelectValue placeholder="Selecione uma cidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem className="cursor-pointer" value="Cork">
                        Cork
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Dublin">
                        Dublin
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Galway">
                        Galway
                      </SelectItem>
                      <SelectItem className="cursor-pointer" value="Limerick">
                        Limerick
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Eircode</Label>
                    <Input
                      id="eircode"
                      type="text"
                      placeholder="Seu Eircode"
                      className="bg-white uppercase placeholder:capitalize"
                      value={formData.eircode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Rua</Label>
                    <Input
                      type="text"
                      id="street"
                      placeholder="Nome da rua"
                      className="bg-white"
                      value={formData.street}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Bairro</Label>
                    <Input
                      id="district"
                      type="text"
                      placeholder="Nome do bairro"
                      className="bg-white "
                      value={formData.district}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Número</Label>
                    <Input
                      type="text"
                      id="houseNumber"
                      placeholder="Número da casa"
                      className="bg-white"
                      value={formData.houseNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <Label>Quais serviços você realiza?</Label>
                  <Textarea
                    className="bg-white"
                    placeholder="Escreva o nome dos serviços que você realiza..."
                  />
                </div>
              </div>
              <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start  hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg mt-6">
                Enviar candidatura
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoForm;
