'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import pythonLogo from '@/public/images/python.png'
import dockerLogo from '@/public/images/docker.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

export default function Gettingstarted() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const [copied, setCopied] = useState(false);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }
  useEffect(() => {
    heightFix()
  }, []) 

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'sh -c "curl -s https://raw.githubusercontent.com/OpenVoiceOS/ovos-installer/main/installer.sh -o installer.sh && chmod +x installer.sh && sudo ./installer.sh && rm installer.sh"'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-gray-900 dark:text-white">Getting started </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300">Installing OVOS couldn't be simpler! Just give our installer a try, and you're all set. We offer two main ways to install OVOS - Docker and Python. </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white dark:bg-gray-800 shadow-md border-gray-200 dark:border-gray-700 hover:shadow-lg' : 'bg-gray-200 dark:bg-gray-700 border-transparent'}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-900 dark:text-white">Python Virtual Environment</div>
                    <div className="text-gray-600 dark:text-gray-300"> If you are a developer, and would like to fiddle with the code, this is the way to go.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white dark:bg-gray-800 shadow-md border-gray-200 dark:border-gray-700 hover:shadow-lg' : 'bg-gray-200 dark:bg-gray-700 border-transparent'}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-900 dark:text-white">Docker</div>
                    <div className="text-gray-600 dark:text-gray-300">If you want a super stable and easy way to run OVOS, Docker is the way to go.</div>
                  </div>
                </a>
              </div>
            </div>            
            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded-full" src={pythonLogo} width={400} height={400} alt="Python Logo" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded-full" src={dockerLogo} width={400} height={400} alt="Docker Logo" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <p className="text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
              To get started, simply copy and paste the following command in your terminal:
            </p>
            <code className="text-sm sm:text-base inline-flex flex-col sm:flex-row text-left items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-black dark:bg-black text-white rounded-lg p-4">
              <span className="flex items-center gap-2">
                <span className="shrink-0 text-gray-500">$</span>
                <span className="flex-1 break-words">
                  <span>sh -c </span>
                  <span className="text-gray-400 dark:text-gray-500 break-all">
                    "curl -s https://raw.githubusercontent.com/OpenVoiceOS/ovos-installer/main/installer.sh -o installer.sh && chmod +x installer.sh && sudo ./installer.sh && rm installer.sh"
                  </span>
                </span>
              </span>
              <button onClick={handleCopy} className="text-gray-500 hover:text-white ml-auto sm:ml-0">
                <FontAwesomeIcon icon={faClipboard} />
                <span className="sr-only">Copy to clipboard</span>
              </button>
              {copied && <span className="text-green-500 mt-2 sm:mt-0">Copied!</span>}
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}