import TwCtaButton from "@/components/TwCtaButton";

import Image from 'next/image'


export default function TwLdBentogrid() {
  return (
    <div className="bg-gray-50 py-24 sm:py-28" id='learning-approach'>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-sky-800">Learning Design</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Transform the learning experience
        </p>
        <p className="mt-10 text-center font-open-sans">
          Learning Design is an essential and exciting collaborative process aimed at <span className="font-semibold"> reimagining existing learning materials</span> or <span className="font-semibold"> creating scalable, media-rich</span> and academically strong learning experiences. The below cards show the 3 key features of our Learning Design approach.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3">
          <div className="relative lg:row-span-2">
            <div className="absolute top-0 right-0 left-0 h-40 lg:h-48 overflow-hidden rounded-tl-xl shadow-1xl outline outline-white/10"/>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-white">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Multimedia Content
                </p>
                <p className="mt-2 px-4 lg:px-0 max-w-lg font-open-sans text-sm/6 text-gray-600 max-lg:text-center">
                  Using various media types to represent information is an important pedagogic principle to ensure content appeals to the various types of learners.
                </p>
              </div>
              <div className="container min-h-2 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="flex justify-center">
                  <Image
                    alt="Screenshot of woman presenting"
                    src="/images/vmiller_and_cloud.png"
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
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">User Interface Design</p>
                  <p className="mt-2 px-4 lg:px-0 max-w-lg font-open-sans text-sm/6 text-gray-600 max-lg:text-center">
                    We provide a clean, fresh, on-brand interface to minimise visual noise and deliver a better experience for your learners.
                  </p>
                </div>
                <div className="container relative min-h-2 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="flex justify-center">
                    <Image
                      alt="screenshot from e-learning module"
                      src="/images/interface_card_graphic.png"
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
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Creative Learning Designers and Coders
                </p>
                <p className="mt-2 max-w-lg font-open-sans text-sm/6 text-gray-600 max-lg:text-center">
                  We are skilled Content Creators with learning design knowledge working with Expert Coders. So there will be no more bland, static learning content!
                </p>
              </div>
              <div className="relative min-h-2 w-full grow">
                
                      {/* <div className="px-4 py-2 text-white">
                        Quiz.tsx
                      </div>
                      <div className="border-r border-b border-r-white/10 border-b-white/20 border-gray-600/10 px-4 py-2 bg-white/5 text-white">App.tsx</div> */}
                    
                  <div className="mx-auto px-[10%] sm:px-[20%] lg:px-[2%] pt-6 pb-14 text-white text-sm lg:text-base">
                    <Image
                      alt="image of code and designs"
                      src="/images/interface_card_graphic_terminal.png"
                      width={600}
                      height={500}
                      className="w-full max-lg:max-w-xs"
                    />
                 
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>

      {/* <div className='flex justify-center mt-8 lg:mt-16'>
        <TwCtaButton 
          label='Book your consultation'
          subject='Free 15 Minute Consultation - Learning Design'
        />
      </div> */}
      <div className="px-4 min-[450px]:px-6 sm:px-0 mt-10 flex justify-center gap-x-6">
        <a href="#b-learning" className="text-lg/7 font-semibold text-sky-800 dark:text-white">Scroll down to see our bespoke E-Learning service in action
          <span aria-hidden="true" className='ml-6 font-bold text-4xl relative top-2'>↓</span>
        </a>
      </div>
    </div>
  )
}
