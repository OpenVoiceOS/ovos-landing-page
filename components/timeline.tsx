import React from 'react';

export default function Timeline() {
    return (
        <section className="relative">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14">
                            <h3 className="text-3xl font-extrabold">History</h3>
                            <span className="dark:text-white">Open Voice OS is a project that has been in development for a few years now. Here's a brief history of the project.</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-1.5 before:bg-black dark:before:bg-white">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black dark:before:bg-white">
                                <h3 className="text-xl font-semibold tracking-wide">Open Voice OS</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-white">June 2024</time>
                                <p className="mt-3">History incoming :)</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black dark:before:bg-white">
                                <h3 className="text-xl font-semibold tracking-wide">Open Voice OS</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-white">June 2024</time>
                                <p className="mt-3">History incoming :)</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black dark:before:bg-white">
                                <h3 className="text-xl font-semibold tracking-wide">Open Voice OS</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-white">June 2024</time>
                                <p className="mt-3">History incoming :)</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black dark:before:bg-white">
                                <h3 className="text-xl font-semibold tracking-wide">Open Voice OS</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-white">June 2024</time>
                                <p className="mt-3">History incoming :)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
