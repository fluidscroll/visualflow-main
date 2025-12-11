import Image from 'next/image'


export default function TwLogoCloud() {
  return (
    <div className="bg-linear-to-r from-slate-900 to-sky-500 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center text-xl/8 font-semibold text-slate-100">
          Clients who have trusted us to deliver solutions
        </h3>
        <div className="mx-auto mt-10 grid grid-cols-3 lg:flex justify-center items-center gap-y-12 lg:gap-y-0 lg:gap-x-18 max-w-none pt-10 pb-5 lg:py-8 sm:px-4">
          <Image
            alt="Client: NHS England"
            src="/images/nhs_england_logo.png"
            width={250}
            height={250}
            className="max-h-11 sm:max-h-14 w-full object-contain"
          />
          <Image
            alt="Client: Miller"
            src="/images/miller_white.png"
            width={250}
            height={250}
            className="max-h-15 sm:max-h-15 w-full object-contain pr-7 min-[400px]:pr-10 sm:pr-13 lg:pr-10 xl:pr-11"
          />
          <Image
            alt="Client: BMJ Learning"
            src="/images/bmj-logo-mono-white.svg"
            width={250}
            height={250}
            className="max-h-7 sm:max-h-10 w-full object-contain"
          />
          <Image
            alt="Client: House Gospel Choir"
            src="/images/house-of-gospel-choir_logo.png"
            width={250}
            height={250}
            className="max-h-11 sm:max-h-14 w-full object-contain hidden lg:inline-block"
          />
          <Image
            alt="Client: University of the West of England Bristol"
            src="/images/uwe-logo-white.png"
            width={250}
            height={250}
            className="max-h-11 sm:max-h-14 w-full object-contain hidden lg:inline-block"
          />

          {/* // For displaying second row of logos with horizontal centering, for screen widths up to lg(1024px) breakpoint */}
          <div className="col-span-3 flex justify-center lg:hidden">
            <Image
              alt="Client: House Gospel Choir"
              src="/images/house-of-gospel-choir_logo.png"
              width={250}
              height={250}
              className="max-h-11 sm:max-h-14 w-full object-contain"
            />
            <Image
              alt="Client: University of the West of England Bristol"
              src="/images/uwe-logo-white.png"
              width={250}
              height={250}
              className="max-h-11 sm:max-h-14 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
