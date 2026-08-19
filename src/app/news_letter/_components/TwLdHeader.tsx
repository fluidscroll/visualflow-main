import Image from "next/image";


export default function TwLdHeader() {
  return (
    <div className="bg-sky-800 pt-36 pb-26 sm:pt-34 sm:pb-28 lg:pt-42">
      <div className="mx-auto max-w-7xl px-4 lg:flex lg:items-center lg:gap-x-0 xl:gap-x-8 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">Join our mailing list</h1>
          <p className="mt-8 font-open-sans text-lg font-medium text-pretty text-zinc-50 sm:text-xl/8">
            We consult, create and build learning solutions and media content for your context with measurable results.
          </p>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <Image 
            src='/images/learning_design_v03_connor.png'
            alt='image of man using tech'
            width={730}
            height={730}
            className='mx-auto max-w-full lg:max-w-lg xl:max-w-full'
          />
        </div>
      </div>
    </div>
  )
}
