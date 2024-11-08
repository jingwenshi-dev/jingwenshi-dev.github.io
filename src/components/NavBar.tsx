'use client'

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Tooltip } from '@nextui-org/react'
import { // icons
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';

export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  // { name: 'About', path: '/about', icon: <HiUser /> },
  // { name: 'Projects', path: '/projects', icon: <HiRectangleGroup /> },
  { name: 'Contact', path: '/contact', icon: <HiEnvelope /> }
];

const NavBar = () => {
  const pathname = usePathname();
  const [hover, setHover] = useState(new Array(navData.length).fill(false));

  return (
    <nav className={'flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'}>
      <div className={'flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'}>
        {navData.map((link, index) => {
          return (
            <Link className={`${link.path === pathname} relative flex items-center group`} href={link.path} key={index}>
              <Tooltip showArrow={true} content={link.name} placement={'right'} color={'primary'}>

                {/* NextUI with variant="ghost" (i.e. transparent bg) will have a white border => use tailwind instead => lost hover transition effect => useState */}
                <Button isIconOnly radius="full" className={'bg-transparent'}
                        onMouseEnter={() => setHover(prevHover => {
                          const newHover = [...prevHover];
                          newHover[index] = true;
                          return newHover;
                        })}
                        onMouseLeave={() => setHover(prevHover => {
                          const newHover = [...prevHover];
                          newHover[index] = false;
                          return newHover;
                        })}
                >
                  {React.cloneElement(link.icon, {
                    size: "1.75em",
                    color: hover[index] ? '#F13024' : (link.path === pathname ? '#F13024' : 'white'),
                    style: { transition: 'color 0.25s ease-in-out' }
                  })}
                </Button>
              </Tooltip>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default NavBar;
