export default function TwHomeCta() {
  return (
    <div className="bg-sky-100 text-slate-800">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Engage, educate, and inspire your audience today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 font-open-sans text-pretty">
            Book your free 15 minute consultation
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://calendly.com/james-visualflow/30min " target="_blank" 
              className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-black font-nexa-book shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
            >
              {' '}
              Contact us{' '}
            </a>
           
          </div>
           
        </div>
      </div>
    </div>
  )
}
