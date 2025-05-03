"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="relative mt-32">
      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
              About Open Voice OS
            </h2>

            <div className="space-y-8" data-aos="fade-up" data-aos-delay="450">
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Meet OpenVoiceOS, a newcomer in the smart speaker scene,
                offering a different choice from the usual options like Amazon
                Echo and Google Home. With OpenVoiceOS, you have control over
                your data and can customize your smart speaker experience. It's
                designed to respond accurately to your commands, whether you
                speak or touch the screen. OpenVoiceOS is open-source, meaning
                anyone can help improve it, and it can run offline for added
                privacy. If you're looking for a smart speaker that puts you in
                control, OpenVoiceOS might be the one for you.
              </p>

              <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
                <div className="p-6 rounded-2xl shadow-lg backdrop-blur-sm bg-gray-100 dark:bg-gray-800">
                  <p className="text-lg text-gray-900 dark:text-gray-200">
                    Open Voice OS is a part of a larger ecosystem of FOSS voice
                    technologies.
                    <Link
                      href="/friends"
                      className="inline-flex items-center ml-2 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Check Friends Projects
                      <svg
                        className="w-5 h-5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
