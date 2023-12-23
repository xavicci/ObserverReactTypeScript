"use client";
import Image from 'next/image';
import { useState } from 'react';
import { MouseEventHandler } from 'react';
import { RandonFox } from '@/components/RandomFox';



export default function Home() {
  const random = () => Math.floor(Math.random() * 123) + 1;

  const image: string = `https://randomfox.ca/images/${random()}.jpg`
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <RandonFox image='...' />

    </main>
  )
}
