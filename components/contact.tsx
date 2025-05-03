import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBook,
  faCommentAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ContactUs() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-stone-100 dark:from-stone-900 dark:to-stone-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 dark:text-stone-100">
            Have a question or need help?
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300">
            Feel free to reach out to us. Whether you have a question or want to
            contribute to the project, we would love to hear from you.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              {
                href: "https://github.com/openVoiceOS/",
                icon: faGithub,
                text: "GitHub",
              },
              {
                href: "https://openvoiceos.github.io/ovos-technical-manual/",
                icon: faBook,
                text: "Documentation",
              },
              {
                href: "https://github.com/OpenVoiceOS/OpenVoiceOS/discussions",
                icon: faUserFriends,
                text: "Discussion",
              },
              {
                href: "https://matrix.to/#/!XFpdtmgyCoPDxOMPpH:matrix.org?via=matrix.org",
                icon: faCommentAlt,
                text: "Matrix",
              },
              { href: "mailto:dev@openvoiceos.org", icon: faAt, text: "Email" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-colors duration-200 shadow-md"
              >
                <FontAwesomeIcon icon={link.icon} className="mr-3 h-5 w-5" />
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-black dark:text-white">
          <div
            className="bg-white dark:bg-stone-800 rounded-xl p-8 shadow-lg border border-stone-100 dark:border-stone-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-stone-800 dark:text-stone-200 text-lg mb-4">
              <span className="font-bold">
                Are you a business or organization
              </span>{" "}
              looking to integrate Open Voice OS into your products?
              <Link
                href="/contact-form"
                className="text-blue-600 dark:text-blue-400 hover:underline ml-2 font-medium"
              >
                Fill out our contact form
              </Link>{" "}
              to get in touch with us.
            </p>

            <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-700">
              <p className="text-lg font-medium">
                Want to be a part of Open Voice OS? Check our
                <Link
                  href="/contribution"
                  className="text-blue-600 dark:text-blue-400 hover:underline ml-2 font-bold"
                >
                  Contribution Page
                </Link>{" "}
                to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
