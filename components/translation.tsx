'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Translation() {
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
    <section className="relative mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-16">
          <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-8 text-center">
            <h3 className="text-4xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-200" data-aos="zoom-y-out">How can you help?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-100 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              The easiest way to help us is to translate the content using GitLocalize. GitLocalize is a tool to help you translate your open-source project into multiple languages. Watch the video below to learn more about how to use GitLocalize.
            </p>
          </div>
          <div className="relative">
            <iframe src="https://www.youtube.com/embed/2udvdIW9W2s" className="mx-auto" height={450} width={720} />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800 hover:bg-gray-900" href="https://ovos-translation-landing.vercel.app/tutorial.html">
            Text Tutorial
          </Link>
          <Link className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800 hover:bg-gray-900" href="https://gitlocalize.com/users/OpenVoiceOS">
            Translate on GitLocalize
          </Link>
        </div>
        <div className="pt-12 md:pt-16">
          <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-8 text-center">
            <h3 className="text-3xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-200" data-aos="zoom-y-out">Developers</h3>
            <p className="text-xl text-gray-600 dark:text-gray-100 mb-18" data-aos="zoom-y-out" data-aos-delay="150">
            If you're a developer looking to contribute to the project, Gitlocalize might not always be sufficient. In such cases, you may need to work directly with the code. For comprehensive instructions on how to contribute, please refer to our developer's translation guide. 
            </p>
          </div>
          <div className="flex justify-center">
            <Link className="bg-black text-white font-bold py-2 px-4 rounded m-5 dark:bg-gray-800 hover:bg-gray-900" href="https://github.com/JarbasAl/mycroft-catalan.conf">
              Developers Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}