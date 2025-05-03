import Image from "next/image";
import core1 from "@/public/images/core1.jpeg";
import core2 from "@/public/images/core2.jpeg";
import core3 from "@/public/images/core3.jpeg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentAlt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

export default function Teams() {
  return (
    <section className="relative" data-aos="zoom-y-out" data-aos-delay="150">
      <div className="py-20">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-3xl text-black dark:text-white font-extrabold md:text-4xl">
              Say Hello to Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl lg:w-8/12 lg:mx-auto">
              Open Voice OS is maintained by a small team of developers and lots
              of contributors.
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
              <Image
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={core2}
                alt="core"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl font-bold dark:text-white">
                  Daniel McKnight
                </h4>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  <FontAwesomeIcon icon={faLocationArrow} /> United States 🇺🇸
                </span>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/daniel-mcknight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-600 dark:text-blue-400 text-xl"
                  />
                </a>
                <a
                  href="https://matrix.to/#/@daniel:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faCommentAlt}
                    className="text-green-600 dark:text-green-400 text-xl"
                  />
                </a>
                <a
                  href="https://github.com/NeonDaniel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-xl dark:text-gray-300"
                  />
                </a>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Image
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={core1}
                alt="core"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl font-bold dark:text-white">
                  Casimiro Ferreira
                </h4>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  <FontAwesomeIcon icon={faLocationArrow} /> Portugal 🇵🇹
                </span>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/casimiro-ferreira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-600 dark:text-blue-400 text-xl"
                  />
                </a>
                <a
                  href="https://matrix.to/#/@casimiro:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faCommentAlt}
                    className="text-green-600 dark:text-green-400 text-xl"
                  />
                </a>
                <a
                  href="https://github.com/JarbasAl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-xl dark:text-gray-300"
                  />
                </a>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Image
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={core3}
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl font-bold dark:text-white">
                  Peter Steenbergen
                </h4>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  <FontAwesomeIcon icon={faLocationArrow} /> Netherlands 🇳🇱
                </span>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/peter-steenbergen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-600 dark:text-blue-400 text-xl"
                  />
                </a>
                <a
                  href="https://matrix.to/#/@peter:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faCommentAlt}
                    className="text-green-600 dark:text-green-400 text-xl"
                  />
                </a>
                <a
                  href="https://github.com/j1nx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-xl dark:text-gray-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
