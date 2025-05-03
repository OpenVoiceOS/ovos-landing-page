"use client";

import Link from "next/link";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ categories for better organization
const categories = {
  general: "General",
  technical: "Technical",
  contribution: "Contributing",
  usage: "Using OVOS",
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null,
  );

  // Group FAQs by category
  const faqsByCategory = faqData.reduce(
    (acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
      return acc;
    },
    {} as Record<string, typeof faqData>,
  );

  return (
    <section className="flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter text-center text-gray-900 dark:text-white pb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
        Find answers to the most common questions about Open Voice OS, its
        features, and how to get involved.
      </p>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() =>
              setActiveCategory(activeCategory === key ? null : key)
            }
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      activeCategory === key
                        ? "bg-black text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="w-full max-w-screen-lg px-8">
        {/* Show all categories or just the active one */}
        {(activeCategory ? [activeCategory] : Object.keys(categories)).map(
          (category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {categories[category as keyof typeof categories]}
              </h2>
              <div className="space-y-4 rounded-lg border border-gray-200 dark:border-gray-700">
                {faqsByCategory[category]?.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isLast={index === faqsByCategory[category].length - 1}
                  />
                ))}
              </div>
            </div>
          ),
        )}

        <div className="mt-8 text-center p-6">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
            Got a question that isn't answered here?
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <Link
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-bold"
              href="https://ovoshatchery.github.io/community-docs/305-faq"
            >
              View Full FAQ
            </Link>
            <Link
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
              href="/contact-form"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    category: "general",
    question: "How did Open Voice OS start?",
    answer: (
      <div className="space-y-2">
        <p>
          Open Voice OS started as MycroftOS. Over time, more Mycroft community
          members joined the project, and it was renamed to OpenVoiceOS to avoid
          trademark issues.
        </p>
        <p>
          Initially, Open Voice OS focused on bundling Mycroft-core and creating
          companion software, but due to contributions not being accepted
          upstream, we now maintain an enhanced reference fork of Mycroft-core
          with extra functionality while keeping all companion software
          Mycroft-core (dev branch) compatible.
        </p>
        <p>
          You can think of Open Voice OS as the unsanctioned "Mycroft Community
          Edition".
        </p>
      </div>
    ),
  },
  {
    category: "general",
    question: "What is the relationship between Open Voice OS and Mycroft?",
    answer: (
      <div className="space-y-2">
        <p>
          Both projects are fully independent. Initially, Open Voice OS focused
          on wrapping Mycroft-core with a minimal OS, but as both projects
          matured, Open Voice OS-core was created to include extra functionality
          and make Open Voice OS development faster and more efficient.
        </p>
        <p>
          Open Voice OS has been committed to keeping our components compatible
          with Mycroft, and many of our changes are submitted to Mycroft to
          include in their projects at their discretion.
        </p>
      </div>
    ),
  },
  {
    category: "technical",
    question: "Does Open Voice OS work offline?",
    answer: (
      <div className="space-y-2">
        <p>
          By default, ovos-core does not require a backend internet server to
          operate. Some skills can be accessed (via command line) entirely
          offline.
        </p>
        <p>
          The default speech-to-text (STT) engine currently requires an internet
          connection, though some self-hosted, offline options are available.
        </p>
        <p>
          Individual skills and plugins may require internet, and most of the
          time you will want to use those for a full experience.
        </p>
      </div>
    ),
  },
  {
    category: "contribution",
    question: "How can I contribute to Open Voice OS?",
    answer: (
      <div className="space-y-2">
        <p>
          Open Voice OS is a community project and we welcome contributions of
          all kinds:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Testing and reporting bugs</li>
          <li>Writing or improving documentation</li>
          <li>Creating or enhancing skills</li>
          <li>Code contributions</li>
          <li>Translations</li>
          <li>Community support</li>
        </ul>
        <p>
          Visit our{" "}
          <Link
            href="/contribution"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            contribution page
          </Link>{" "}
          to learn how to get started.
        </p>
      </div>
    ),
  },
  {
    category: "technical",
    question: "What hardware does Open Voice OS support?",
    answer: (
      <div className="space-y-2">
        <p>
          Open Voice OS can run on a variety of hardware platforms, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Raspberry Pi models (3B, 3B+, 4, Zero 2)</li>
          <li>Mark I and Mark II devices</li>
          <li>Linux desktops and laptops</li>
          <li>Docker containers</li>
        </ul>
        <p>
          Check our{" "}
          <Link
            href="/downloads"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            downloads page
          </Link>{" "}
          for specific images and installation instructions.
        </p>
      </div>
    ),
  },
  {
    category: "usage",
    question: "How do I install Open Voice OS?",
    answer: (
      <div className="space-y-2">
        <p>The installation process depends on your hardware:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            For Raspberry Pi: Download our pre-built image and flash it to your
            SD card
          </li>
          <li>
            For desktops/laptops: Install using our Docker container or package
          </li>
          <li>For Mark II: Download the specific Mark II image</li>
        </ul>
        <p>
          Detailed installation instructions are available on our{" "}
          <Link
            href="/downloads"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            downloads page
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    category: "usage",
    question: "What can I do with Open Voice OS?",
    answer: (
      <div className="space-y-2">
        <p>Open Voice OS allows you to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Create a voice assistant with customizable wake words</li>
          <li>Control smart home devices</li>
          <li>Play music, podcasts, and radio</li>
          <li>Get answers to questions</li>
          <li>Set timers and reminders</li>
          <li>Extend functionality with skills from our marketplace</li>
          <li>Create your own skills</li>
        </ul>
        <p>
          The functionality can be extended through our community-developed
          skills.
        </p>
      </div>
    ),
  },
  {
    category: "technical",
    question:
      "How do speech recognition and text-to-speech work in Open Voice OS?",
    answer: (
      <div className="space-y-2">
        <p>
          Open Voice OS uses a plugin-based architecture for both speech
          recognition (STT) and text-to-speech (TTS):
        </p>
        <p>
          <strong>Speech Recognition (STT):</strong> The default configuration
          uses online services, but you can also set up local/offline options
          like Vosk or Mozilla DeepSpeech.
        </p>
        <p>
          <strong>Text-to-Speech (TTS):</strong> Multiple options are available
          including Mimic3 (local), Google TTS, Amazon Polly, and more. You can
          choose and configure these in your settings.
        </p>
      </div>
    ),
  },
  {
    category: "general",
    question: "Is Open Voice OS free to use?",
    answer: (
      <div className="space-y-2">
        <p>
          Yes! Open Voice OS is completely free and open source. It's released
          under the Apache License 2.0, which means you can:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use it for personal or commercial purposes</li>
          <li>Modify and distribute it</li>
          <li>Contribute back to the project</li>
        </ul>
        <p>
          We do appreciate{" "}
          <Link
            href="/donation"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            donations
          </Link>{" "}
          to help sustain the project, but they are entirely optional.
        </p>
      </div>
    ),
  },
];

const FaqItem = ({
  question,
  answer,
  isLast = false,
}: {
  question: string;
  answer: React.ReactNode;
  isLast?: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`border-gray-200 dark:border-gray-700 ${!isLast ? "border-b" : ""}`}
    >
      <button
        className="w-full flex justify-between items-center py-4 px-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {question}
        </span>
        <span className="ml-6 flex-shrink-0 text-gray-500 dark:text-gray-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
        aria-hidden={!isOpen}
      >
        <div className="text-gray-600 dark:text-gray-400">{answer}</div>
      </div>
    </div>
  );
};
