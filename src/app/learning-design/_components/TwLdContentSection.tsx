import Image from 'next/image'


export default function TwLdContentSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-28 lg:py-30 xl:py-32 lg:overflow-visible lg:px-0">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 xl:gap-x-4">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 mb-8 lg:mb-0">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-sky-800">Improve the learning experience</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                No more &lsquo;text heavy&rsquo; and dull learning content
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto self-center -mt-12 ml-0 lg:-ml-12 p-2 sm:p-6 lg:p-2 xl:p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 2xl:max-w-4xl">
          <Image
            alt="Woman reading from ipad and screenshots of content"
            src="/images/d_laptop_and_screenshots.png"
            width={900}
            height={900}
            className="mx-auto w-full h-full max-w-9/10 2xl:max-w-4/5 2xl:ml-8"

            // (code stripped from above) "mx-auto w-full h-full max-w-9/10 2xl:max-w-4/5 2xl:ml-8 rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10"
          />
          <div className="mt-10 flex justify-center gap-x-6 scroll-smooth">
            <a href="#case-studies" className="rounded-md bg-sky-700 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 transition-all">Jump to featured case study</a>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl font-open-sans text-lg/8 text-gray-700 lg:max-w-lg">
              <ul className="list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed">
                <li>
                  Many educational providers and L&amp;D teams don&apos;t often have the in-house expertise or time for creating visually engaging e-learning content.
                </li>
                <li>
                  This results in the &quot;click-next&quot; and &quot;text-heavy&quot; learning experiences or adapting generic off-the-shelf solutions.
                </li>
              </ul>
              <div className="px-4 mt-10 flex justify-start gap-x-6">
                <a href="#learning-approach" className="text-md/7 font-semibold text-sky-700 dark:text-white">Learn more about our design approach 
                  <span aria-hidden="true" className="'ml-6 font-bold text-4xl relative top-2">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
