'use client';
import React, {useState, useRef} from 'react';
import {Button, Input, Textarea} from "@nextui-org/react";
import { FaRegPaperPlane } from "react-icons/fa6";
import {motion} from "framer-motion";
import {fadeIn} from "../../../variants";
import confetti from "canvas-confetti";

const Contact = () => {
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const name = nameRef.current ? nameRef.current.value : '';
    const email = emailRef.current ? emailRef.current.value : '';
    const subject = subjectRef.current ? subjectRef.current.value : '';
    const message = messageRef.current ? messageRef.current.value : '';
    const requiredFields = {name, email, subject, message};

    // Send contact form
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(requiredFields)
    });

    const responseBody = await response.json();
    console.log("Response Status Code: " + response.status)
    console.log("Response Body: " + (responseBody.message ? responseBody.message : 'No response message'));

    setIsLoading(false);
    if (response.status === 200) {
      // Confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {y: 0.6}
      });
    } else {
      const fields = Object.keys(responseBody).filter(key => responseBody[key]);
      setMissingFields(fields);
    }
  };

  return (
    <div className={'h-full'}>
      <div
        className={'container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full pt-18 md:pt-44 lg:pt-50 xl:pt-60'}>
        <div className={'flex flex-col w-full max-w-[700px]'}>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'h2 text-center mb-12'}>
            Let&apos;s <span className={'text-accent'}>connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className={'flex-1 flex flex-col gap-6 w-full mx-auto'}>
            <div className={'flex gap-x-6 w-full'}>
              <Input isRequired type={"text"} label={"Name"} variant={"underlined"} ref={nameRef}/>
              <Input isRequired type={"email"} label={"Email"} variant={"underlined"} ref={emailRef}/>
            </div>
            <Input isRequired type={"text"} label={"Subject"} variant={"underlined"} ref={subjectRef}/>
            <Textarea isRequired minRows={5} maxRows={15} label={"Message"} variant={"underlined"} ref={messageRef}/>

            <div className={'flex gap-x-6 w-full'}>
              <Button radius={'full'} variant={"ghost"} onClick={onSubmit} isLoading={isLoading} className={'max-w-[170px] flex items-center justify-center overflow-hidden'}>
                <span className={'group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </span>
                <FaRegPaperPlane className={'-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'}/>
              </Button>
              <div className={'flex-1 flex items-center justify-end'}>
                {missingFields.length > 0 && (
                  <span className={'text-white'}>Missing Field{missingFields.length > 1 ? 's' : ''}: {missingFields.join(', ')}</span>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;