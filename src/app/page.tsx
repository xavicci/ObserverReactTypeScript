"use client";
import Image from 'next/image';
import { useState } from 'react';
import { MouseEventHandler } from 'react';
import { LazyImage } from '@/components/RandomFox';



export default function Home() {

  const random = () => Math.floor(Math.random() * 123) + 1;
  const generateId = () => Math.random().toString(36).substr(2, 9);


  const [images, setImages] = useState<Array<IFoxImageItem>>([]);


  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {

    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([
      ...images,
      newImageItem
    ])
  }

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <button className='bg-black' onClick={addNewFox}>Add fox</button>

      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <LazyImage src={url} onClick={() => console.log("hola")} width={320} height='auto' className='rounded' />
        </div>
      ))}

    </main>
  )
}
