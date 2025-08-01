import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBook,
  faCommentAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-stone-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-left mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">
              Navigation
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/downloads"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/friends"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Friends
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="https://openvoiceos.github.io/ovos-technical-manual"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/translation"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Translation
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.openvoiceos.org/"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/OpenVoiceOS"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">
              Get Involved
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/contribution"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-form"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/OpenVoiceOS"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a
                href="https://matrix.to/#/#openvoiceos:matrix.org"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="Matrix"
              >
                <FontAwesomeIcon icon={faCommentAlt} className="w-6 h-6" />
              </a>
              <a
                href="https://fosstodon.org/@ovos"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="Mastodon"
              >
                <FontAwesomeIcon icon={faUserFriends} className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@openvoiceos.org"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faAt} className="w-6 h-6" />
              </a>
              <a
                href="https://openvoiceos.github.io/ovos-technical-manual"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="Documentation"
              >
                <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-6">
              <Link href="/" className="block mb-4">
                <img
                  src="/images/logo.svg"
                  alt="Open Voice OS Logo"
                  className="h-10 dark:hidden"
                />
                <img
                  src="/images/logo.png"
                  alt="Open Voice OS Logo"
                  className="h-10 hidden dark:block"
                />
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building the future of voice assistants with open source
                technology.
              </p>
            </div>
          </div>
        </div>

        {/* Trademark notice and copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Mycroft® is a registered trademark of Mycroft AI, Inc. Raspberry
            Pi® is a trademark of the Raspberry Pi Foundation. All other
            product names, logos, and brands are property of their respective
            owners. Use of these names, logos, and brands does not imply
            endorsement. Any unauthorized use is strictly prohibited.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear}{" "}
              <Link href="/" className="hover:underline">
                Open Voice OS
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex items-center space-x-4">
              <Link
                href="https://openvoiceos.github.io/status/"
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                <div className="flex items-center">
                  <div className="relative inline-flex">
                    <div className="rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2"></div>
                    <div className="absolute animate-ping rounded-full bg-green-400 h-[8px] w-[8px] mr-2"></div>
                  </div>
                  <span>Check status of running services</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
