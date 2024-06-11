import Image from 'next/image'
import MycroftLight from '@/public/images/mycroft_light.png'
import MycroftDark from '@/public/images/mycroft_dark.png'
import React from 'react'
import Link from 'next/link'

const Mycroft = () => {
    return (
      <picture>
        <source srcSet={MycroftDark.src} media="(prefers-color-scheme: dark)" />
        <Image
            src={MycroftLight.src}
            alt="My image"
            width={350}
            height={350}
        />
      </picture>
  );
};

export default function Getonpi() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-5 md:pt-40 md:pb-5">
          <div className="pb-5 md:pb-5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className='flex justify-center items-center' data-aos="zoom-y-out">
                  <Mycroft />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white" data-aos="zoom-y-out">
                    Own a Raspberry Pi or Mycroft® Device?
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8" data-aos="zoom-y-out">
                    Our Prebuild Image is a stripped-down Linux OS designed to host the open-source voice assistant Open Voice OS, catering specifically to embedded systems, low-spec headless devices, and small touch-friendly screens.
                  </p>
                  <div className="flex justify-center">
                    <Link href="/downloads" className="bg-black dark:bg-gray-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded hover:bg-gray-700 dark:hover:bg-gray-600">
                      Download Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}