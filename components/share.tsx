import React from "react";

export default function Share() {
  return (
    <section className="relative mt-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-5">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4 text-gray-800 dark:text-white">
              Share OpenVoiceOS with the World
            </h2>
          </div>

          {/* Content */}
          <div className="mx-auto text-center text-gray-600 dark:text-gray-300">
            <p className="mb-8">
              Whether you're a developer, tech enthusiast, vlogger, blogger, or
              just someone passionate about digital freedom, OVOS offers a
              powerful platform for voice-controlled technology that respects
              your privacy and puts you in control—and the world needs to know!
            </p>
            <h3 className="text-2xl font-bold mb-20 text-gray-800 dark:text-white">
              How You Can Spread the Word
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-4 text-gray-800 dark:text-white">
                  Talk About It
                </h4>
                <p>
                  Start by sharing your excitement for OpenVoiceOS with friends,
                  family, and colleagues. Discuss the benefits of an
                  open-source, privacy-first voice platform and how it empowers
                  users to take control of their technology.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-4 text-gray-800 dark:text-white">
                  Share on Social Media
                </h4>
                <p>
                  Use your social media platforms to share updates, features,
                  and personal experiences with OVOS. Don’t forget to tag us and
                  use the hashtag #OpenVoiceOS to connect with others who are
                  passionate about the project.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-4 text-gray-800 dark:text-white">
                  Write a Blog Post or Article
                </h4>
                <p>
                  If you have a blog or write for a tech publication, consider
                  writing a post about your experiences with OVOS. Share tips,
                  tutorials, or insights on why OVOS is a game-changer in the
                  voice technology space.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-4 text-gray-800 dark:text-white">
                  Create Content
                </h4>
                <p>
                  Videos, podcasts, and live streams are great ways to engage
                  your audience. Whether it’s a tutorial, a review, or a deep
                  dive into OVOS features, your content can help others discover
                  the project and understand its potential.
                </p>
              </div>
            </div>

            <div className="mt-32">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Why Your Voice Matters?
              </h3>
              <p className="mb-8 text-lg">
                Sharing OpenVoiceOS with the world not only helps grow the
                community but also promotes the values of open-source software
                and privacy. By talking about OVOS, you’re advocating for a
                future where users have more control over their technology and
                data.
              </p>
              <p className="mt-4">
                Let's build something amazing together. Share OpenVoiceOS today
                ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
