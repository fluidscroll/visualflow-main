import TwCtaButton from "@/components/TwCtaButton";

import Image from 'next/image'


export default function TwCaoBentogrid() {
  return (
    <div className="bg-slate-50 py-24 sm:py-27">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-sky-900 sm:text-5xl">
          Photography, Graphic Design, and Podcasts
        </h2>
        <p className="mt-5 text-xl text-center font-medium tracking-tight text-gray-950 max-lg:text-center">
                  These content add-ons are offered as standalone services or add-ons to our E-Learning development
                </p>
        
        <div className="mt-1 grid gap-4 sm:mt-16 lg:grid-cols-3">
          <div className="relative lg:row-span-2">
            <div className="absolute top-0 right-0 left-0 h-40 lg:h-48 overflow-hidden rounded-tl-xl shadow-1xl outline outline-white/10"/>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-white">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Photography
                </p>
                <p className="mt-2 px-4 lg:px-0 max-w-lg font-open-sans text-sm/6 text-gray-900 max-lg:text-center">
                 Your smartphone's camera has its limits! We offer professional photography to build your image library.
                </p>
                
              </div>
              <div className="container min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="flex justify-center mt-3">
                  <Image
                    alt="Screenshot of woman presenting"
                    src="/images/Camera_woman_studio.jpg"
                    width={500}
                    height={500}
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute top-10 right-0 bottom-0 left-10 lg:top-0 lg:left-0 overflow-hidden rounded-tl-xl shadow-1xl outline outline-white/10" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] bg-white">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Graphic Design</p>
                  <p className="mt-2 px-4 lg:px-0 max-w-lg font-open-sans text-sm/6 text-gray-900 max-lg:text-center">
                  Bespoke graphic design for your digital and printed communications - crafted inline with your organisation's brand.
                  </p>
                </div>
                <div className="container relative mt-10 3min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="flex justify-center">
                    <Image
                      alt="screenshot from e-learning module"
                      src="/images/Graphic_design_screenshot.jpg"
                      width={500}
                      height={500}
                      className="w-full max-lg:max-w-xs"
                    />
                  </div>
                </div>
              </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] bg-white">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Podcast Recording
                </p>
                <p className="mt-2 max-w-lg font-open-sans text-sm/6 text-gray-900 max-lg:text-center">
                  We offer mobile and studio based podcast recordings to capture your dynamic conversations.
                  </p>
              </div>
              <div className="container relative mt-1 3min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm ">
                
                  <div className=" text-white justify-center text-sm lg:text-base">
                    <Image
                      alt="image of code and designs"
                      src="/images/Podcast_microphones_record.jpg"
                      width={600}
                      height={600}
                      className="w-full max-lg:max-w-xs"
                    />
                  
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
      
      <div className='flex justify-center mt-8 lg:mt-16'>
        <TwCtaButton 
          label='Contact us to find out more'
          subject='General Enquiry - Content Add-ons'
        />
      </div>
    </div>
  )
}


