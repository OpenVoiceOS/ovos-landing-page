import React from "react";

const featuresData = [
  {
    title: "Coding",
    description:
      "OpenVoiceOS, is always actively seeking contributions from developers across its entire framework. Whether you're skilled in front-end interfaces, backend services, machine learning, or voice recognition, your expertise can help advance this community-driven project. Developers can contribute by improving existing features, fixing bugs, or optimizing performance, ensuring the platform remains robust, user-friendly, and accessible to a broader audience.",
    icon: (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    ),
    url: "https://github.com/openVoiceOS/",
  },
  {
    title: "Building a Skill and/or Plugin",
    description:
      "We welcome developers who can create skills and plugins to help expand its functionality and versatility. By contributing your creativity with coding new skills, enhance existing ones, or develop new plugins that integrate seamlessly with the platform we enrich the user experience and offer more personalized and diverse interactions.",
    icon: (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g clip-path="url(#clip0_402_1610)">
            {" "}
            <path
              d="M17.6336 11.5653L12.2393 16.9596L15.3514 20.0717C16.841 21.5613 19.2561 21.5613 20.7457 20.0717C22.2353 18.5821 22.2353 16.167 20.7457 14.6774L17.6336 11.5653Z"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M6.80931 11.2036L12.2036 5.80925L9.09151 2.69715C7.60192 1.20755 5.18681 1.20756 3.69721 2.69715C2.20762 4.18675 2.20762 6.60186 3.69721 8.09146L6.80931 11.2036Z"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M13.1909 15.4215L11.2393 13.4699"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M16.0955 12.5169L14.1439 10.5653"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M20.7456 20.0717L21.9904 21.3165"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M3.69714 2.69713L2.4523 1.45229"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M11.4094 17.7895L18.4635 10.7354"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M13.0334 4.97935L5.97936 12.0334"
              stroke="#1C1C1C"
              stroke-width="1.55182"
              stroke-linecap="round"
            ></path>{" "}
          </g>{" "}
          <defs>
            {" "}
            <clipPath id="clip0_402_1610">
              {" "}
              <rect width="24" height="24" fill="white"></rect>{" "}
            </clipPath>{" "}
          </defs>{" "}
        </g>
      </svg>
    ),
    url: "https://openvoiceos.github.io/ovos-technical-manual/400-skill-design-guidelines/",
  },
  {
    title: "Helping with Translation",
    description:
      "OpenVoiceOS is committed to ensuring that no language is left behind and is seeking help from translators around the globe to make this vision a reality. As an open-source voice assistant platform, OpenVoiceOS aims to be accessible to users around the world, regardless of their native language.",
    icon: (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    ),
    url: "/translation",
  },
  {
    title: "Documentation",
    description:
      "OpenVoiceOS is seeking contributors to help enhance both user and developer documentation, a critical aspect of making the platform accessible and easy to use. Clear, comprehensive documentation is essential for guiding users through the setup and operation of the voice assistant, as well as for assisting developers in creating new features, skills, and plugins. Whether you're skilled in writing, technical communication, or have a deep understanding of OpenVoiceOS, your contributions can ensure that documentation is thorough, up-to-date, and user-friendly.",
    icon: (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#000000"
            fill-rule="evenodd"
            d="M4.25 1A2.25 2.25 0 002 3.25v9.5A2.25 2.25 0 004.25 15h8.5c.69 0 1.25-.56 1.25-1.25V2.25C14 1.56 13.44 1 12.75 1h-8.5zM3.5 12.75c0 .414.336.75.75.75h8.25v-2H4.25a.75.75 0 00-.75.75v.5zm0-2.622c.235-.083.487-.128.75-.128h8.25V2.5H4.25a.75.75 0 00-.75.75v6.878z"
            clip-rule="evenodd"
          ></path>
        </g>
      </svg>
    ),
    url: "https://openvoiceos.github.io/ovos-technical-manual/",
  },
  {
    title: "Sharing is Caring",
    description:
      "We are looking for passionate advocates to help spread the word. By raising awareness through social media, blogs, community forums, and other channels, you can play a crucial role in growing the OpenVoiceOS community. Whether you enjoy creating content, engaging with tech enthusiasts, or networking within developer circles, your efforts can help attract more users and contributors to the project.",
    icon: (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
            fill="#1C274C"
          ></path>{" "}
        </g>
      </svg>
    ),
    url: "/share",
  },
  {
    title: "Donating",
    description:
      "OpenVoiceOS welcomes support in the form of donations to help sustain and grow its open-source voice assistant platform. Donations play a vital role in covering essential expenses, such as server costs, development tools, and other resources that keep the project running smoothly. By contributing financially, you can directly impact the platform's ability to innovate, improve, and remain accessible to everyone. Whether it's a one-time donation or ongoing support, every contribution helps ensure that OpenVoiceOS continues to thrive as a community-driven project.",
    icon: (
      <svg
        fill="#000000"
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"></path>
        </g>
      </svg>
    ),
    url: "/donation",
  },
];

