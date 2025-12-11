'use client'


import Image from 'next/image'


export default function TwHero() {

  return (
    <div className="bg-linear-to-r from-slate-900 to-sky-500 text-slate-100">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-28 lg:flex lg:items-center lg:gap-x-[27.2px] lg:px-8 lg:pt-20 lg:pb-30">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty sm:text-7xl">
              Learning Design & Media Production Studio
            </h1>
            <p className="mt-8 font-open-sans text-lg font-medium text-pretty sm:text-xl/8">
              Crafting interactive digital learning solutions and media content to engage, educate, and inspire.
            </p>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <Image 
              src='/images/learning-design-v02_full_colour_with_logo.png'
              alt='image of lady using tech'
              width={700}
              height={700}
              className='mx-auto max-w-full lg:max-w-lg xl:max-w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
