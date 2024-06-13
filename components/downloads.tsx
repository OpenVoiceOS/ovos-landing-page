'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Pi from '@/public/images/pi.png';
import Mycroft from '@/public/images/mycroft.png';

export default function DownloadPage() {
  const [showPeripherals, setShowPeripherals] = React.useState(false);
  const [showDevices, setShowDevices] = React.useState(false);

  const handleTogglePeripherals = () => {
    setShowPeripherals(!showPeripherals);
  };

  const handleClosePeripherals = () => {
    setShowPeripherals(false);
  };

  const handleToggleDevices = () => {
    setShowDevices(!showDevices);
  };

  const handleCloseDevices = () => {
    setShowDevices(false);
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-5 md:pt-40 md:pb-5">
        <div className="grid grid-cols-1 gap-8 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 dark:text-white" data-aos="zoom-y-out">Downloads</h1>
            <p className="text-lg rounded-xl p-3 max-w-2xl mx-auto text-gray-600 mb-8 dark:text-gray-300" data-aos="zoom-y-out">
              Intrested in Building your own Voice Assistant? Cheeck out <Link href="https://www.xda-developers.com/raspberry-pi-ai-voice-assistant/" className='text-blue-800'>this</Link> amazing guide to get started.
            </p>
            <div className="flex justify-center items-center" data-aos="zoom-y-out">
              <button className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800" onClick={handleToggleDevices}>
                Show Supported Devices
              </button>
              <button className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800" onClick={handleTogglePeripherals}>
                Show Supported Peripherals
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5" data-aos="zoom-y-out">
      <div className='bg-gray-200 dark:bg-gray-800 rounded-xl p-5 max-w-2xl mx-auto my-auto'>
        <h1 className='text-2xl font-bold text-center pb-8 dark:text-gray-200'>Which device are you using?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Link href="https://downloads.openvoiceos.org/images/raspbian/latest/ovos-raspbian.zip">
            <Image src={Pi} alt="Raspberry Pi" width={300} height={300} className="mx-auto" />
            <p className="text-lg text-gray-600 mb-8 dark:text-gray-300 text-center" data-aos="zoom-y-out"> Raspberry Pi </p>
          </Link>
          <Link href="https://downloads.openvoiceos.org/images/buildroot/dev/">
            <Image src={Mycroft} alt="mycroft" width={300} height={300} className="mx-auto" />
            <p className="text-lg text-gray-600 mb-8 dark:text-gray-300 text-center" data-aos="zoom-y-out"> Mycroft® Device </p>
          </Link>
        </div>
      </div>
      <p className="text-lg rounded-xl p-3 max-w-2xl mx-auto text-gray-600 mb-8 dark:text-gray-300" data-aos="zoom-y-out">
        Note If you want to install Open Voice OS on you Laptop/Desktop Consider using our installer script. It will install all the dependencies and setup the environment for you.
        <Link href="https://github.com/OpenVoiceOS/ovos-installer" className='text-blue-800'> More details here</Link>
      </p>
      </div>

      <div className="max-w-2xl mx-auto pt-8">
        <h1 className="text-3xl pb-3 font-bold text-center dark:text-gray-200"> Are you a <span className='font-extrabold'>developer</span>?</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          If you are a developer, and want the latest and greatest, check our development releases. expect bugs and if you encounter any, please report/contact us (even better, fix it and submit a PR).
        </p>
        <div className="flex justify-center items-center">
          <Link href="https://downloads.openvoiceos.org/images/">
            <button className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800">
              Development Releases
            </button>
          </Link>
        </div>
        </div>
      {showDevices && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 m-5 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-xl font-bold leading-tighter tracking-tighter mb-4">Supported Devices</h2>
            <ul>
              <li>Raspberry PI 3 (Including the Mark1) (Work In Progress)</li>
              <li>Raspberry PI 4 - Mark 2 / Mark 2 Dev Kit / Respeaker</li>
              <li>x86-64 (Work In Progress)</li>
            </ul>
            <button className="mt-4 bg-black text-white font-bold py-2 px-4 rounded" onClick={handleCloseDevices}>
              Close
            </button>
          </div>
        </div>
      )}

      {showPeripherals && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 m-5 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-xl font-bold leading-tighter tracking-tighter mb-4">Supported Peripherals</h2>
            <ul>
              <li>ReSpeaker 2mic</li>
              <li>ReSpeaker 4mic Array</li>
              <li>ReSpeaker 4mic Linear Array</li>
              <li>ReSpeaker 6mic Circular Array</li>
              <li>RPI-Proto (Mark1 soundcard)</li>
              <li>SJ-201 (Mark2 led/audio/microphone board)</li>
              <li>PS3-Eye (USB microphone)</li>
              <li>Google AIY-v1 / Chatterbox HAT</li>
            </ul>
            <button className="mt-4 bg-black text-white font-bold py-2 px-4 rounded" onClick={handleClosePeripherals}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}