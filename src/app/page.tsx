'use client';

import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className={'h-full'}>
      <div className={'w-full h-full bg-gradient-to-r'}>
        <div className={'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'}>
          <h1 className={'h1'}>
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
          </h1>
          <p className={'max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'}>
            I am a senior student at the University of Toronto, double majoring in Computer Science and Applied Statistics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;