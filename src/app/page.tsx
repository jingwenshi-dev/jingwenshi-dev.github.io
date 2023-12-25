'use client';

import { TypeAnimation } from 'react-type-animation';
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

const Home = () => {
  return (
    <div className={'h-full'}>
      <div className={'w-full h-full bg-gradient-to-r'}>
        <div className={'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'}>
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
          <motion.div variants={fadeIn('down', 0.4)} initial={'hidden'} animate={'show'} exit={'hidden'} className={'flex flex-row justify-center xl:justify-start'}>
            <Button radius="full" className={'mr-4 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'} variant={'shadow'}>
              Hire Me
            </Button>
            <Button radius="full" className={'mr-4 text-white'} variant={'bordered'}>
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;