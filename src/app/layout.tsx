import type { Metadata } from "next";
import localFont from "next/font/local";

import TwNavbar from '@/components/TwNavbar'

import "./globals.css"; 


// imported nexa fonts
const nexaLight = localFont({
  src: "./fonts/nexa-light.otf",
  variable: "--font-nexa-light"
});

const nexaRegular = localFont({
  src: "./fonts/fontfabric-nexaregular.otf",
  variable: "--font-nexa-regular"
});

const nexaBold = localFont({
  src: "./fonts/nexa-bold.otf",
  variable: "--font-nexa-bold"
});

const nexaXbold = localFont({
  src: "./fonts/fontfabric-nexa-xbold.otf",
  variable: "--font-nexa-xbold"
}); 

const nexaBook = localFont({
  src: "./fonts/fontfabric-nexa-book.otf",
  variable: "--font-nexa-book"
});

const nexaHeavy = localFont({
  src: "./fonts/fontfabric-nexaheavy.otf",
  variable: "--font-nexa-heavy"
});

const nexaBlack = localFont({
  src: "./fonts/fontfabric-nexablack.otf",
  variable: "--font-nexa-black"
});

// imported open sans font
const openSansRegular = localFont({
  src: "./fonts/opensans-regular.ttf",
  variable: "--font-open-sans-regular"
});


// metadata object
export const metadata: Metadata = {
  title: "Visualflow",
  description: "A Creative Studio for Learning Design and Media Production",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body
        className={`
          ${nexaLight.variable} 
          ${nexaRegular.variable} 
          ${nexaBold.variable} 
          ${nexaXbold.variable} 
          ${nexaBook.variable} 
          ${nexaHeavy.variable} 
          ${nexaBlack.variable}
          ${openSansRegular.variable} 
          antialiased`}
      >
        <TwNavbar />
        {children}
      </body>
    </html>
  );
}
