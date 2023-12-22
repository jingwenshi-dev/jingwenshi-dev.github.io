import React from "react";
import type {Metadata} from 'next'
import {Sora} from 'next/font/google'
import './globals.css'

import Providers from './providers'
import NavBar from '../components/NavBar'
import TopLeftImg from '../components/TopLeftImg'
import Header from '../components/Header'
import PageTransition from '../components/PageTransition'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Jingwen Shi's Portfolio",
  description: 'For more details, please refer to https://jingwenshi.dev',
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <html lang={"en"}>
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative min-h-screen`}>
        <Providers>
          <div>
            <TopLeftImg/>
            <NavBar/>
            <Header/>
            <main className={'app'}>
              <PageTransition/>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
