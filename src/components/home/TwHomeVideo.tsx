

export default function TwHomeVideo() {
  return (
    <div className="font-nexa-book bg-stone-50 py-22 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-sky-800">Re-imagine your content</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-sky-800 sm:text-5xl sm:text-balance">
            Transform your content with us
          </p>
          <p className="mt-6 font-open-sans text-[21px]/8 text-zinc-800">
            We collaborate with Educators, Learning & Development Managers and Marketing Professionals across a wide range of organisations to transform and produce engaging digital content.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
          <video
            className="w-full h-full object-cover rounded-xl shadow-1xl ring-1 ring-gray-900/10"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/visualflow_showreel_homepage_2025.webm" type="video/webm" />
            {/* Fallback content for browsers that don't support video */}
            <div className="flex h-full items-center justify-center bg-gray-100">
                <div className="text-center">
                    <p className="font-medium text-gray-500">
                        Your browser doesn&apos;t support video playback.
                    </p>
                </div>
            </div>
          </video>
        <div className="px-4 min-[450px]:px-6 sm:px-0 mt-10 flex justify-center gap-x-1">
        <p className="text-xl/7 font-semibold text-sky-800  dark:text-white">Continue scrolling
          <span aria-hidden="true" className='ml-1 font-bold  sky-800 text-4xl relative top-2'>↓</span>
        </p>
      </div>
        </div>
      </div>
    </div>
  )
}
