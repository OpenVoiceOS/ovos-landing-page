"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.png";
import React, { useRef } from "react";
import Link from "next/link";
import Release from "./release";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";

export default function Hero() {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <section className="relative md:h-screen flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-32 pb-5 md:pt-40 md:pb-5">
          <div className="pb-5 md:pb-5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h1
                    className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-gray-200"
                    data-aos="zoom-y-out"
                  >
                    Open Voice OS
                  </h1>
                  <p
                    className="text-xl text-gray-600 dark:text-gray-100 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    OpenVoiceOS is a community-driven, open-source voice AI
                    platform for creating custom voice-controlled ​interfaces
                    across devices with NLP, a customizable UI, and a focus on
                    privacy and security.
                  </p>
                  <Link
                    className="btn font-bold text-white bg-black dark:bg-gray-800 dark:text-gray-200 rounded-3xl mx-auto"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                    href="/about"
                  >
                    About Us
                  </Link>
                </div>
                <div
                  className="flex justify-center items-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  <Image src={Logo} alt="Logo" width={350} height={350} />
                </div>
              </div>
              <Release />
              <Confetti
                ref={confettiRef}
                className="absolute left-0 top-0 -z-1 w-full h-full"
                onLoad={() => {
                  confettiRef.current?.fire({});
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </section>
  );
}
