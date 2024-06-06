import Image from 'next/image'
import Mycroft from '@/public/images/mycroft.png'
import React from 'react'
import Link from 'next/link'

export default function Getonpi() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-5 md:pt-40 md:pb-5">
          <div className="pb-5 md:pb-5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className='flex justify-center items-center' data-aos="zoom-y-out">
                  <Image src={Mycroft} alt='Mycroft Mark II' height={350} width={350} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Own a Raspberry Pi or Mycroft Device ?</h1>
                  <p className="text-lg text-gray-600 mb-8" data-aos="zoom-y-out">Our Buildroot Image is a stripped-down Linux OS designed to host the open-source voice assistant Mycroft A.I., catering specifically to embedded systems, low-spec headless devices, and small touch-friendly screens.</p>
                  <div className="flex justify-center">
                    <Link href="/downloads" className="bg-black text-white font-bold py-2 px-4 rounded">
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