import { 
    ParallaxBackground
} from '@/components/Animations';

import Link from 'next/link';
import { PlayCircle, Feather, Camera } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            title: 'Learning Design & E-learning development',
            description: 'This service is designed for those who need to transform their learning material into dynamic, interactive digital learning experiences that connect and engage with learners.',
            icon: Feather,
            url: '/learning-design'
        },
        {
            title: 'Video Production',
            description: 'We create human-centered videos that inspire and connect. Through collaboration and cinematic storytelling, we bring your vision to life with authenticity and impact.',
            icon: PlayCircle,
            url: '/video-production'
        },
        {
            title: 'Content Add-ons',
            description: 'We offer professional Photography, Graphic Design, and Podcast recording to complement your project goals.',
            icon: Camera,
            url: '/content-add-ons'
        },
    ];

    return (
        <section  className="bg-linear-to-r from-slate-900 to-sky-500 text-slate-100 min-h-605 min-[345px]:min-h-540 min-[390px]:min-h-505 min-[412px]:min-h-455 min-[503px]:min-h-420 sm:min-h-415 md:min-h-390 lg:min-h-320 xl:min-h-325 2xl:min-h-375 py-20 sm:py-24 min-[1153px]:pb-8 min-[1153px]:pt-34 relative overflow-hidden">
            <div className="mx-auto min-h-full px-6 lg:px-8 relative">
                {/* Background layer with heading */}
                <div id = "about_services" className="absolute inset-0 bg-[url(/images/flow-of-information-v02_full_colour.png)] bg-auto lg:bg-contain bg-no-repeat bg-center lg:bg-center xl:bg-bottom" />
                
                {/* Heading stays in background */}
                <div className="text-slate-200 mx-auto max-w-2xl lg:text-center mb-10 lg:mb-[38%] xl:mb-[34%] 2xl:mb-[40%] relative z-10">
                    <h2 className="font-nexa-book text-base font-semibold leading-7">Our Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
                        Explore our design and consultation services
                    </p>
                </div>

                {/* Cards with parallax effect in foreground */}
                <div className="mx-auto max-w-2xl lg:max-w-none relative z-20">
                    <ParallaxBackground speed={.9}>
                        <dl className="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-x-20 xl:gap-x-45 2xl:max-w-4/5">
                            {services.map((service) => (
                                <div key={service.title} className="relative flex flex-col lg:min-w-min rounded-2xl bg-slate-100 p-8 shadow-sm opacity-97 transition-shadow hover:shadow-lg">
                                    <dt className="flex items-center gap-x-4">
                                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-sky-800 text-white">
                                            <service.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-lg font-semibold leading-7 text-gray-900">{service.title}</h3>
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col font-open-sans text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{service.description}</p>
                                        <p className="mt-6">
                                            <Link href={service.url} className="text-sm font-semibold leading-6 text-sky-700 hover:text-sky-500">
                                                Learn more <span aria-hidden="true">→</span>
                                            </Link>
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </ParallaxBackground>
                </div>
            </div>
        </section>
    );
}