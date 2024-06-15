'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function translation() {
  const handleTutorial = () => {
    window.location.href = 'https://ovos-translation-landing.vercel.app/tutorial.html';
  }

  const handleLocalize = () => {
    window.location.href = 'https://gitlocalize.com/users/OpenVoiceOS';
  }

  const [isGithubCollapsed, setIsGithubCollapsed] = useState(false);
  const [isMailCollapsed, setIsMailCollapsed] = useState(false);
  const [isMatrixCollapsed, setIsMatrixCollapsed] = useState(false);

  const toggleGithubCollapse = () => {
    setIsGithubCollapsed(!isGithubCollapsed);
  };

  const toggleMailCollapse = () => {
    setIsMailCollapsed(!isMailCollapsed);
  };

  const toggleMatrixCollapse = () => {
    setIsMatrixCollapsed(!isMatrixCollapsed);
  };

  return (
    <section className="relative bg-gray-100 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-16">
          <div className="max-w-6xl mx-auto p-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col md:flex-row justify-center items-center md:items-start gap-12" data-aos="zoom-y-out">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faLanguage} className="text-gray-600 dark:text-gray-100" size="8x" />
            </div>
            <div className="flex flex-col justify-center ml-8">
              <h1 className="text-4xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-150">Open Voice OS Needs Your Help</h1>
              <p className="text-lg text-gray-600 dark:text-gray-100 mb-8">
                OpenVoiceOS is a community-driven platform and plans to include many local languages around the world. Thus, we require people who can help us in translating the content to their local language.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 md:pt-16">
          <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-8">
            <h3 className="text-4xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-200" data-aos="zoom-y-out">How can you help?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-100 mb-8 text-center" data-aos="zoom-y-out" data-aos-delay="150">
              Easiest way to help us is to translate the content using GitLocalize. GitLocalize is a tool to help you translate your open-source project into multiple languages. Watch the video below to know more about how to use GitLocalize.
            </p>
          </div>
          <div className="relative" style={{ paddingTop: '50%' }}>
            <iframe
              src="https://www.youtube.com/embed/2udvdIW9W2s"
              title="Open Voice OS YouTube video"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="mx-auto"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80%', borderRadius: '8px' }}
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center">
          <button className='bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800' onClick={handleTutorial}>
            Text Tutorial
          </button>
          <br />
          <button className='bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800' onClick={handleLocalize}>
            Translate on GitLocalize
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-5 md:pt-40 md:pb-5">
            <div className="pb-5 md:pb-5">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-200" data-aos="zoom-y-out">Can't find your language?</h2>
                    <p className="text-xl text-gray-800 dark:text-gray-100 mb-8" data-aos="zoom-y-out" data-aos-delay="150">There are multiple ways to request a new language. You can create an issue on our GitHub repository or you can contact us directly. Click on the sections to know more.</p>
                  </div>
                  <div>
                    <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded mb-2" onClick={toggleGithubCollapse}>
                      GitHub Issue
                    </button>
                    <div className={`transition-max-height duration-800 ease-in-out ${isGithubCollapsed ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                      <div className="bg-white shadow-lg rounded-lg p-4">
                        You can create an issue on our core and skills repository to request a new language. <br />
                        <a href='https://github.com/OpenVoiceOS' style={{ color: 'blue'}}>OpenVoiceOS GitHub Repository</a>
                      </div>
                    </div>

                    <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded mb-2" onClick={toggleMailCollapse}>
                      Mail Us
                    </button>
                    <div className={`transition-max-height duration-800 ease-in-out ${isMailCollapsed ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                      <div className="bg-white shadow-lg rounded-lg p-4">
                        You can mail us directly to request a new language. <br />
                        <a href='mailto:support@openvoiceos.org' style={{ color: 'blue'}}>support@openvoiceos.org</a>
                      </div>
                    </div>

                    <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded mb-2" onClick={toggleMatrixCollapse}>
                      Talk to Us on Matrix
                    </button>
                    <div className={`transition-max-height duration-800 ease-in-out ${isMatrixCollapsed ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                      <div className="bg-white shadow-lg rounded-lg p-4">
                        <p>We have a dedicated room on matrix to discuss the languages. You can join using the link below.</p>
                        <a href='https://matrix.to/#/#openvoiceos:matrix.org' style={{ color: 'blue' }}>
                          OpenVoiceOS Matrix Room
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 md:pt-16">
          <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-8">
            <h3 className="text-3xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-200" data-aos="zoom-y-out">Developers</h3>
            <p className="text-xl text-gray-600 dark:text-gray-100 mb-18 text-center" data-aos="zoom-y-out" data-aos-delay="150">
              Easiest way to help us is to translate the content is using GitLocalize. GitLocalize is a tool to help you translate your open-source project into multiple languages. Watch the video below to know more about how to use GitLocalize.
            </p>
          </div>
          <button className='bg-black text-white font-bold py-2 px-4 max-w-6xl mx-auto flex-col flex justify-center rounded m-5 dark:bg-gray-800' onClick={handleLocalize}>
            Developers Guide
          </button>
        </div>
      </div>
    </section>
  );
}

