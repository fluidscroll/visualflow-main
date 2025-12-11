// import DemoCourseBtn from './DemoCourseBtn'
import ReadMore from '@/components/ReadMore'

import Image from 'next/image'


export default function TwLdMidheader() {
  return (
    <div id="b-learning"className="relative isolate overflow-hidden bg-gray-100 mt-3 mb-0 px-6 py-24 sm:py-40 lg:px-8 ">
      <Image
        alt="Woman sitting and looking at laptop"
        src="/images/e-learning_header.jpg"
        width={3000}
        height={3000}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        {/* <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        /> */}
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl id=b_learning">Bespoke E-Learning Design</h2>
        <p className="mt-8 font-open-sans text-lg font-medium text-pretty text-white sm:text-xl/8">
          We build interactive digital learning experiences that connect and engage with learners with expertly designed content
        </p>
      </div>
     <div className="mx-auto w-fit mt-18 -mb-18 sm:mt-22 sm:-mb-22 lg:mt-26 lg:-mb-26 
                flex flex-col-reverse sm:flex-row justify-center items-center 
                gap-12 sm:gap-16 text-white size-6 animate-bounce">
  <ReadMore />
  {/* <DemoCourseBtn /> */}
</div>
    </div>
  )
}
