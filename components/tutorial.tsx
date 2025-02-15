import React from 'react';
import Image from 'next/image';

export default function Tutorial() {
    return (
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:text-white">
                <div className="bg-white dark:bg-stone-900 overflow-hidden">
                    <div className="p-8 lg:p-12">
                        {/* Header Section */}
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
                                Contribute to Our Project Translations
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Thank you for your interest in helping translate our project! Your contributions will help make our project
                                accessible to more people around the world.
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                            {/* Step-by-Step Guide Section */}
                            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                                Step-by-Step Guide to Translating with GitLocalize
                            </h2>

                            {/* Rest of the content with improved spacing and hierarchy */}
                            <div className="space-y-12">
                                {/* Visit Project Page Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Visit Our GitLocalize Project Page</h3>
                                    <div className="bg-gray-50 dark:bg-stone-900 rounded-xl p-6 mb-6">
                                        <Image 
                                            src="https://gist.github.com/assets/33701864/0a678e87-2cdf-4a9b-924c-e496e47befb4" 
                                            alt="GitLocalize Project Page" 
                                            width={800} 
                                            height={500}
                                            className="rounded-lg shadow-lg mb-4" 
                                        />
                                        <ol className="list-decimal list-inside space-y-2">
                                            <li className="text-lg"><strong>Click on the link</strong> to our GitLocalize project: 
                                                <a href="https://gitlocalize.com/users/OpenVoiceOS" 
                                                   className="text-blue-500 hover:text-blue-600 ml-1">
                                                    https://gitlocalize.com/users/OpenVoiceOS
                                                </a>
                                            </li>
                                            <li className="text-lg">You will see a list of OVOS repositories to translate, select one</li>
                                            <li className="text-lg">You will see a list of languages and translation tasks available.</li>
                                        </ol>
                                    </div>
                                </section>

                                {/* Sign Up or Log In Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Sign Up or Log In</h3>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li className="text-lg">If you don't have an account, <strong>sign up</strong> with your email or GitHub account (you don’t need to know GitHub to do this!).</li>
                                        <li className="text-lg">If you already have an account, simply <strong>log in</strong>.</li>
                                    </ol>
                                </section>

                                {/* Choose a Language Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Choose a Language</h3>
                                    <blockquote className="border-l-4 border-gray-300 pl-4 mb-4">
                                        <p>Adding new languages to the list</p>
                                    </blockquote>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li className="text-lg">Select the language you want to translate into from the list of available languages.</li>
                                        <li className="text-lg">You will see a list of files that need translation.
                                            <ul className="list-disc list-inside ml-6 space-y-2">
                                                <li className="text-lg"><code>dialogs.json</code> contains sentences that OVOS will speak</li>
                                                <li className="text-lg"><code>intents.json</code> contains sentences that the user will speak to OVOS</li>
                                                <li className="text-lg"><code>vocabs.json</code> similar to intents, but contain sentence fragments/keywords, not full utterances</li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <div className="bg-gray-50 dark:bg-stone-900 rounded-xl p-6 mb-6">
                                        <Image 
                                            src="https://gist.github.com/assets/33701864/444cbb6d-1e9e-47b0-84f1-aeb38eef6a17" 
                                            alt="image" 
                                            width={800} 
                                            height={500}
                                            className="rounded-lg shadow-lg mb-4" 
                                        />
                                    </div>
                                </section>

                                {/* Start Translating Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Start Translating</h3>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li className="text-lg">Click on a file that you want to translate.</li>
                                        <li className="text-lg">The translation editor will open. Here, you’ll see the original text on the left and a space to enter your translation on the right.</li>
                                        <li className="text-lg">Begin translating the text. If you’re unsure about any phrase, feel free to leave it and move on to the next one.</li>
                                    </ol>
                                    <p className="text-lg mb-4">When you open a JSON file for translation in GitLocalize, you’ll see two parts:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg"><strong>Key</strong>: This corresponds to a file name in the OVOS repository you selected.</li>
                                        <li className="text-lg"><strong>Value</strong>: This is the sentence you need to translate.</li>
                                    </ul>
                                </section>

                                {/* Variables Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Variables</h3>
                                    <p className="text-lg mb-4">Variables are placeholders within sentences that represent changing content, such as names or numbers.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg">Original: <code>My name is {'{var_name}'}</code></li>
                                        <li className="text-lg">Translation: <code>Mi nombre es {'{var_name}'}</code></li>
                                    </ul>
                                    <div className="bg-gray-50 dark:bg-stone-900 rounded-xl p-6 mb-6">
                                        <Image 
                                            src="https://gist.github.com/assets/33701864/2779c8a3-46de-47b3-894f-eccab0bdd2b5" 
                                            alt="image" 
                                            width={800} 
                                            height={500}
                                            className="rounded-lg shadow-lg mb-4" 
                                        />
                                    </div>
                                    <p className="font-bold text-lg mb-4">Important Rules:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg"><strong>Do not translate the variable names</strong> (the text inside curly braces <code>{}</code>).</li>
                                        <li className="text-lg">You can <strong>rearrange the position</strong> of variables in your translation, but do not create new variables.</li>
                                        <li className="text-lg">Ensure that variables are not separated by only whitespace; there should be at least one word between them.</li>
                                    </ul>
                                </section>

                                {/* Slots Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Slots</h3>
                                    <p className="text-lg mb-4">Sometimes, the same file will appear several times, each with a different variation of the same sentence. These variations are called "slots".</p>
                                    <div className="bg-gray-50 dark:bg-stone-900 rounded-xl p-6 mb-6">
                                        <Image 
                                            src="https://gist.github.com/assets/33701864/70f30bc5-56f0-4d87-a521-2c4c77790bfe" 
                                            alt="image" 
                                            width={800} 
                                            height={500}
                                            className="rounded-lg shadow-lg mb-4" 
                                        />
                                    </div>
                                    <p className="font-bold text-lg mb-4">Important Rules:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg"><strong>Translate at least one slot</strong> in each file.</li>
                                        <li className="text-lg">If a slot is not needed in your language, enter <code>[UNUSED]</code>. This tells us that you reviewed the slot and marked it as translated.</li>
                                        <li className="text-lg">If you run out of slots to fit all variations of a sentence, you can use newlines to add more translations.</li>
                                    </ul>
                                </section>

                                {/* Alternative/Optional Words Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Alternative/Optional words</h3>
                                    <p className="text-lg mb-4">You can use the "alternative word" syntax to provide options or optional words within a sentence.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg">Alternative words: <code>I love (cats|dogs|birds)</code> becomes <code>Amo (gatos|perros|pájaros)</code></li>
                                        <li className="text-lg">Optional words: <code>I (really|) love (cats|dogs|birds)</code> becomes <code>Yo (realmente|) amo (gatos|perros|pájaros)</code></li>
                                    </ul>
                                    <div className="bg-gray-50 dark:bg-stone-900 rounded-xl p-6 mb-6">
                                        <Image 
                                            src="https://gist.github.com/assets/33701864/75288b2d-559e-47c3-8e73-bb5391e4a888" 
                                            alt="image" 
                                            width={800} 
                                            height={500}
                                            className="rounded-lg shadow-lg mb-4" 
                                        />
                                    </div>
                                </section>

                                {/* Tips for Effective Translation Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Tips for Effective Translation</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg"><strong>Consistency</strong>: Try to use consistent terminology throughout the project.</li>
                                        <li className="text-lg"><strong>Context</strong>: If a phrase seems unclear, consider the overall context of the project or reach out for clarification.</li>
                                        <li className="text-lg"><strong>Accuracy</strong>: Aim to convey the meaning as accurately as possible, rather than a literal word-for-word translation.</li>
                                    </ul>
                                </section>

                                {/* Key Take Aways Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Key Take Aways</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="text-lg">For each sentence (slot), enter your translation.</li>
                                        <li className="text-lg">If a slot is not needed, enter <code>[UNUSED]</code>.</li>
                                        <li className="text-lg">Leave the variable names in curly braces <code>{}</code> unchanged.</li>
                                        <li className="text-lg">Rearrange variables as needed but do not create new ones.</li>
                                        <li className="text-lg">Provide multiple options using the syntax <code>(option1|option2|option3)</code>.</li>
                                        <li className="text-lg">Include optional words using the syntax <code>(optional|)</code>.</li>
                                        <li className="text-lg">If there are not enough slots, press <code>Enter</code> to add a new line and enter your alternative translation on the new line.</li>
                                    </ul>
                                </section>

                                {/* Review and Feedback Section */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-4">Review and Feedback</h3>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li className="text-lg">Once finished translating a file, you can <strong>submit</strong> it for review.</li>
                                        <li className="text-lg">Your translations will be reviewed by other native speakers and project maintainers.</li>
                                        <li className="text-lg">If any changes are needed, you might receive feedback. Simply log back in, review the comments, and make the necessary adjustments.
                                            <div className="bg-gray-50 dark:bg-stone-900 rounded-xl p-6 mb-6">
                                                <Image 
                                                    src="https://gist.github.com/assets/33701864/f76df4fb-a825-48ec-8e76-c8e47e013392" 
                                                    alt="image" 
                                                    width={800} 
                                                    height={500}
                                                    className="rounded-lg shadow-lg mb-4" 
                                                />
                                            </div>
                                        </li>
                                    </ol>
                                </section>
                            </div>
                        </div>

                        {/* Help Section */}
                        <div className="mt-16 mb-4 dark:bg-stone-900 p-8">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Need Help?</h3>
                            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                                <a 
                                    href="https://matrix.to/#/#openvoiceos-languages:matrix.org"
                                    className="flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800"
                                >
                                    Join our Matrix Chat
                                </a>
                                <a 
                                    href="mailto:support@openvoiceos.org"
                                    className="flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800"
                                >
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
