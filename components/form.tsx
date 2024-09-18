import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Form() {
  return (
    <Card className="w-[350px] lg:w-[400px] bg-[#E4F0FF] ">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">Request a Service</CardTitle>
      </CardHeader>

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-2">
            <div className="flex flex-col gap-2">
              <Input id="name" placeholder="Your name" className="bg-white " />
              <Input
                type="text"
                id="phone"
                placeholder="Your phone number"
                className="bg-white"
              />{" "}
              
            </div>

            <div className="flex flex-col">
              <Select>
                <SelectTrigger id="framework" className="bg-white">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>

                <SelectContent position="popper">
                  <SelectItem className="cursor-pointer" value="next">Quick Cleaning</SelectItem>
                  <SelectItem className="cursor-pointer" value="sveltekit">Cost-effective</SelectItem>
                  <SelectItem className="cursor-pointer" value="astro">Silent Cleaning</SelectItem>
                  <SelectItem className="cursor-pointer" value="nuxt">Exterior Cleaning</SelectItem>
                  <SelectItem className="cursor-pointer" value="nuxt">Other services ...</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Input
                id="Eircode"
                type="number"
                placeholder="Eircode"
                className="bg-white w-[50%]"
              />

              <Input
                type="name"
                id="phone"
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
          Request Services
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Form;
