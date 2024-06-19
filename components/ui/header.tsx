'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import { ThemeSwitcher } from './theme'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)
  const pathname = usePathname()

  // Detect whether the user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white dark:bg-stone-900 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/downloads">
                <p className={`font-medium ${pathname === '/downloads' ? 'font-extrabold text-black dark:text-white' : 'text-gray-600'} hover:text-gray-900 dark:hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Downloads</p>
                </Link>
                </li>
              <li>
                <Link href="/about">
                <p className={`font-medium ${pathname === '/about' ? 'font-extrabold text-black dark:text-white' : 'text-gray-600'} hover:text-gray-900 dark:hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>About</p>
                </Link>
                </li>
              <li>
                <Link href="https://github.com/OpenVoiceOS/OpenVoiceOS/discussions">
                  <p className={`font-medium ${pathname === '/discussion' ? 'font-extrabold text-black dark:text-white' : 'text-gray-600'} hover:text-gray-900 dark:hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Discussion</p>
                </Link>
              </li>
              <li>
                <Link href="https://openvoiceos.github.io/ovos-technical-manual">
                  <p className={`font-medium ${pathname === '/documentation' ? 'font-extrabold text-black dark:text-white' : 'text-gray-600'} dark:hover:text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Documentation</p>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <p className={`font-medium ${pathname === '/team' ? 'font-extrabold text-black dark:text-white' : 'text-gray-600'} hover:text-gray-900 dark:hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Team</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className={`font-medium ${pathname === '/blogs' ? 'font-extrabold text-black dark:text-white' : 'text-gray-600'} hover:text-gray-900 dark:hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`}>Blogs</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className={`btn-sm bg-black text-white dark:text-black dark:bg-white mx-3 rounded-xl`}>
                    <span>Home</span>
                  </p>
                </Link>
              </li>
              <li> <ThemeSwitcher /> </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}