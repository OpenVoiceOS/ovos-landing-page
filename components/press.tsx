"use client";

import React, { useState, useEffect } from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const PageLoader = () => {
  return (
		<div className="fixed inset-0 bg-white dark:bg-stone-900 flex items-center justify-center h-screen w-screen z-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary dark:text-white" />
        <div className="text-xl font-semibold text-primary dark:text-white">Loading...</div>
      </div>
		</div>
  );
};

export default function Press() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="relative">
      <section className="relative mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="flex items-center justify-center h-64">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
              <AuroraText>OpenVoiceOS Foundation</AuroraText> Goes Live
            </h1>
          </div>
          <TextAnimate animation="blurInUp" by="word" once className='text-xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 pb-5 pt-10 md:pt-0'>
            (Re)Enabling Open source Privacy and customization in Voice Assistants & Technology
          </TextAnimate>
          <BlurFade delay={1.2} inView>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              We are very pleased to finally announce its official registration and launch of the OVOS Foundation, a non-profit organization dedicated to advancing open-source voice assistant technology. This milestone comes after overcoming numerous challenges posed by the stricter regulatory landscape introduced within the Netherlands for foundations after the worldwide Corona era. The newly established Foundation is committed to advancing the development and deployment of open-source voice operating systems while ensuring privacy, security, and user-centric innovation.
            </p>

            <MagicCard className="p-6 mb-8 shadow-sm" >
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                In a world where proprietary voice assistants dominate the market, we aim to offer a compelling alternative that prioritizes user privacy, transparency, and community collaboration. Our mission is to empower individuals and organizations to create, innovate, and use voice assistant technology without compromising their privacy or control over their data.
              </p>
            </MagicCard>
            
            <MagicCard className="p-6 mb-8 shadow-sm" >
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Why OpenVoiceOS?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Proprietary voice assistants from major tech companies often come with a range of privacy concerns. These include extensive data collection, behavioral profiling, and limited user control over personal information. The OpenVoiceOS project addresses these issues by providing an open-source platform where all aspects of the voice assistant can be audited, customized, and improved by the community. We already collaborate with a diverse range of contributors to create an accessible and inclusive platform that supports a wide range of languages and abilities. By transparency and ethical practices, we create and foster a culture of privacy and user control to build trust and confidence in the tech industry which enables individuals to benefit from the convenience and innovation of voice technology.
              </p>
            </MagicCard>

            <div className="space-y-6 mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Key Benefits of OpenVoiceOS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Privacy-Focused",
                    description: "User data is processed locally whenever possible, minimizing the need to send information to the cloud."
                  },
                  {
                    title: "Transparency",
                    description: "Full access to the source code ensures that users can understand exactly how their data is being handled."
                  },
                  {
                    title: "Customization",
                    description: "Users and developers have the freedom to modify the voice assistant to meet their specific needs."
                  },
                  {
                    title: "Community-Driven",
                    description: "Development is guided by a global community of contributors, fostering rapid innovation and diverse solutions."
                  }
                ].map((benefit, index) => (
                  <MagicCard key={index} className="p-4 rounded-lg shadow-sm" >
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">{benefit.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </MagicCard>
                ))}
              </div>
            </div>

            <MagicCard className="p-6 mb-8 shadow-sm" >
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Protecting the Future of OpenVoiceOS</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The OVOS Foundation was established not only to support and advance our platform but also to safeguard it from the vulnerabilities that led to the unfortunate fate of the Mycroft project. Despite the groundbreaking work done by Mycroft A.I., the company faced bankruptcy, jeopardizing the continuity and accessibility of its open-source voice assistant technology. To ensure that OpenVoiceOS does not encounter a similar fate, the Foundation provides a stable and sustainable structure for the project's long-term success. By operating as a non-profit, we can focus on our mission without the pressures that often accompany for-profit enterprises.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  {
                    title: "Secure Funding",
                    description: "Through donations, grants, and sponsorships, we can ensure a steady flow of resources to maintain and grow the project."
                  },
                  {
                    title: "Foster Community Ownership",
                    description: "By encouraging widespread community involvement, we distribute the responsibility of the project, making it resilient to organizational changes."
                  },
                  {
                    title: "Promote Open Governance",
                    description: "Transparent decision-making processes help align the project with the values and needs of its users and contributors."
                  },
                  {
                    title: "Partnerships",
                    description: "Building relationships with other organizations and stakeholders to advance the adoption of OpenVoiceOS."
                  }
                ].map((item, index) => (
                  <MagicCard key={index} className="p-4 rounded-lg" >
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </MagicCard>
                ))}
              </div>
            </MagicCard>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              We invite everyone—developers, users, privacy advocates, and supporters of open-source technology—to join us in this exciting journey. Whether you contribute code, share ideas, or provide financial support, your involvement is crucial to the success of OpenVoiceOS. We welcome and encourage other companies and organisations to build on top of our software, as long as they share our commitment to privacy and user control.
            </p>

            <MagicCard className="p-6 mb-8 shadow-sm" >
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Looking Ahead</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The establishment of the OVOS Foundation is just the beginning. We are excited about the future and the possibilities that lie ahead. Together, we can build a voice assistant platform that respects user privacy, fosters innovation, and empowers everyone to take control of their technology. A little while back we already announced the pre-release of 0.0.8-beta which will soon get out of beta and into a stable release.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This will be the very first stable release under the OpenVoiceOS project umbrella which still maintains Mycroft backwards compatibility but is also our first release that fully integrates all OVOS plugins and skills across most if not all components.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                For the next version we have some very nice features being worked out and mostly already being worked on, so stay tuned for updates and announcements as we embark on this journey. Thank you for your support, and welcome to the OVOS Foundation!
              </p>
            </MagicCard>

            <Card className="mt-12 bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-grow">
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      The OVOS Foundation is registered as a legal entity in the Netherlands. The articles of association are available in{" "}
                      <span className="font-semibold text-gray-600 dark:text-gray-400 hover:underline cursor-pointer" onClick={() => window.open('/press-dutch.pdf', '_blank')}>Dutch (official)</span> and in{" "}
                      <span className="font-semibold text-gray-600 dark:text-gray-400 hover:underline cursor-pointer" onClick={() => window.open('/press-en.pdf', '_blank')}>English (unofficial translation)</span>.
                    </p>
                    <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      The Foundation was declared on{" "}
                      <span className="font-medium">August 1st, 2024</span> by notary{" "}
                      <span className="font-medium">MR. J .W. WEGGEMANS</span> Westerwolde (Wedde, The Netherlands) and is registered at the Dutch chamber of commerce under{" "}
                      <span className="font-mono bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">n°94609292</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </article>
      </section>
    </div>
  );
}