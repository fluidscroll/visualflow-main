import Image from "next/image";
// import TwCtaButton from "@/components/TwCtaButton"


export default function TwAboutHeader() {
  return (
    <div className="overflow-hidden bg-gray-50 pt-26 pb-24 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-4 xl:pb-8 2xl:pb-12">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-sky-900 sm:text-6xl">
            About us
          </h1>
          {/* <p className="font-open-sans mt-6 text-xl/8 text-balance text-gray-900">
            Driven to craft visual content and learning experiences.
          </p> */}
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="font-open-sans lg:pr-8">
            <h2 className="text-2xl font-semibold font-nexa-book tracking-tight text-pretty text-sky-800">
  Driven to craft visual content and learning experiences.
</h2>
<p className="mt-3 mb-3 text-base/7 text-gray-900">
  VisualFlow is a London based EdTech Media company founded by James Blake in 2023, born out of years of observing various sectors and institutions deliver low quality video and &lsquo;text heavy&rsquo; learning content.
  VisualFlow is led by James and supported by a handpicked team of (UK based) experienced freelancers - this keeps your costs affordable whilst still achieving high quality results. 
</p>

<h2 className="mt-8 text-2xl font-semibold font-nexa-book tracking-tight text-pretty text-sky-800">
  Who we work with.
</h2>
<p className="mt-1 pb-2 text-base/7 text-gray-900">
  We have worked with many types of organisations and sectors this includes; Healthcare, Finance, Higher Education and Charity sectors.
  So we&apos;re experienced and enjoy working with a range people.
</p>

<h2 className="mt-8 text-2xl font-semibold font-nexa-book tracking-tight text-pretty text-sky-800">
  Community minded.
</h2>
<p className="mt-1 text-base/7 text-gray-900">
  Lastly, we have a big heart for local communities, so we are always open to supporting the community with our services and workshops. 
</p>

            
            
            {/* <span className="inline-block mt-14 font-nexa-book font-semibold">Benefits of expertly crafted digital content:</span>
            <ul className="mt-8 mb-4 lg:mb-0 text-gray-900 flex flex-col gap-y-4 list-disc pl-4">
              <li>Scaleable</li>
              <li>Self-paced and accessible</li>
              <li>Measurable</li>
              <li>Cost effective</li>
            </ul> */}
            {/* <div className='mt-10 lg:mt-20 mb-10 lg:mb-0 flex justify-center font-nexa-book'>
              <TwCtaButton 
                label='Contact us'
                subject='General Enquiry'
              />
            </div> */}
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Lady using ipad"
                  src="/images/RoseM_ipad_about_us_colour.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt="Lady using laptop"
                  src="/images/D_laptop-close_up.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Lady presenting"
                  src="/images/Farz_about_us.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt="Man holding laptop and smiling"
                  src="/images/Con_laptop_about_us.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
