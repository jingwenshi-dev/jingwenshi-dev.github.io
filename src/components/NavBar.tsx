'use client'

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

import Link from "next/link";
import { usePathname } from "next/navigation";

import {Button, Tooltip} from '@nextui-org/react'
import React from "react";

// nav data
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'Work', path: '/work', icon: <HiViewColumns /> },
  { name: 'Testimonials', path: '/testimonials', icon: <HiChatBubbleBottomCenterText /> },
  { name: 'Contact', path: '/contact', icon: <HiEnvelope /> }
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className={'flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'}>
      <div className={'flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'}>
        {navData.map((link, index) => {
          // @ts-ignore
          return (
            <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent`} href={link.path} key={index}>
              <Tooltip showArrow={true} content={link.name} placement={'right-end'} color={'primary'}>
                <Button isIconOnly radius="full" color={''}>
                  {React.cloneElement(link.icon, { size: "1.75em" })}
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
