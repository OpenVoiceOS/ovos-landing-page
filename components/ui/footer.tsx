import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBook,
  faCommentAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
              <a
                href="https://www.linkedin.com/company/openvoiceos/"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a
                href="https://huggingface.co/OpenVoiceOS"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center"
                aria-label="Hugging Face"
              >
                <svg className="w-4 h-4" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M0.96 7.67c0 0.735 0.112 1.44 0.32 2.1-0.025-0.002-0.046-0.004-0.07-0.004-0.281 0-0.534 0.107-0.714 0.301-0.23 0.25-0.332 0.557-0.288 0.864 0.023 0.132 0.084 0.29 0.143 0.399-0.155 0.124-0.268 0.298-0.324 0.506-0.043 0.164-0.088 0.503 0.144 0.854 0.014 0.022 0.015 0.058-0.042 0.07-0.139 0.262-0.147 0.558-0.025 0.834 0.186 0.418 0.648 0.746 1.542 1.098 0.558 0.22 1.066 0.361 1.07 0.362 0.736 0.19 1.402 0.285 1.98 0.285 0.945 0 1.65-0.257 2.102-0.764 1.026 0.177 1.86 0.093 2.395 0.004 0.452 0.505 1.155 0.76 2.098 0.76 0.577 0 1.243-0.096 1.98-0.286 0.005-0.001 0.514-0.143 1.071-0.362 0.895-0.352 1.356-0.68 1.542-1.098 0.122-0.276 0.114-0.572-0.025-0.834-0.042-0.07-0.048-0.098-0.043-0.07-0.231-0.35 0.186-0.69 0.144-0.854-0.055-0.208-0.169-0.382-0.323-0.506 0.073-0.121 0.122-0.253 0.143-0.399 0.045-0.307-0.058-0.614-0.288-0.864-0.18-0.194-0.433-0.301-0.714-0.301-0.014 0-0.025 0.001-0.039 0.001 0.211-0.665 0.323-1.37 0.323-2.104 0-3.872-3.157-7.01-7.053-7.01-3.895 0-7.052 3.138-7.052 7.01Zm7.052-6.322c3.515 0 6.365 2.83 6.365 6.322 0 0.818-0.149 1.591-0.18 1.495-0.183-0.218-0.446-0.338-0.739-0.338-0.235 0-0.476 0.077-0.717 0.23-0.16 0.101-0.337 0.281-0.52 0.507-0.169-0.233-0.405-0.389-0.676-0.431-0.048-0.009-0.11-0.012-0.156-0.012-0.618 0-0.988 0.533-1.129 1.012-0.07 0.162-0.405 0.899-0.908 1.399-0.779 0.773-0.964 1.569-0.56 2.426-0.563 0.069-1.056 0.062-1.577-0.004 0.394-0.81 0.242-1.626-0.562-2.422-0.503-0.5-0.838-1.237-0.908-1.399-0.14-0.479-0.511-1.012-1.129-1.012-0.052 0-0.105 0.004-0.156 0.012-0.271 0.042-0.507 0.198-0.676 0.431-0.182-0.226-0.36-0.406-0.52-0.507-0.242-0.153-0.483-0.23-0.717-0.23-0.285 0-0.54 0.114-0.721 0.32-0.048-0.262-0.086-0.533-0.173-1.465 0-3.492 2.85-6.322 6.365-6.322zM5.763 4.669c-0.323 0.003-0.633 0.178-0.796 0.482-0.236 0.442-0.067 0.992 0.377 1.227 0.234 0.124 0.326-0.351 0.557-0.433 0.207-0.073 0.561 0.266 0.672 0.057 0.236-0.442 0.068-0.992-0.375-1.227-0.195-0.1-0.369-0.11-0.435-0.106Zm4.56 0c-0.147-0.001-0.295 0.033-0.433 0.107-0.444 0.235-0.612 0.785-0.376 1.227 0.111 0.209 0.465-0.13 0.672-0.057 0.232 0.082 0.324 0.557 0.559 0.433 0.444-0.235 0.612-0.785 0.375-1.227-0.162-0.304-0.473-0.479-0.797-0.483Zm-6.504 0.945c-0.304 0-0.585 0.262-0.585 0.585 0 0.323 0.262 0.585 0.585 0.585 0.323 0 0.585-0.262 0.585-0.585-0 -0.323-0.262-0.585-0.585-0.585Zm8.429 0c-0.323 0-0.586 0.262-0.586 0.585 0 0.323 0.263 0.585 0.586 0.585 0.323 0 0.585-0.262 0.585-0.585 0-0.323-0.262-0.585-0.585-0.585zM5.862 7.639c-0.119-0.002-0.186 0.074-0.186 0.277 0 0.541 0.259 1.417 0.952 1.950 0.138-0.476 0.897-0.856 1.005-0.801 0.154 0.078 0.146 0.295 0.405 0.484 0.259-0.19 0.25-0.407 0.404-0.484 0.108-0.055 0.867 0.325 1.005 0.801 0.693-0.533 0.952-1.409 0.952-1.950 0-0.815-1.055 0.428-2.361 0.432-0.98-0.004-1.817-0.705-2.176-0.709Zm-3.177 1.985c0.387 0.244 1.131 1.517 1.404 2.012 0.091 0.166 0.248 0.236 0.388 0.236 0.28 0-0.498-0.276-0.062-0.627-0.71-0.528-0.461-1.389-0.123-1.444 0.022-0.003 0.045-0.003 0.045-0.003 0.308 0 0.444 0.527 0.444 0.527s0.397 0.996 1.081 1.672c0.628 0.625 0.708 1.136 0.331 1.777-0.011-0.003-0.011 0.016-0.099 0.143-0.124 0.178-0.289 0.313-0.479 0.41-0.338 0.151-0.761 0.18-1.189 0.18-0.692 0-1.401-0.122-1.798-0.224-0.02-0.005-2.434-0.638-2.128-1.215 0.051-0.097 0.135-0.136 0.242-0.136 0.432 0 1.215 0.637 1.552 0.637 0.076 0 0.131-0.058 0.152-0.136 0.15-0.537-2.186-0.701-1.99-1.442 0.035-0.131 0.129-0.184 0.261-0.184 0.57 0 1.847 0.995 2.114 0.995 0.021 0 0.035-0.006 0.043-0.018 0.134-0.215 0.073-0.392-0.872-0.96-0.945-0.569-1.621-0.887-1.244-1.294 0.044-0.047 0.105-0.068 0.18-0.068 0.575 0 1.93 1.227 1.93 1.227s0.366 0.379 0.588 0.379c0.051 0 0.094-0.021 0.124-0.07 0.157-0.263-1.457-1.482-1.548-1.981-0.062-0.34 0.043-0.512 0.237-0.512-0 0.005 0.114-0.019 0.33 0.117Zm10.817 0.395c-0.091 0.502-1.705 1.721-1.548 1.981 0.03 0.049 0.073 0.07 0.124 0.07 0.222 0 0.588-0.379 0.588-0.379s1.355-1.227 1.93-1.227c0.075 0 0.136 0.021 0.18 0.068 0.377 0.408-0.299 0.725-1.244 1.294-0.945 0.568-1.006 0.745-0.872 0.96 0.008 0.012 0.022 0.018 0.043 0.018 0.267 0 1.544-0.995 2.114-0.995 0.132 0 0.226 0.053 0.261 0.184 0.196 0.741-2.14 0.905-1.99 1.442 0.021 0.078 0.076 0.136 0.152 0.136 0.337 0 1.12-0.637 1.552-0.637 0.107 0 0.191 0.039 0.242 0.136 0.306 0.577-2.108 1.21-2.128 1.215-0.397 0.102-1.106 0.224-1.798 0.224-0.428 0-0.851-0.029-1.189-0.18-0.19-0.097-0.355-0.232-0.479-0.41-0.027-0.046-0.069-0.099-0.095-0.137-0.382-0.646-0.297-1.152 0.331-1.777 0.684-0.676 1.081-1.672 1.081-1.672s0.136-0.527 0.444-0.527c0 0 0.023 0 0.045 0.003 0.338 0.055 0.587 0.916-0.123 1.444 0.436 0.351-0.342 0.627-0.062 0.627 0.14 0 0.297-0.07 0.388-0.236 0.273-0.495 1.017-1.768 1.404-2.012 0.373-0.235 0.66-0.121 0.567 0.395z" />
                </svg>
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
