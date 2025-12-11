'use client'


import Link from "next/link";
import { ChevronDown, ChevronUp, CheckCircle2, X, ArrowDown } from "lucide-react";
import { useState } from "react";

import { tiers, featureSections } from "@/lib/pricing-data";


export default function PricingSection() {
    const [openSections, setOpenSections] = useState<string[]>([]);

    const toggleSection = (sectionId: string) => {
        setOpenSections(prev => 
            prev.includes(sectionId) 
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    return (
        <section className="font-open-sans pt-18 pb-11 sm:pt-28 sm:pb-15 md:pb-17 lg:pt-24 lg:pb-19">
            <div className="mx-auto max-w-lg sm:max-w-4xl lg:max-w-6xl xl:max-w-4/5 px-6 lg:px-8">
                <div className="mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl text-center mb-16">
                    <h2 id="bespoke-learning" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 scroll-mt-30">
                        Bespoke E-Learning Design Service
                    </h2>
                    <span className='font-nexa-book font-bold text-xl inline-block mb-8'>Compare plans</span>
                    <p className="text-lg leading-8 text-gray-900">
                        We offer a tiered E-Learning design service with a variety of content add-ons to suit your requirements
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-5 gap-4 mb-8">
                        <div className='flex flex-col justify-around items-center text-center p-6 rounded-2xl min-h-[320px] border bg-gray-50'>
                            <span className='font-bold'>
                                View included features for each plan below
                            </span>
                            <ArrowDown size={40} />
                        </div>
                        {tiers.map((tier) => (
                            <div key={tier.id} className={`text-center p-6 rounded-2xl min-h-[320px] flex flex-col ${
                                tier.featured 
                                    ? 'bg-gray-50 relative hover:bg-blue-50 hover:border-2 hover:border-blue-200 transition-colors duration-500' 
                                    : 'bg-gray-50 hover:bg-blue-50 hover:border-2 hover:border-blue-200 transition-colors duration-500'
                            }`}>
                                {tier.featured && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Recommended
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                                <div className="mb-4">
                                    <span className="text-lg font-bold text-gray-900">{tier.price}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6 flex-grow">{tier.description}</p>
                                {/* <Link 
                                    href={`mailto:james@visualflow.studio?subject=Sign Me Up For E-Learning ${tier.name} Plan`}
                                    className={`inline-block w-full py-3 px-4 rounded-lg text-sm font-semibold transition-colors mt-auto ${
                                        tier.featured
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                                >
                                    Select and Contact
                                </Link> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {tiers.map((tier) => (
                            <div key={tier.id} className={`text-center p-6 rounded-2xl min-h-[280px] flex flex-col ${
                                tier.featured 
                                    ? 'bg-gray-50 relative hover:bg-blue-50 hover:border-2 hover:border-blue-200 transition-colors duration-500' 
                                    : 'bg-gray-50 hover:bg-blue-50 hover:border-2 hover:border-blue-200 transition-colors duration-500'
                            }`}>
                                {tier.featured && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Recommended
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.name}</h3>
                                <div className="mb-4">
                                    <span className="text-2xl font-bold text-gray-900">{tier.price}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-6 flex-grow">{tier.description}</p>
                                <Link 
                                    href={`mailto:james@visualflow.studio?subject=Sign Me Up For E-Learning ${tier.name} Plan`}
                                    className={`inline-block w-full py-3 px-4 rounded-lg text-sm font-semibold transition-colors mt-auto ${
                                        tier.featured
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                                >
                                    Select and Contact
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Feature Sections - Desktop */}
                <div className="hidden lg:block">
                    {featureSections.map((section) => (
                        <div key={section.id} className="border-b border-gray-200 last:border-b-0">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full py-4 flex items-center justify-between text-left hover:bg-neutral-200 transition-colors"
                            >
                                <h4 className="text-lg font-semibold text-gray-900 pl-1">{section.name}</h4>
                                {openSections.includes(section.id) ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                            
                            {openSections.includes(section.id) && (
                                <div className="pb-6">
                                    {section.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="grid grid-cols-5 gap-4 py-3 hover:bg-neutral-200">
                                            <div className="flex items-center pl-1">
                                                <span className="text-sm text-gray-700">{feature.name}</span>
                                            </div>
                                            {feature.values.map((value, valueIndex) => (
                                                <div key={valueIndex} className={`text-center p-3 ${
                                                    tiers[valueIndex].featured ? 'bg-blue-50' : ''
                                                }`}>
                                                    {value === '✓' ? (
                                                        <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                                                    ) : value === '✗' ? (
                                                        <X className="h-5 w-5 text-black mx-auto" />
                                                    ) : (
                                                        <span className="text-sm text-gray-900">{value}</span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Feature Sections - Mobile */}
                <div className="lg:hidden">
                    {featureSections.map((section) => (
                        <div key={section.id} className="border-b border-gray-200 last:border-b-0 mb-6">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full py-4 flex items-center justify-between text-left hover:bg-neutral-200 transition-colors"
                            >
                                <h4 className="text-lg font-semibold text-gray-900 pl-1">{section.name}</h4>
                                {openSections.includes(section.id) ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                            
                            {openSections.includes(section.id) && (
                                <div className="pb-6">
                                    {section.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="mb-4 hover:bg-neutral-200">
                                            <h5 className="font-medium text-gray-900 mb-2 pl-1">{feature.name}</h5>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-full sm:max-w-7/10 md:max-w-full mx-auto">
                                                {feature.values.map((value, valueIndex) => (
                                                    <div key={valueIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {tiers[valueIndex].name}
                                                        </span>
                                                        <div className="flex items-center">
                                                            {value === '✓' ? (
                                                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                            ) : value === '✗' ? (
                                                                <X className="h-4 w-4 text-black" />
                                                            ) : (
                                                                <span className="text-sm max-[850px]:ml-8 text-gray-900">{value}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}