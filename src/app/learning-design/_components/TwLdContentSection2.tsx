import Image from 'next/image'

import DemoCourseBtn from './DemoCourseBtn'
// import TwCtaButton from "@/components/TwCtaButton"; 

import { VideoCameraIcon, BookOpenIcon, InformationCircleIcon, EyeIcon, PencilIcon, CameraIcon, BriefcaseIcon } from '@heroicons/react/20/solid'


// const screenshots = [
//   {
//     name: 'Screenshot 1',
//     url: '/images/placeholder-screenshot.png'
//   },
//   {
//     name: 'Screenshot 2',
//     url: '/images/placeholder-screenshot.png'
//   },
//   {
//     name: 'Screenshot 3',
//     url: '/images/placeholder-screenshot.png'
//   },
//   {
//     name: 'Screenshot 4',
//     url: '/images/placeholder-screenshot.png'
//   },
//   {
//     name: 'Screenshot 5',
//     url: '/images/placeholder-screenshot.png'
//   },
// ]


export default function TwLdContentSection2() {
  return (
    <div className="relative isolate overflow-hidden bg-sky-950 px-3 sm:px-6 pt-8 sm:pt-4 lg:pt-30 pb-8 sm:pb-8 lg:pb-26 lg:overflow-visible lg:px-0" id="case-studies">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden"> */}
        {/* <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg> */}
      {/* </div> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="mx-auto mb-8 grid max-w-lg grid-cols-4 lg:grid-cols-6 items-center gap-x-5 gap-y-10 sm:max-w-xl lg:max-w-none">
              <Image
                alt="Client: University of the West of England Bristol"
                src="/images/uwe_red.jpg"
                width={300}
                height={300}
                className="col-span-2 max-h-15 w-full object-contain"
              />
              <Image
                alt="Client: NHS England"
                src="/images/nhs_logo_white.png"
                width={300}
                height={300}
                className="col-span-2 max-h-15 w-full object-contain"
              />
            </div>
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-zinc-100">Featured case study (Learning Design and E-Learning)</h2>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-pretty text-zinc-100 sm:text-5xl">
                Inclusive Training within Practice
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto self-center -mt-12 ml-0 lg:-ml-12 p-2 sm:py-10 sm:px-4 lg:pt-2 lg:pb-0 lg:px-6 xl:p-10 xl:pb-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 2xl:max-w-3xl 2xl:pl-0">
          <video
            className="w-full h-full object-cover rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/Module_examples_export.webm" type="video/webm" />
            {/* Fallback content for browsers that don't support video */}
            <div className="flex h-full items-center justify-center bg-gray-100">
                <div className="text-center">
                    <p className="font-medium text-gray-500">
                        Your browser doesn&apos;t support video playback.
                    </p>
                </div>
            </div>
          </video>
          <div className='mt-4 sm:mt-6 lg:mt-16 flex justify-center'>
            <DemoCourseBtn />
          </div>
        </div>
        <div className="font-open-sans lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-zinc-100 lg:max-w-lg">
              <ul className="list-disc list-outside pl-6 space-y-3">
                <li>
                  The Inclusive Training within Practice (ITP) project, led by the University of the West of
                  England and funded by NHS South West, commissioned VisualFlow (led by James
                  Blake) to support the project’s digital learning design needs.
                </li>
                <li>
                  VisualFlow supported the project over a two-year period working in close collaboration with the
                  project team and subject matter experts, leading the end-to-end development of our digital
                  learning resources.
                </li>
                <li>
                  Our services included filming and editing live-action videos,
                  designing engaging e-learning packages, and producing a range of supporting documents
                  and toolkits.
                </li>
              </ul>
              <ul role="list" className="mt-8 space-y-8 text-zinc-50">
                We delivered:
                <li className="flex gap-x-3 mt-4">
                  <VideoCameraIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-500" />
                  <span>
                    <strong className="font-semibold text-zinc-50">Full video production service</strong>, producing just over 50 videos!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BookOpenIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-500" />
                  <span>
                    <strong className="font-semibold text-zinc-50">Four 1 hour interactive e-learning modules</strong> for the NHS Learning Hub
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-500" />
                  <span>
                    <strong className="font-semibold text-zinc-50">Over 12 hours on Learning Consultation</strong> with 7 subject matter experts
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <EyeIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-500" />
                  <span>
                    <strong className="font-semibold text-zinc-50">Marketing material</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PencilIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-500" />
                  <span>
                    <strong className="font-semibold text-zinc-50">Graphic Design</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CameraIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-500" />
                  <span>
                    <strong className="font-semibold text-zinc-50">Photography</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BriefcaseIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-500" />
                  <span>
                    <strong className="font-semibold text-zinc-50">Project</strong> involved Learning Designer, Developer, Graphic Designer
                  </span>
                </li>
              </ul>
              {/* <div className="mt-10 flex justify-center gap-x-6">
                <a href="#bespoke-learning" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-md   font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 transition-all">View our tiered E-Learning Design packages</a>
              </div> */}
              {/* <TwCtaButton 
                label='Book your consultation'
                subject='Free 15 Minute Consultation - Learning Design' 
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <span className='inline-block mt-24 w-full mx-auto font-open-sans font-semibold text-zinc-50 text-center'>View below images from the project</span>
      </div>
      <div className='mt-12 lg:mt-15 mb-6 lg:mb-0 px-2 sm:px-4 mx-auto grid lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-8 max-w-full sm:max-w-9/10 2xl:max-w-4/5'>
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.name}
            className='border border-gray-300 rounded-xl'
          >
            <a
              href="https://visualflowlearning1.s3.eu-west-2.amazonaws.com/ib_demo-version/index.html" 
              target="_blank"
            >
              <Image 
                src={screenshot.url}
                alt={screenshot.name}
                width={450}
                height={450}
                className="w-full h-full object-cover transform hover:scale-107 transition-transform duration-300"
              />
            </a>
          </div>
        ))}
      </div> */}
      <div className="mt-15 flex justify-center gap-x-6">
        <a href="#bespoke-learning" className="text-xl/7 font-semibold text-zinc-50 dark:text-white"> Scroll down to review our tiered E-Learning Design packages
          <span aria-hidden="true" className="ml-6 font-bold text-4xl relative top-2">↓</span>
        </a>
      </div>
    </div>
  )
}
