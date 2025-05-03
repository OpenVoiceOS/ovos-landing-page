"use client";
import Link from "next/link";
import Tutorial from "./tutorial";

export default function Translation() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Community Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-8 text-center">
            <h2
              className="text-5xl font-extrabold leading-tight tracking-tight mb-4 mt-8 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300"
              data-aos="zoom-y-out"
            >
              How can you help?
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              The easiest way to help us is to translate content using
              GitLocalize - a powerful tool designed for translating open-source
              projects into multiple languages. Watch the tutorial below to get
              started.
            </p>
          </div>

          {/* Video Section */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <iframe
              src="https://www.youtube.com/embed/2udvdIW9W2s"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold transition-transform hover:scale-105 hover:shadow-lg"
              href="/translation/tutorial"
            >
              <span>Text Tutorial</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-700 text-white font-semibold transition-transform hover:scale-105 hover:shadow-lg"
              href="https://gitlocalize.com/users/OpenVoiceOS"
            >
              <span>Translate on GitLocalize</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 17l6-6m0 0l6-6M9 11l-6 6"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Developers Section */}
        <div className="pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-8 text-center">
            <h3
              className="text-4xl font-bold leading-tight tracking-tight mb-4 text-gray-900 dark:text-gray-100"
              data-aos="zoom-y-out"
            >
              For Developers
            </h3>
            <p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              If you're a developer looking to contribute to the project, you
              might need to work directly with the code when GitLocalize isn't
              sufficient. Check out our comprehensive developer's translation
              guide for detailed instructions.
            </p>
            <Link
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-700 text-white font-semibold transition-transform hover:scale-105 hover:shadow-lg mt-4"
              href="https://github.com/JarbasAl/mycroft-catalan.conf"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span>Developer's Guide</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
