'use client'
import React from 'react';

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-5 md:pt-40 md:pb-5">
          <div className="pb-5 md:pb-5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 dark:text-white" data-aos="zoom-y-out">Downloads</h1>
                  <p className="text-lg text-gray-600 mb-8 dark:text-gray-300" data-aos="zoom-y-out">A minimalist Linux OS bringing the open source voice assistant Mycroft A.I. to embedded, low-spec headless and/or small touch friendly screen devices.</p>
                  <div className='flex justify-center items-center' data-aos='zoom-y-out'>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800" onClick={handleToggleDevices}>
                      Show Supported Devices
                    </button>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800" onClick={handleTogglePeripherals}>
                      Show Supported Peripherals
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 rounded-xl" data-aos="zoom-y-out">
                <div className="pt-5 flex flex-wrap flex-col gap-3 justify-center items-center" data-aos="zoom-y-out">
                <a href="#" className="bg-green-700 text-white font-bold py-3 px-5 rounded">
                  Download Buildroot (Stable)
                </a>
                <a href="https://downloads.openvoiceos.org/images/raspbian/latest/ovos-raspbian.zip" className="bg-green-700 text-white font-bold py-3 px-5 rounded">
                  Download Raspbian (Stable)
                </a>
                <a href="#" className="bg-red-700 text-white font-bold py-3 px-5 rounded">
                  Download Buildroot (Testing)
                </a>
                <a href="https://downloads.openvoiceos.org/images/raspbian/testing/raspbian-ovos-testing-mk1_1688557555.zip" className="bg-red-700 text-white font-bold py-3 px-5 rounded">
                  Download Raspbian (Testing)
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDevices && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
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
          <div className="bg-white p-6 rounded-lg shadow-lg">
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