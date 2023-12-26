'use client'
import Link from 'next/link';
import {RiInstagramLine, RiGithubLine, RiTwitterLine, RiLinkedinLine} from "react-icons/ri";
import { Button, Tooltip } from '@nextui-org/react'
import React, {useState} from "react";
import {navData} from "@/components/NavBar";

export const headerData = [
  { name: 'Instagram', path: 'https://www.instagram.com/_steven_shi_/', icon: <RiInstagramLine /> },
  { name: 'GitHub', path: 'https://github.com/jingwenshi-dev', icon: <RiGithubLine /> },
  { name: 'Twitter', path: 'https://twitter.com/sjwSteven', icon: <RiTwitterLine /> },
  { name: 'LinkedIn', path: 'https://www.linkedin.com/in/jingwen-shi-/', icon: <RiLinkedinLine /> },
];

const Header = () => {
  const [hover, setHover] = useState(new Array(navData.length).fill(false));

    return (
      <header className={'absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'}>
            <Link href={'/'} className="text-2xl">
              <b>Jingwen</b>&nbsp;Shi
            </Link>
            <div>
              {headerData.map((link, index) => {
                return (
                  <Link href={link.path} key={link.name} rel="noopener noreferrer" target="_blank">
                    <Tooltip showArrow={true} content={link.name} placement={'bottom'} color={'primary'}>
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
                          color: hover[index] ? '#F13024' : 'white',
                          style: { transition: 'color 0.25s ease-in-out' }
                        })}
                      </Button>
                    </Tooltip>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;