import { Button, Input, Textarea } from "@nextui-org/react";
import {BsArrowRight} from "react-icons/bs";

const contact = () => {
    return (
      <div className={'h-full'}>
        <div className={'container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'}>
          <div className={'flex flex-col w-full max-w-[700px]'}>
            <h2 className={'h2 text-center mb-12'}>
              Let&apos;s <span>Connect!</span>
            </h2>
            <form className={'flex-1 flex flex-col gap-6 w-full mx-auto'}>
              <div className={'flex gap-x-6 w-full'}>
                <Input isRequired type={"text"} label={"Name"} variant={"underlined"}/>
                <Input isRequired type={"email"} label={"Email"} variant={"underlined"}/>
              </div>
              <Input isRequired type={"text"} label={"Subject"} variant={"underlined"}/>
              <Textarea isRequired minRows={15} label={"Message"} variant={"underlined"}/>
              <Button radius={'full'} variant={"ghost"} className={'max-w-[170px] flex items-center justify-center overflow-hidden'}>
                <span className={'group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'}>
                  Send Message
                </span>
                <BsArrowRight className={'-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'}/>
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default contact;