'use client';
// Has to use client, or error will occur

import React from "react";
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}

const PageTransition = () => {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div key={1} className={'h-full'}>
        <motion.div
          className={'fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#2E2257]'}
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
        >
        </motion.div>
        <motion.div
          className={'fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#3B2D71]'}
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
        >
        </motion.div>
        <motion.div
          className={'fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#4B3792]'}
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
        >
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;