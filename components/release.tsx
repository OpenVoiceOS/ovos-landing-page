'use client';

import React from "react";
import Link from "next/link";

export default function Release() {
    const [showDialog, setShowDialog] = React.useState(false);

    const handleToggleDialog = () => {
        setShowDialog(!showDialog);
    }

    const handleCloseDialog = () => {
        setShowDialog(false);
    }

    return (
        <div className="relative mx-auto items-center justify-center p-8">
            <div className="dark:text-white p-5 mx-auto max-w-fit" data-aos="zoom-y-out" data-aos-delay="150">
                <button onClick={handleToggleDialog} className="text-center text-xl font-extrabold relative underline underline-offset-4 decoration-[#fb4c4c] decoration-4" data-aos="zoom-y-out" data-aos-delay="150" id="message">
                    🎉 OpenVoiceOS v0.0.8 pre-release is now available!
                </button>
            </div>
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-black dark:text-white p-16 rounded-lg shadow-lg">
                        <h2 className="text-xl md:text-xl font-bold leading-tighter tracking-tighter mb-4">OVOS v0.0.8 Pre-Release</h2>
                        <div className="max-h-[80vh] overflow-y-auto">
                            <p>
                                We're excited to announce that OVOS version 0.0.8 is now available as a pre-release beta! This version marks a significant milestone for OVOS: it's not only our final release that maintains Mycroft backwards compatibility but also our first to fully integrate OVOS plugins across most components. This step forward reflects our commitment to enhancing user experience and fostering innovation within our community.
                            </p>
                            <h3 className="mt-4 font-bold">Participate in our pre-release beta</h3>
                            <p>
                                We invite all community members to install and test the 0.0.8 pre-release beta. Your feedback is invaluable, especially during the next two weeks, as we focus on addressing any bugs you encounter. This beta testing period is crucial for ensuring a stable and polished 0.0.8 release. Although 0.0.8 alphas have been stable for months, your insights during this formal QA process will help us make the final release the best it can be.
                            </p>
                            <h3 className="mt-4 font-bold">How to upgrade</h3>
                            <p>
                                RaspOVOS users should use @builderjer's upgrade script to use with existing installations. They may also re-flash with the testing version of RaspOVOS.<br />
                                ovos-docker users should continue to use development containers - they will remain stable and receive bugfixes during the testing period.<br />
                                ovos-installer users can git pull to get the latest installer code, then re-run the installer. This will bring you to the latest pre-release version.
                            </p>
                            <h3 className="mt-4 font-bold">Reporting issues</h3>
                            <p>
                                If you encounter any issues, we encourage you to report them. For those familiar with GitHub, please submit your reports directly to the relevant repository. If you have a fix, feel free to open a PR!
                            </p>
                            <ul className="list-disc ml-5">
                                <li><a href="https://github.com/OpenVoiceOS/ovos-core/issues" target="_blank" rel="noopener noreferrer" className="underline">https://github.com/OpenVoiceOS/ovos-core/issues</a></li>
                                <li><a href="https://github.com/OpenVoiceOS/ovos-audio/issues" target="_blank" rel="noopener noreferrer" className="underline">https://github.com/OpenVoiceOS/ovos-audio/issues</a></li>
                                <li><a href="https://github.com/OpenVoiceOS/ovos-PHAL/issues" target="_blank" rel="noopener noreferrer" className="underline">https://github.com/OpenVoiceOS/ovos-PHAL/issues</a></li>
                                <li><a href="https://github.com/OpenVoiceOS/ovos-dinkum-listener/issues" target="_blank" rel="noopener noreferrer" className="underline">https://github.com/OpenVoiceOS/ovos-dinkum-listener/issues</a></li>
                                <li><a href="https://github.com/OpenVoiceOS/ovos-messagebus/issues" target="_blank" rel="noopener noreferrer" className="underline">https://github.com/OpenVoiceOS/ovos-messagebus/issues</a></li>
                            </ul>
                            <p>
                                If GitHub is unfamiliar to you, or you're unsure where to report, the <Link href="https://openvoiceos.com/support" target="_blank" rel="noopener noreferrer" className="underline">OpenVoiceOS - Support</Link> is your go-to place for assistance from our team.
                            </p>
                            <p><strong>Note:</strong> Non-urgent bugs may be scheduled for a future release, to keep our focus on critical issues.</p>
                            <h3 className="mt-4 font-bold">We're open to feature requests!</h3>
                            <p>
                                Should you have any suggestions or feature requests, we're all ears. While our immediate focus is on polishing 0.0.8, we're eager to hear how we can improve. Please share your ideas during this testing phase. Keep in mind, new feature implementation will likely be planned for version 0.1.0 or later unless we determine it's critical for this release.
                            </p>
                            <p>
                                A big thank you! Your involvement is what drives OVOS forward. The team extends its heartfelt gratitude to all our users and testers. Together, let's make OVOS 0.0.8 a milestone to remember!
                            </p>
                        </div>
                        <button className="mt-4 bg-black dark:bg-white dark:text-black text-white font-bold py-2 px-4 rounded" onClick={handleCloseDialog}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}