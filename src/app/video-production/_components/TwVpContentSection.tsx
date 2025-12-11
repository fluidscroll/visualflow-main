import Image from 'next/image'

import { BookOpenIcon, VideoCameraIcon, CloudArrowUpIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Brief and Pre-production',
    description: '| Planning, scripting and storyboarding',
    icon: BookOpenIcon,
  },
  {
    name: 'Production',
    description: '| Filming or creation of motion graphics in After Effects software',
    icon: VideoCameraIcon,
  },
  {
    name: 'PostProduction',
    description: '| Editing and publishing',
    icon: CloudArrowUpIcon,
  },
]

export default function TwVpContentSection() {
  return (
    <div className="overflow-hidden bg-sky-950 pt-26 pb-18 sm:pt-30 sm:pb-16 lg:pt-26 lg:pb-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-10 xl:px-12 2xl:px-8 2xl:max-w-4/5">
        <div className="mx-auto grid max-w-3xl grid-cols-1 lg:gap-x-0 xl:gap-x-4 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-gray-200"> Production Stages</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-200 sm:text-5xl">
                Developing your
                video content
              </p>
              <dl className="font-open-sans mt-10 max-w-xl space-y-8 text-base/7 text-gray-100 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-100">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-yellow-300" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mx-auto self-center -mt-12 ml-0 lg:-ml-12 py-2 px-0 sm:py-4 sm:px-2 lg:py-2 lg:px-0 2xl:p-2 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Image
              alt="image of lady using tech"
              src="/images/rosemary-video.png"
              width={700}
              height={700}
              className="mx-auto w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
