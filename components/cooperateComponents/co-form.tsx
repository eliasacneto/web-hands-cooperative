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

const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

const CoForm = () => {

  //Criei estes estado para Limpar os campos após o preechimento do mesmo
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [eircode, setEircode] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const sender = {
      name,
      telefone,
      cidade,
      eircode,
      street,
      district,
      houseNumber,
      skills,
    };

    const payload = {
      content: `Novo formulário preenchido:
      Nome: ${sender.name}
      Telefone: ${sender.telefone}
      Cidade: ${sender.cidade}
      Eircode: ${sender.eircode}
      Rua: ${sender.street}
      Bairro: ${sender.district}
      Número: ${sender.houseNumber}
      Skills: ${sender.skills}`,
    };

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }); //Explicando a Lógica acima: Primeiro, ele verifica se o webhookUrl(no documento .env poderá verificar a url) existe. Se for verdadeiro, ele envia uma requisição POST com fetch para essa URL (definida no arquivo .env) usando o cabeçalho Content-Type como "application/json". O JSON.stringify converte os dados em formato JSON para o Discord.

        // Limpa os campos após o envio
        setName("");
        setTelefone("");
        setCidade("");
        setEircode("");
        setStreet("");
        setDistrict("");
        setHouseNumber("");
        setSkills("");

        alert("Formulário enviado com sucesso!");

        console.log("Dados enviados para o Discord com sucesso");
      } catch (error) {
        console.error("Erro ao enviar dados para o Discord:", error);
      }
    } else {
      console.error("Webhook URL não definida");
    }
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

            <form className="text-white" method="post" onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Nome completo</Label>
                    <Input
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>WhatsApp</Label>
                    <Input
                      name="Telefone"
                      type="number"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="Seu número de contato"
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Label>Em qual cidade você reside?</Label>
                  <Select
                    value={cidade}
                    onValueChange={(value) => setCidade(value)}
                  >
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
                      name="Eircode"
                      type="text"
                      value={eircode}
                      onChange={(e) => setEircode(e.target.value)}
                      placeholder="Seu Eircode"
                      className="bg-white text-black uppercase"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Rua</Label>
                    <Input
                      type="text"
                      name="Street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Nome da rua"
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Bairro</Label>
                    <Input
                      name="District"
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="Nome do bairro"
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <Label>Número</Label>
                    <Input
                      type="text"
                      name="HouseNumber"
                      value={houseNumber}
                      onChange={(e) => setHouseNumber(e.target.value)}
                      placeholder="Número da casa"
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <Label>Quais serviços você realiza?</Label>
                  <Textarea
                    name="Skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="bg-white text-black"
                    placeholder="Escreva o nome dos serviços que você realiza..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="bg-yellow-400 text-black flex justify-center items-center lg:justify-start hover:bg-yellow-500 px-8 py-6 rounded-full font-semibold lg:text-lg mt-6 lg:mb-11"
              >
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
