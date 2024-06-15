import Link from 'next/link'
import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-stone-900">
  <div className="mx-auto max-w-screen-xl text-center">
      <p className="my-6 text-gray-500 dark:text-gray-400">Mycroft® is a registered trademark of Mycroft AI, Inc. Raspberry Pi® is a trademark of the Raspberry Pi Foundation. All other product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement. Any unauthorized use is strictly prohibited.</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li><Link href="/" className="mr-4 hover:underline md:mr-6 ">Home</Link></li>
          <li><Link href="/downloads" className="mr-4 hover:underline md:mr-6 ">Downloads</Link></li>
          <li><Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link></li>
          <li><Link href="https://openvoiceos.github.io/ovos-technical-manual" className="mr-4 hover:underline md:mr-6 ">Documentation</Link></li>
          <li><Link href="/team" className="mr-4 hover:underline md:mr-6 ">Teams</Link></li>
          <li><Link href="#" className="mr-4 hover:underline md:mr-6 ">Blog</Link></li>
          <li><Link href="/translation" className="mr-4 hover:underline md:mr-6 ">Translation</Link></li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Open Voice OS</Link>. All Rights Reserved.</span>
  </div>
</footer>
  )
}
