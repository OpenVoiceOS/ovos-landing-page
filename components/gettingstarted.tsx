"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    title: "Choose your device",
    description:
      "Raspberry Pi, Mycroft® device, laptop or desktop: tell the installer what you're running on.",
  },
  {
    title: "Pick your voice options",
    description:
      "Select the wake word, speech engines and features that fit your setup.",
  },
  {
    title: "Install and follow along",
    description:
      "Prepare your system with clear steps and watch the installation progress live.",
  },
];

export default function Gettingstarted() {
  const [copied, setCopied] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'sh -c "curl -s https://raw.githubusercontent.com/OpenVoiceOS/ovos-installer/main/installer.sh -o installer.sh && chmod +x installer.sh && sudo ./installer.sh && rm installer.sh"',
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-12">
            <h2 className="h2 mb-4 text-gray-800 dark:text-white">
              Getting started
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Installing OVOS couldn't be simpler! Our interactive installer
              guides you through every step, right from your browser.
            </p>
          </div>
          {/* Steps */}
          <ol
            className="max-w-sm mx-auto grid gap-8 md:max-w-none md:grid-cols-3 text-center"
            data-aos="zoom-y-out"
          >
            {steps.map((step, index) => (
              <li key={index}>
                <div className="flex justify-center items-center w-10 h-10 mx-auto mb-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          {/* Actions */}
          <div className="text-center pt-10 md:pt-12" data-aos="zoom-y-out">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://start.openvoiceos.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn font-bold text-white bg-black dark:bg-white dark:text-black rounded-3xl"
              >
                Launch the Interactive Installer
              </a>
              <button
                onClick={() => setShowTerminal(!showTerminal)}
                aria-expanded={showTerminal}
                className="btn font-bold text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:border-gray-500 rounded-3xl"
              >
                {showTerminal ? "Hide terminal command" : "Install from terminal"}
              </button>
            </div>
            {showTerminal && (
              <div className="mt-6">
                <code className="text-sm sm:text-base inline-flex flex-col sm:flex-row text-left items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-black dark:bg-black text-white rounded-lg p-4">
                  <span className="flex items-center gap-2">
                    <span className="flex-1 break-words">
                      <span>sh -c </span>
                      <span className="text-gray-400 dark:text-gray-500 break-all">
                        "curl -s
                        https://raw.githubusercontent.com/OpenVoiceOS/ovos-installer/main/installer.sh
                        -o installer.sh && chmod +x installer.sh && sudo
                        ./installer.sh && rm installer.sh"
                      </span>
                    </span>
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-white hover:text-white ml-auto sm:ml-8"
                  >
                    <FontAwesomeIcon icon={faClone} />
                    <span className="sr-only">Copy to clipboard</span>
                  </button>
                  {copied && (
                    <span className="text-green-500 mt-2 sm:mt-0">^_^</span>
                  )}
                </code>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
