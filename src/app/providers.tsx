'use client'

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

// Providers setup for NextUI
// https://nextui.org/docs/guide/installation
const Providers = ({ children }: {children: React.ReactNode}) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      {children}
    </NextUIProvider>
  );
}

export default Providers;