"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { ThemeSwitcher } from "./theme";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const pathname = usePathname();

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isExternal = href.startsWith("http");
    const isActive = pathname === href;

    const linkStyles = `font-medium ${
      isActive ? "font-extrabold text-black dark:text-white" : "text-gray-600"
    } hover:text-gray-900 dark:hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out`;

    return (
      <li>
        <Link href={href}>
          <p className={linkStyles}>{label}</p>
        </Link>
      </li>
    );
  };

  const navLinks = [
    { href: "/downloads", label: "Downloads" },
    { href: "/about", label: "About" },
    {
      href: "https://github.com/OpenVoiceOS/OpenVoiceOS/discussions",
      label: "Discussion",
    },
    {
      href: "https://openvoiceos.github.io/ovos-technical-manual",
      label: "Documentation",
    },
    { href: "/team", label: "Team" },
    { href: "https://blog.openvoiceos.org/", label: "Blogs" },
    { href: "/contribution", label: "Contribution" },
  ];

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? "bg-white dark:bg-stone-900 backdrop-blur-sm shadow-lg" : ""}`}
    >
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
              <li className="ml-3">
                <Link href="/">
                  <p className="btn-sm bg-black text-white dark:text-black dark:bg-white rounded-xl h-[40px] flex items-center">
                    <span>Home</span>
                  </p>
                </Link>
              </li>
              <li className="ml-3">
                <div className="flex items-center">
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
