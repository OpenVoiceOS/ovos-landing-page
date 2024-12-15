'use client'

import Link from 'next/link'
import React from 'react'

export default function FaqPage() {
    return (
        <section className="flex flex-col items-center justify-center py-16">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter text-center text-gray-900 dark:text-white pb-16">
                Frequently Asked Questions
            </h1>
            <div className="w-full max-w-screen-lg px-8">
                {faqData.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-300 pt-8">
                        Got a question that isn't answered here? Check out our{' '}
                        <Link className="text-blue-700 dark:text-blue-400" href="https://ovoshatchery.github.io/community-docs/305-faq">
                            Full FAQ
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

const faqData = [
    {
        question: 'Q: How did Open Voice OS started?',
        answer: 'Open Voice OS started as MycroftOS. Over time, more Mycroft community members joined the project, and it was renamed to OpenVoiceOS to avoid trademark issues. Initially, Open Voice OS focused on bundling Mycroft-core and creating companion software, but due to contributions not being accepted upstream, we now maintain an enhanced reference fork of Mycroft-core with extra functionality while keeping all companion software Mycroft-core (dev branch) compatible. You can think of Open Voice OS as the unsanctioned "Mycroft Community Edition".',
    },
    {
        question: 'Q: What is the relationship between Open Voice OS and Mycroft?',
        answer: 'Both projects are fully independent. Initially, Open Voice OS focused on wrapping Mycroft-core with a minimal OS, but as both projects matured, Open Voice OS-core was created to include extra functionality and make Open Voice OS development faster and more efficient. Open Voice OS has been committed to keeping our components compatible with Mycroft, and many of our changes are submitted to Mycroft to include in their projects at their discretion.',
    },
    {
        question: 'Q: Does Open Voice OS work offline?',
        answer: 'By default, ovos-core does not require a backend internet server to operate. Some skills can be accessed (via command line) entirely offline. The default speech-to-text (STT) engine currently requires an internet connection, though some self-hosted, offline options are available. Individual skills and plugins may require internet, and most of the time you will want to use those.',
    },
    {
        question: 'Q: How can I contribute to Open Voice OS?',
        answer: 'Open Voice OS is a community project and we welcome contributions of all kinds. You can contribute by testing, reporting bugs, writing documentation, creating skills, or even contributing code. We have a dedicated section in our documentation that explains how to get started with contributing to Open Voice OS.',
    },
]

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="border-b-2 border-gray-300 pt-5 text-left group focus:outline-none dark:border-gray-600">
            <button
                className="text-lg font-semibold text-gray-900 dark:text-gray-300 focus:outline-none"
                onClick={toggleOpen}
            >
                {question}
            </button>
            <div className={`mt-3 text-gray-700 dark:text-gray-400 transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}