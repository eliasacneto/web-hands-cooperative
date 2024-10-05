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
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface CoFormData {
  name: string;
  whatsapp: string;
  city: string;
  eircode: string;
  street: string;
  district: string;
  houseNumber: string;
  skills: string;
}

const CoForm = () => {
  const [coFormData, setCoFormData] = useState<CoFormData>({
    name: "",
    whatsapp: "",
    city: "",
    eircode: "",
    street: "",
    district: "",
    houseNumber: "",
    skills: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCoFormData({
      ...coFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setCoFormData({
      ...coFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCityChange = (value: string) => {
    setCoFormData({ ...coFormData, city: value });
  };

  const validateForm = (): boolean => {
    return (
      coFormData.name !== "" &&
      coFormData.whatsapp !== "" &&
      coFormData.city !== "" &&
      coFormData.eircode !== "" &&
      coFormData.street !== "" &&
      coFormData.district !== "" &&
      coFormData.houseNumber !== "" &&
      coFormData.skills !== ""
    );
  };
  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const message = `Olá! Gostaria de fazer parte do time Brazilian Hands Cooperative:

*Nome:* ${coFormData.name}
*WhatsApp:* ${coFormData.whatsapp}

*Serviços que realizo:* ${coFormData.skills}

*Meu endereço na Irlanda:*
- *Cidade:* ${coFormData.city}
- *Eircode:* ${coFormData.eircode}
- *Rua:* ${coFormData.street}
- *Distrito:* ${coFormData.district}
- *Número:* ${coFormData.houseNumber}

Obrigado e aguardo resposta!`;

    const whatsappUrl = `https://wa.me/5588997652020?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Enviar mensagem para o Discord
    try {
      const discordWebhookUrl =
        "https://discord.com/api/webhooks/1288456738714026044/kSnKDxhBJ8r3vxUGdSCOZ3PQJMtPj5xaF8OXzZgSEZ4kTB3CRmHonHkIa6LHZzu1IelL";
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message }),
      });
      console.log("Mensagem enviada para o Discord!");
    } catch (error) {
      console.error("Erro ao enviar mensagem para o Discord:", error);
    }

    setCoFormData({
      name: "",
      whatsapp: "",
      city: "",
      eircode: "",
      street: "",
      district: "",
      houseNumber: "",
      skills: "",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full lg:h-screen">
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

          <div className="flex flex-col lg:w-[560px]">
            <h1 className="pb-5 text-4xl text-center text-white lg:text-4xl lg:text-start font-semibold">
              Seja um Cooperado
            </h1>

            <form
              className="text-white"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Nome completo</Label>
                    <Input
                      id="name"
                      type="text"
                      value={coFormData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      type="text"
                      value={coFormData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="Seu número de contato"
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Label>Em qual cidade você reside?</Label>
                  <Select onValueChange={handleCityChange}>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione uma cidade" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Cork">Cork</SelectItem>
                      <SelectItem value="Dublin">Dublin</SelectItem>
                      <SelectItem value="Galway">Galway</SelectItem>
                      <SelectItem value="Limerick">Limerick</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Eircode</Label>
                    <Input
                      id="eircode"
                      type="text"
                      value={coFormData.eircode}
                      onChange={handleInputChange}
                      placeholder="Seu Eircode"
                      className="bg-white text-black placeholder:capitalize"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Rua</Label>
                    <Input
                      id="street"
                      type="text"
                      value={coFormData.street}
                      onChange={handleInputChange}
                      placeholder="Nome da rua"
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Bairro</Label>
                    <Input
                      type="text"
                      id="district"
                      value={coFormData.district}
                      onChange={handleInputChange}
                      placeholder="Nome do bairro"
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Número</Label>
                    <Input
                      type="text"
                      id="houseNumber"
                      value={coFormData.houseNumber}
                      onChange={handleInputChange}
                      placeholder="Número da casa"
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Label>Quais serviços você realiza?</Label>
                  <Textarea
                    id="skills"
                    value={coFormData.skills}
                    onChange={handleTextAreaChange}
                    className="bg-white text-black"
                    placeholder="Escreva o nome dos serviços que você realiza..."
                  />
                </div>
              </div>

              <Button className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg mt-6 lg:mb-11">
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