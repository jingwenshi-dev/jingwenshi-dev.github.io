'use client';

import { TypeAnimation } from 'react-type-animation';
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
import Avatar from "../components/Avatar";
import Link from "next/link";

const Home = () => {
  return (
    <div className={'h-full'}>
      <div className={'w-full h-full bg-gradient-to-r'}>
        <div className={'text-center flex flex-col justify-center pt-32 md:pt-44 lg:pt-50 xl:pt-60 xl:text-left h-full container mx-auto'}>
          <motion.h1 variants={fadeIn('down', 0.2)} initial={'hidden'} animate={'show'} exit={'hidden'} className={'h1'}>
            <span className={'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'}>
              Hello, I&apos;m {" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Jingwen Shi',
                2000, // wait 2s
                'Full Stack Developer',
                2000,
                'Comp Sci Student',
                2000
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} initial={'hidden'} animate={'show'} exit={'hidden'} className={'max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'}>
            I am a senior student at the University of Toronto, double majoring in Computer Science and Applied
            Statistics.
            <br/><br/>
            I am interested in Cloud Computing, Distributed Systems, Parallel Computer Architecture and Programming,
            CAD, FPGA and so on.
          </motion.p>
          <motion.div variants={fadeIn('down', 0.4)} initial={'hidden'} animate={'show'} exit={'hidden'} className={'flex flex-row justify-center xl:justify-start z-40'}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Link href={'/contact'}>
              <Button radius="full" className={'mr-4 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'} variant={'shadow'}>
                Hire Me
              </Button>
            </Link>
            <Button radius="full" className={'mr-4 text-white'} variant={'bordered'}>
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
      <div className={'w-[1200px] h-full absolute right-0 bottom-0'}>
        {/*<div className={'bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'}></div>*/}
        <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} animate={'show'} exit={'hidden'} className={'w-full h-full max-w-[650px] max-h-[650px] absolute -bottom-32 lg:bottom-0 lg:right-[14%]'}>
          <Avatar/>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;