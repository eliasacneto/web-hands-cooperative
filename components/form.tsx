import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function Form() {


    return (

        <div>

            <Card className="w-[380px] bg-[#E4F0FF] ">
                <CardHeader>
                    <CardTitle className="font-bold text-2xl">Request a Service</CardTitle>
                    
                </CardHeader>

                <CardContent>
                    <form>

                    <div className="grid w-full items-center gap-4">

                        <div className="flex flex-col space-y-1.5">
                        
                           <Input id="name" placeholder="Your name" className="bg-white " />
                           <Input type="number" id="phone" placeholder="Phone Number" className="bg-white" /> {/*Verificar com elias o motivo do mt(Margin-top) não está funcionando */}

                        </div>

                        <div className="flex flex-col space-y-1.5">

                            

                            <Select>

                                <SelectTrigger id="framework" className="bg-white">

                                    <SelectValue placeholder="Choose a services"  />

                                </SelectTrigger>

                                <SelectContent position="popper">

                                <SelectItem value="next">Quick Cleaning</SelectItem>
                                <SelectItem value="sveltekit">Cost-effective</SelectItem>
                                <SelectItem value="astro">Silent Cleaning</SelectItem>
                                <SelectItem value="nuxt">Exterior Cleaning</SelectItem>

                                </SelectContent>

                            </Select>

                        </div>

                        <div className="flex gap-2">
                        
                           <Input id="Eircode" 
                           type="number"
                           placeholder="Eircode" className="bg-white w-[45%]" />
                           
                           <Input type="name" id="phone" placeholder="Street" className="bg-white w-[45%]" /> 

                        </div>

                        <div className="flex gap-2">
                        
                           <Input id="District" placeholder="District" className="bg-white w-[45%]" />

                           <Input type="number" id="House number" placeholder="House number" className="bg-white w-[45%]" /> 

                        </div>

                    </div>

                    </form>

                </CardContent>

                <CardFooter>
                    
                    <Button className="bg-[#FDE047] text-black hover:bg-yellow-400 w-[65%] h-[50px] rounded-[15px]" >Request Services</Button>

                </CardFooter>

            </Card>

        </div>
    )
}


export default Form