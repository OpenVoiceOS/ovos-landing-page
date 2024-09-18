import Link from 'next/link'
import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-stone-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="my-6 text-gray-700 dark:text-gray-200 flex items-center justify-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-green-200 rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0 mr-2">
            <span className="flex w-3 h-3 bg-green-600 rounded-full"></span>
          </div>
          Having issue with services? Check status
          <Link href="https://openvoiceos.github.io/status/" className="text-blue-500 hover:underline ml-1">here</Link>
        </div>
        <p className="my-6 text-gray-500 dark:text-gray-400">Mycroft® is a registered trademark of Mycroft AI, Inc. Raspberry Pi® is a trademark of the Raspberry Pi Foundation. All other product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement. Any unauthorized use is strictly prohibited.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li><Link href="/" className="mr-4 hover:underline md:mr-6">Home</Link></li>
          <li><Link href="/downloads" className="mr-4 hover:underline md:mr-6">Downloads</Link></li>
          <li><Link href="/about" className="mr-4 hover:underline md:mr-6">About</Link></li>
          <li><Link href="https://openvoiceos.github.io/ovos-technical-manual" className="mr-4 hover:underline md:mr-6">Documentation</Link></li>
          <li><Link href="/team" className="mr-4 hover:underline md:mr-6">Teams</Link></li>
          <li><Link href="#" className="mr-4 hover:underline md:mr-6">Blog</Link></li>
          <li><Link href="/translation" className="mr-4 hover:underline md:mr-6">Translation</Link></li>
          <li><Link href="/translation" className="mr-4 hover:underline md:mr-6">Friends</Link></li>
          <li><Link href="/translation" className="mr-4 hover:underline md:mr-6">Donate</Link></li>
          <li><Link href="/translation" className="mr-4 hover:underline md:mr-6">Contribute</Link></li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Open Voice OS</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}