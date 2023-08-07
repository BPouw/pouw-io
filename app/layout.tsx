import './globals.css'
import type { Metadata } from 'next'
import {Plus_Jakarta_Sans} from 'next/font/google'
import React from "react";
import {NextFont} from "next/dist/compiled/@next/font";

const jakarta : NextFont = Plus_Jakarta_Sans({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Boris Pouw',
  description: 'A personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}
