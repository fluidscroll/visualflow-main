import Image from "next/image";


export default function TwCaoHeader() {

  return (
    <div className="bg-sky-950 pt-30 pb-20 lg:pt-34 lg:pb-22">
      <div className="mx-auto max-w-7xl px-0 md:px-2 lg:flex lg:items-center lg:gap-x-0 lg:px-7 2xl:px-0">
        <div className="mx-auto max-w-2xs xl:max-w-full lg:mx-0 lg:-mr-25 2xl:mr-0 lg:flex-auto text-center lg:text-left">
          <h1 className="text-5xl font-semibold tracking-tight text-white min-[600px]:text-6xl min-[768px]:text-7xl min-[1024px]:text-6xl min-[1280px]:text-7xl">Content Add-ons</h1>
        <p className="mt-8 font-open-sans text-lg font-medium text-pretty text-zinc-50 sm:text-xl/8">
            Explore our additional creative services to power up your content to better engage, educate and inspire your audience.  
          </p>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <img 
            src="/images/Content_add_on_banner.png"
            alt="image of lady contemplating ideas"
            width={900}
            height={900}
            className="mx-auto max-w-full lg:max-w-2xl xl:max-w-full"
          />
        </div>
      </div>
    </div>
  )
}



