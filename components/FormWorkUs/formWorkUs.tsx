import { Button } from "@/components/ui/button";
import Image from "next/image";
import BHC from '../../assets/bhc-hero.png'
import { useInView } from "react-intersection-observer";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function FormWorkUs() {

    // Usando o hook useInView para o formulário
    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true, // se deixarmos true, está estilização será exibida uma vez após a tela observar o elemento. caso deixamos false, será exibida todas as vezes em que saimos e entramos no modo "observação" do elemento
        });

  return (

    <div className="flex justify-center items-center h-screen lg:gap-16"> 


        <div
                ref={formRef} // Estamos observando este elemento
                className={`flex z-10 lg:w-1/2 justify-center lg:pr-10 items-center lg:justify-start lg:items-end lg:mt-10 lg:mb-10 pb-10 transition-all duration-1000 
                    ${formInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}> 

            <Card className="w-[350px] lg:w-[400px] bg-[#E4F0FF]">
                <CardHeader>
                <CardTitle className="font-bold text-2xl">Join Our Team</CardTitle>
                </CardHeader>

                <CardContent>
                <form>
                    <div className="grid w-full items-center gap-2">
                    <div className="flex flex-col gap-2">
                        <Input id="name" placeholder="Your name" className="bg-white" />
                        <Input
                        type="text"
                        id="phone"
                        placeholder="Your phone number"
                        className="bg-white"
                        />
                        <Input id="Skills" placeholder="Skills" className="bg-white" />
                        <Input id="Email" placeholder="Email" className="bg-white" />
                    </div>

                    <div className="flex gap-2">
                        <Input
                        id="Eircode"
                        type="number"
                        placeholder="Eircode"
                        className="bg-white w-[50%]"
                        />

                        <Input
                        type="text"
                        id="Street"
                        placeholder="Street"
                        className="bg-white w-[50%]"
                        />
                    </div>

                    <div className="flex gap-2">
                        <Input
                        id="District"
                        placeholder="District"
                        className="bg-white w-[50%]"
                        />

                        <Input
                        type="number"
                        id="House number"
                        placeholder="House number"
                        className="bg-white w-[50%]"
                        />
                    </div>
                    </div>
                </form>
                </CardContent>

                <CardFooter>
                <Button className="bg-[#FDE047] text-black hover:bg-yellow-400 w-full h-[50px] rounded-2xl justify-center items-center">
                    Apply Now
                </Button>
                </CardFooter>
            </Card>

        </div>    

      <div className="hidden lg:block">

        <Image
            className="w-[200px] lg:w-[400px] h-[600px]"
            src={BHC}
            width={0}
            height={0}
            alt="hero-img"
        />



      </div>

    </div>

  );
}

export default FormWorkUs;
