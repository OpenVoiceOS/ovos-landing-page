import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBook, faCommentAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ContactUs() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="pt-16 pb-20 md:pt-20 md:pb-20 text-center max-w-4xl" data-aos="zoom-y-out">
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-100">
          Have a question or need help?
        </h1>
        <p className="text-xl text-gray-800 mb-8 dark:text-gray-300">
          Feel free to reach out to us. Whether you have a question or want to contribute to the project, we would love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://github.com/openVoiceOS/" className="bg-black text-white font-bold py-2 px-4 rounded flex items-center dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </Link>
          <Link href="https://openvoiceos.github.io/community-docs/" className="bg-black text-white font-bold py-2 px-4 rounded flex items-center dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Documentation
          </Link>
          <Link href="https://github.com/OpenVoiceOS/OpenVoiceOS/discussions" className="bg-black text-white font-bold py-2 px-4 rounded flex items-center dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
            Discussion
          </Link>
          <Link href="https://matrix.to/#/!XFpdtmgyCoPDxOMPpH:matrix.org?via=matrix.org" className="bg-black text-white font-bold py-2 px-4 rounded flex items-center dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faCommentAlt} className="mr-2" />
            Matrix
          </Link>
          <Link href="mailto:dev@openvoiceos.org" className="bg-black text-white font-bold py-2 px-4 rounded flex items-center dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700">
            <FontAwesomeIcon icon={faAt} className="mr-2" />
            Email
          </Link>
        </div>
      </div>
    </section>
  )
}