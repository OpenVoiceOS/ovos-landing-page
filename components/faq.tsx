'use client'

import Link from 'next/link'
import React from 'react';

export default function FaqPage() {
    return (
        <section className="flex flex-col items-center justify-center py-16">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter text-center">
            Frequently Asked Questions
            </h1>
            <div className="w-full max-w-screen-lg px-8">
                <button className="w-full border-b-2 border-gray-300 pb-6 pt-10 text-left group focus:outline-none">
                    <div className="text-lg font-semibold">Q: How did Open Voice OS started?</div>
                    <div className="mt-3 hidden text-gray-700 group-focus:flex">
                        <p>Open Voice OS started as MycroftOS, Over time more mycroft community members joined the project, and it was renamed to OpenVoiceOS to avoid trademark issues. Initially Open Voice OS was focused on bundling mycroft-core and on creating only companion software, but due to contributions not being accepted upstream we now maintain an enhanced reference fork of mycroft-core with extra functionality, while keeping all companion software mycroft-core (dev branch) compatible You can think of Open Voice OS as the unsanctioned "Mycroft Community Edition"</p>
                    </div>
                </button>
                <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
                    <div className="text-lg font-semibold">Q:What is the relationship between Open Voice OS and Mycroft?</div>
                    <div className="mt-3 hidden text-gray-700 group-focus:flex">
                        <p>Both projects are fully independent, initially Open Voice OS was focused on wrapping mycroft-core with a minimal OS, but as both projects matured, Open Voice OS-core was created to include extra functionality and make Open Voice OS development faster and more efficient. Open Voice OS has been committed to keeping our components compatible with Mycroft and many of our changes are submitted to Mycroft to include in their projects at their discretion.</p>
                    </div>
                </button>
                <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
                    <div className="text-lg font-semibold">Q: Does Open Voice OS work offline?</div>
                    <div className="mt-3 hidden text-gray-700 group-focus:flex">
                        <p>By default ovos-core does not require a backend internet server to operate. Some skills can be accessed (via command line) entirely offline. The default speech-to-text (STT) engine currently requires an internet connection, though some self-hosted, offline options are available. Individual skills and plugins may require internet, and most of the time you will want to use those.</p>
                    </div>
                </button>
                <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
                    <div className="text-lg font-semibold">Q: How can I contribute to Open Voice OS?</div>
                    <div className="mt-3 hidden text-gray-700 group-focus:flex">
                        <p>Open Voice OS is a community project and we welcome contributions of all kinds. You can contribute by testing, reporting bugs, writing documentation, creating skills, or even contributing code. We have a dedicated section in our documentation that explains how to get started with contributing to Open Voice OS.</p>
                    </div>
                </button>
                <div className="mt-6 text-center">
                    <p className='text-lg font-semibold'>Got a question that isn't answered here? Check out our <Link className='text-blue-700' href="https://openvoiceos.github.io/community-docs/305-faq/#how-did-ovos-start">Full FAQ</Link></p>
                </div>
            </div>
        </section>
    )
}