const Feature = ({
  title,
  description,
  icon,
  url,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  url: string;
}) => (
  <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-200 object-cover p-3">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
    <p className="font-medium text-gray-500 dark:text-gray-300 md:text-justify">
      {description}
    </p>
    <a
      className="btn font-bold text-white bg-black dark:bg-gray-300 dark:text-black rounded-3xl mx-auto m-5"
      href={url}
    >
      Learn More
    </a>
  </div>
);

const Contributions = () => {
  return (
    <section className="relative mt-32">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-3xl text-black dark:text-white font-extrabold md:text-4xl">
            How can I help make Open Voice OS better?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base lg:mx-auto">
            OpenVoiceOS is an open-source voice assistant platform powered by a
            passionate community of developers, translators, testers, and
            advocates. Whether you're skilled in coding, translation, testing,
            documentation, or simply spreading the word, your contributions are
            vital to our mission of creating a customizable, privacy-focused,
            and inclusive voice assistant. We're also grateful for financial
            donations, which help sustain the project's growth and innovation.
            No matter how you choose to contribute, your involvement helps make
            OpenVoiceOS a powerful, adaptable, and accessible tool for users
            around the world.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
        {featuresData.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            url={feature.url}
          />
        ))}
      </div>

      {/* Pull Request Review Process Section */}
      <div className="mt-20 bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-12 xl:px-32">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl text-black dark:text-white font-extrabold md:text-4xl">
            Pull Request Review Process
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base mb-8">
            OpenVoiceOS is made up of many smaller projects across multiple
            GitHub repositories that together power the amazing voice assistant
            we all know and love.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-base mb-8">
            We're thrilled you're interested in contributing to OpenVoiceOS!
            This guide will walk you through our Pull Request (PR) process,
            highlighting how we leverage automation and encourage early
            collaboration. Our goal is to make contributing as easy and
            collaborative as possible, so don't worry about perfection!
          </p>

          {/* TL;DR Box */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">
              TL;DR
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                • Use{" "}
                <a
                  href="https://www.conventionalcommits.org/en/v1.0.0/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Conventional Commits
                </a>
              </li>
              <li>• Open draft PRs early, mark as "Ready for Review" when you're ready</li>
              <li>• CodeRabbit bot helps automate feedback</li>
              <li>• Everyone is welcome to review PRs, not just maintainers!</li>
              <li>• PRs are squash-merged to keep history clean</li>
              <li>• Don't worry about perfection, we'll help you get it right!</li>
            </ul>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            {/* Who is responsible */}
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Who is responsible for reviewing PRs?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                OpenVoiceOS is an open source project. Most of everything
                happening in our project is done by volunteers. We have a core
                team of developers that are responsible for the overall
                architecture of OpenVoiceOS, and they are responsible for
                merging PRs (also volunteers). However, they are not the only
                ones reviewing PRs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                Everyone is welcome to review PRs, and we encourage you to jump
                in!
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                So, when you have opened a PR, please consider checking out if
                there is an open PR you can help out with. Any review comment,
                improvement suggestion, or even just a "I tested this using ...
                and it works" is very much appreciated. Besides, reviewing
                others' code is a great way to learn more about OpenVoiceOS.
              </p>
            </div>

            {/* Conventional Commits */}
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Conventional Commits
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                We use{" "}
                <a
                  href="https://www.conventionalcommits.org/en/v1.0.0/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Conventional Commits
                </a>{" "}
                to help our bots process and categorize changes. Don't stress if
                you're not an expert; it's mostly about clear, concise commit
                messages. For example:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">feat: add new voice command for weather</code></li>
                <li>• <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">fix: resolve issue with audio playback on startup</code></li>
                <li>• <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">docs: update installation instructions</code></li>
              </ul>
            </div>

            {/* Creating and Managing PRs */}
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Creating and Managing Your PR
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                We encourage you to open PRs <strong>early and often</strong>,
                even if your code isn't perfect or fully functional. This allows
                our bots and maintainers to provide feedback and guidance
                throughout your development process.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Our Code RabbitAI Bot:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base mb-3">
                    Once you open a PR, our <strong>Code RabbitAI bot</strong>{" "}
                    will automatically review your code. This bot helps with
                    initial checks, style suggestions, and identifying potential
                    issues, speeding up the review process.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>
                      • <strong>Draft PRs:</strong> If you're actively
                      implementing changes and want to avoid the bot "annoying"
                      you with reviews on every commit, simply mark your PR as a{" "}
                      <strong>Draft</strong>.
                    </li>
                    <li>
                      • <strong>Ready for Review:</strong> When you're ready for
                      another round of feedback from the bot and maintainers,
                      mark your PR as <strong>Ready for Review</strong>. The bot
                      will then re-engage and provide its insights.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Commit History:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    Don't obsess over a pristine commit history within your PR.
                    All PRs will be <strong>squashed on merge to <code className="bg-gray-200 dark:bg-gray-700 px-1">dev</code></strong>,
                    meaning your individual commits will be condensed into a
                    single commit when integrated into the main development
                    branch. This keeps our <code className="bg-gray-200 dark:bg-gray-700 px-1">dev</code> branch
                    history clean and easy to navigate. The commit on the{" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1">dev</code> branch
                    will also <strong>link directly to your original PR</strong>,
                    making it easy to reference at any point.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Code Style:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    Don't stress about strict code style adherence. Just use
                    common sense and try to stick to the surrounding code's
                    style. While we loosely follow <strong>PEP8</strong>, we
                    consider code style largely the job of our bots and CI.
                    We're thankful for your collaboration and want to make it as
                    easy as possible for you to get started, without annoying
                    you with nitpicks.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Feedback and Iteration:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    The Code RabbitAI bot and our maintainers will provide
                    feedback directly on your PR. Remember, these comments are
                    not personal; they're meant to help you improve your
                    contribution. Don't hesitate to ask questions or seek
                    clarification.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                What to Expect After Opening a PR
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                <li>
                  • <strong>Initial Bot Review:</strong> The Code RabbitAI bot
                  will provide an initial automated review, offering suggestions
                  and pointing out any immediate concerns.
                </li>
                <li>
                  • <strong>Maintainer Review:</strong> Our maintainers will
                  review your PR, providing more in-depth feedback on design,
                  functionality, and adherence to OpenVoiceOS principles.
                </li>
                <li>
                  • <strong>Iteration:</strong> You'll likely go through a few
                  rounds of revisions based on the feedback you receive. Use the
                  Draft PR feature to manage this process effectively.
                </li>
                <li>
                  • <strong>Merging:</strong> Once your PR meets our standards
                  and passes all checks, a maintainer will merge it into the{" "}
                  <code className="bg-gray-200 dark:bg-gray-700 px-1">dev</code> branch.
                </li>
                <li>
                  • <strong>If a PR isn't merged:</strong> If for any reason we
                  decide not to merge a PR, please don't take it personally.
                  We'll most likely offer a way to add any missing functionality
                  via a standalone plugin you can maintain independently. Just
                  talk to us!
                </li>
              </ul>
            </div>

            {/* Don't Worry */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Don't Worry About Perfection!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                If any of the above seems too complex, don't worry! Our Code
                RabbitAI bot and our maintainers are here to help. If your
                commits aren't perfectly conventional or your PR needs some
                refinement, a maintainer or bot will fix it for you or guide you
                on how to make the necessary adjustments.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base mt-4">
                We're excited to see your contributions to OpenVoiceOS!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
