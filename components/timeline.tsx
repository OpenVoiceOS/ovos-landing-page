import { link } from "fs";
import React from "react";

function TimelineEvent({
  title,
  date,
  description,
  link,
}: {
  title: string;
  date: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black dark:before:bg-white">
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <time className="text-xs tracking-wide uppercase dark:text-white">
        {date}
      </time>
      {link ? (
        <a href={link} className="mt-3 text-blue-500 underline">
          {description}
        </a>
      ) : (
        <p className="mt-3 dark:text-gray-200">{description}</p>
      )}
    </div>
  );
}

export default function Timeline() {
  const events = [
    {
      title: "MycroftAI Kickstarter Launch",
      date: "August 2015",
      description:
        "MycroftAI company launches Kickstarter for their Mark-1 based on a Raspberry Pi3.",
      link: "https://www.kickstarter.com/projects/aiforeveryone/mycroft-an-open-source-artificial-intelligence-for",
    },
    {
      title: "MycroftAI Mark 1 Release",
      date: "September 2017",
      description:
        "MycroftAI Mark 1 is released and Kickstarter campaign fulfilled.",
    },
    {
      title: "MycroftAI Mark 2 Kickstarter Launch",
      date: "January 2018",
      description:
        "MycroftAI launches second Kickstarter campaign for their Mark 2 device.",
      link: "https://www.kickstarter.com/projects/aiforeveryone/mycroft-mark-ii-the-open-voice-assistant",
    },
    {
      title: "First GUI",
      date: "September 2018",
      description:
        "The first GUI saw the day of light in a cooperation between MycroftAI and BlueSystems based on KDE framework.",
    },
    {
      title: "MycroftOS Creation",
      date: "October 2018",
      description:
        'Peter Steenbergen (j1nx) creates "MycroftOS", the first version of what will eventually become the OpenVoiceOS framework.',
      link: "https://community.openconversational.ai/t/openvoiceos-a-bare-minimal-production-type-of-os-based-on-buildroot/4708",
    },
    {
      title: "Neglect of Community Contributions",
      date: "Early 2020",
      description:
        "MycroftAI as a company starts to neglect community contributions.",
    },
    {
      title: "Renaming to OpenVoiceOS - Mycroft Edition",
      date: "October 2020",
      description:
        "MycroftOS was renamed to OpenVoiceOS - Mycroft Edition due to trademark issues enforced by MycroftAI.",
    },
    {
      title: "Formation of OpenVoiceOS Team",
      date: "October 2020",
      description:
        "Casimiro Ferreira (Jarbas), Aditya Mehra (AIX), and Peter Steenbergen (j1nx) join forces as Python developer, GUI/QT KDE developer, and Linux OS developer respectively.",
    },
    {
      title:
        'NeonCore recreated on top of OVOS and relicensed under a FOSS license"',
      date: "October 2021",
      description:
        "NeonCore recreated on top of OVOS and relicensed under a FOSS license",
      link: "https://github.com/NeonGeckoCom/NeonCore/commit/8cb1d8edb3d4ffff8aa9aaf695e1fe3463939287",
    },
    {
      title: "Daniel McKnight Joins OpenVoiceOS",
      date: "November 2021",
      description: "Daniel McKnight, NeonAI's lead developer, joins the team.",
    },
    {
      title: "MycroftAI Layoffs",
      date: "November 2022",
      description:
        "MycroftAI lays off most of their staff. Only a skeleton crew remains.",
    },
    {
      title: "MycroftAI Partners with NeonAI",
      date: "February 2023",
      description:
        "MycroftAI partners up with NeonAI to take over the Mark 2 fulfillments and not much later ends its business.",
      link: "https://community.openconversational.ai/t/update-from-the-ceo-part-1/13268",
    },
    {
      title: "OpenVoiceOS Fundraiser",
      date: "March 2023",
      description:
        "OpenVoiceOS starts fundraiser to form a non-profit foundation legal entity.",
      link: "https://www.gofundme.com/f/openvoiceos",
    },
    {
      title: "Aditya Leaves OpenVoiceOS",
      date: "April 2023",
      description: "Aditya leaves OpenVoiceOS.",
      link: "https://community.openconversational.ai/t/aix-signing-off/13583",
    },
    {
      title: "Mycroft Forums Move",
      date: "January 2024",
      description: "Mycroft forums move to Open Conversational AI.",
    },
    {
      title: "OpenVoice Foundation Established",
      date: "Febuary 2025",
      description:
        "OpenVoice Foundation is established as a non-profit foundation legal entity.",
      link: "/press",
    },
    {
      title: "OpenVoiceOS receives NGI Zero Commons Fund grant",
      date: "October 2025",
      description: "OpenVoiceOS has been selected to receive a grant from the NGI Zero Commons Fund!",
      link: "https://blog.openvoiceos.org/posts/2025-10-20-ngi",
    },
  ];

  return (
    <section className="relative">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14">
              <h3 className="text-3xl font-extrabold dark:text-white">
                History
              </h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 dark:text-white">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-black dark:before:bg-white">
              {events.map((event, index) => (
                <TimelineEvent
                  key={index}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  link={event.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
