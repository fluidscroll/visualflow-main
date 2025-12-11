import TwCtaButton from "@/components/TwCtaButton"


export default function TwVpVideo() {
  return (
    <div className="bg-slate-50 py-22 sm:py-26">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-sky-800">Live action video</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
            Open minds and deepen knowledge with video
          </p>
          <p className="mt-6 text-lg/8 font-open-sans text-gray-900">
            We deliver affordable and expertly crafted video content that connects with your audience
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-5xl xl:max-w-6xl px-0 sm:px-6 lg:px-8">
          <div className="pt-[56.25%] relative">
            <iframe 
              src="https://player.vimeo.com/video/1116248021?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              title="Live action example"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            >
            </iframe>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-center mt-1 sm:mt-4 lg:mt-15'>
        <TwCtaButton 
          label='Contact us'
          subject='General Enquiry - Video Production' 
        />
      </div> */}
    </div>
  )
}
