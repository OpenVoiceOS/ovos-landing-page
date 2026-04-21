import React from "react";
import Image from "next/image";

export default function Tutorial() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:text-white">
      <div className="bg-white dark:bg-stone-900 overflow-hidden">
        <div className="p-8 lg:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-center">OVOS Localize Tutorial</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
            This guide is for first-time contributors who want to translate OVOS skills.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Goal</h2>
            <p className="mb-2">By the end of this tutorial, you will know how to:</p>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>Set your languages</li>
              <li>Change languages later from the top-right menu</li>
              <li>Choose a skill that needs help</li>
              <li>Open the translation editor</li>
              <li>Submit your contribution</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Before You Start</h2>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Open the <a href="https://openvoiceos.github.io/ovos-localize/" className="text-blue-500 hover:text-blue-600">live platform</a> in your browser</li>
              <li>You do not need coding experience</li>
              <li>You should have a GitHub account (needed when submitting your translation)</li>
            </ul>
          </section>

          {/* Scenario 1: First Setup (Choose Your Languages) */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Scenario 1: First Setup (Choose Your Languages)</h2>
            <p className="mb-2 text-red-600 font-semibold">Click the top-right <code>Set languages</code> button to choose your language before starting.</p>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>Open OVOS Localize.</li>
              <li>Click the <strong>Set languages</strong> button in the top-right corner of the header.</li>
              <li>Select one or more languages you can translate.</li>
              <li>Click save/continue.</li>
            </ol>
            <div className="flex flex-col gap-4 mb-2">
              <div>
                
                <ol className="ml-6">
                  <li><Image src="/images/translate/1.png" alt="Header showing the top-right Set languages button" width={800} height={400} className="rounded-lg shadow mb-2" /></li>
                  <li><Image src="/images/translate/2.png" alt="Language selection modal with checkboxes" width={800} height={400} className="rounded-lg shadow mb-2" /></li>
                </ol>
              </div>
            </div>
            <p className="text-sm text-gray-500">Choose the language(s) you know.</p>
          </section>

          {/* Scenario 2: Change Languages Later */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Scenario 2: Change Languages Later (Top Right)</h2>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>In the header, click the top-right button labeled <code>Set languages</code>.</li>
              <li>Search for a language in the search box.</li>
              <li>Check or uncheck languages.</li>
              <li>Save changes.</li>
            </ol>
          </section>

          {/* Scenario 3: Choose a Skill */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Scenario 3: Choose a Skill</h2>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>Go to the <code>Dashboard</code> page.</li>
              <li>Use <code>Search skills...</code> to find a specific skill, or browse cards.</li>
              <li>Pick a skill card.</li>
              <li>Click a language badge on that card (for example <code>pt-PT</code>).</li>
            </ol>
            <div className="flex flex-col gap-4 mb-2">
              <div>
                
                <ol className="ml-6">
                  <li><Image src="/images/translate/5.png" alt="Dashboard with skill cards visible" width={800} height={400} className="rounded-lg shadow mb-2" /></li>
                </ol>
              </div>
            </div>
            <p className="text-sm text-gray-500">Tip: Red badges usually indicate the language needs more translation work.</p>
          </section>

          {/* Scenario 4: Open the Editor and Translate */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Scenario 4: Open the Editor and Translate</h2>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>After choosing a skill and language, the editor opens.</li>
              <li>Read the English source text on the left.</li>
              <li>Write your translation in the center editor.</li>
              <li>Use the context panel on the right to understand usage.</li>
            </ol>
            <div className="flex flex-col gap-4 mb-2">
              <div>
                
                <ol className="ml-6">
                  <li><Image src="/images/translate/7.png" alt="3-panel editor (source, translation editor, context panel)" width={800} height={400} className="rounded-lg shadow mb-2" /></li>
                  <li><Image src="/images/translate/8.png" alt="Edited translation text before submission" width={800} height={400} className="rounded-lg shadow mb-2" /></li>
                </ol>
              </div>
            </div>
          </section>

          {/* Scenario 5: Submit Your Translation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Scenario 5: Submit Your Translation</h2>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>Click the submit button in the editor.</li>
              <li>A GitHub issue page opens with pre-filled data.</li>
              <li>Click <code>Submit new issue</code> on GitHub.</li>
              <li>Automation creates a pull request for maintainers to review.</li>
            </ol>
            <div className="flex flex-col gap-4 mb-2">
              <div>
                
                <ol className="ml-6">
                  <li><Image src="/images/translate/9.png" alt="Submit action from editor" width={800} height={400} className="rounded-lg shadow mb-2" /></li>
                  <li><Image src="/images/translate/10.png" alt="GitHub new issue page with pre-filled translation data" width={800} height={400} className="rounded-lg shadow mb-2" /></li>
                </ol>
              </div>
            </div>
          </section>

          {/* Quality Checklist */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Quality Checklist</h2>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>Keep placeholders like <code>{'{name}'}</code> exactly unchanged.</li>
              <li>Preserve line meaning from source.</li>
              <li>Keep punctuation and formatting where required.</li>
              <li>For <code>.voc</code> files, keep terms concise.</li>
              <li>For <code>.dialog</code> files, write natural spoken language.</li>
            </ul>
          </section>

          {/* Common Problems */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Common Problems</h2>
            <h3 className="text-xl font-semibold mt-4 mb-1">I cannot find my language</h3>
            <ul className="list-disc list-inside mb-2">
              <li>In the language modal, click <code>Can't find your language? Request it</code>.</li>
              <li>Submit the request form.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-1">I selected the wrong language</h3>
            <ul className="list-disc list-inside mb-2">
              <li>Click <code>Set languages</code> in the top-right header and update your selection.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-1">I am not sure what a line means</h3>
            <ul className="list-disc list-inside mb-2">
              <li>Use the right-side context panel in the editor.</li>
              <li>Open the skill README when available.</li>
            </ul>
          </section>

          {/* Quick Path */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Quick Path (30 Seconds)</h2>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>Click <code>Set languages</code></li>
              <li>Choose your language</li>
              <li>Open <code>Dashboard</code></li>
              <li>Choose a skill card and language badge</li>
              <li>Translate lines</li>
              <li>Submit on GitHub</li>
            </ol>
          </section>

          <div className="mt-16 mb-4 dark:bg-stone-900 p-8 rounded-xl">
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
