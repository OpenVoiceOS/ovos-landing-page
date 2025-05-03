"use client";

import React from "react";
import Link from "next/link";

export default function Release() {
  const [showDialog, setShowDialog] = React.useState(false);

  const handleToggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="relative mx-auto items-center justify-center p-8">
      <div
        className="dark:text-white p-5 mx-auto max-w-fit"
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        {/* <button onClick={() => { window.location.href = "https://suvanbanerjee.github.io/OVOS-skills-store/" }}
                className="text-center text-xl font-extrabold relative underline underline-offset-4 decoration-[#fb4c4c] decoration-4" data-aos="zoom-y-out" data-aos-delay="150" id="message">
                    🎉 OpenVoiceOS Skill Store is now in beta!
                </button> */}
        <a
          href="/press"
          className="text-center text-xl font-extrabold relative underline underline-offset-4 decoration-[#fb4c4c] decoration-4"
          data-aos="zoom-y-out"
          data-aos-delay="150"
        >
          🎉 OpenVoiceOS Foundation is now live! Click here for the press
          release
        </a>
      </div>
      {/* {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-black dark:text-white p-16 rounded-lg shadow-lg">
                        <h2 className="text-xl md:text-xl font-bold leading-tighter tracking-tighter mb-4">OVOS v0.0.8 Pre-Release</h2>
                        <div className="max-h-[80vh] overflow-y-auto">
                            <p className="mb-4">
                                We are creating a new skill store for OpenVoiceOS, from which you can install skills on your device using audioQR codes (GGWave) 
                            </p>
                            <Link href="/releases/0.0.8">
                                <a className="text-blue-500 underline">Read more</a>
                            </Link>
                        </div>
                        <button className="mt-4 bg-black dark:bg-white dark:text-black text-white font-bold py-2 px-4 rounded" onClick={handleCloseDialog}>
                            Close
                        </button>
                    </div>
                </div>
            )} */}
    </div>
  );
}
