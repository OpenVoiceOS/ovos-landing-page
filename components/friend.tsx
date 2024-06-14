import Link from 'next/link';

const friends = [
  {
    name: 'HiveMind',
    description: 'HiveMind is a community-developed superset or extension of OpenVoiceOS. With HiveMind, you can extend one (or more, but usually just one!) instance of Mycroft to as many devices as you want, including devices that can\'t ordinarily run Mycroft! HiveMind\'s developers have successfully connected to Mycroft from a PinePhone, a 2009 MacBook, and a Raspberry Pi 0, among other devices. Mycroft itself usually runs on our desktop computers or our home servers, but you can use any Mycroft-branded device, or OpenVoiceOS, as your central unit.',
    website: 'https://jarbashivemind.github.io/HiveMind-community-docs',
    source: 'https://github.com/JarbasHiveMind',
    logo: 'https://github.com/JarbasHiveMind/HiveMind-assets/raw/master/logo/hivemind-512.png'
  },
  {
    name: 'Plasma Bigscreen',
    description: 'Plasma Bigscreen integrates and uses OpenVoiceOS as voice framework stack to serve voice queries and voice applications (skills with a homescreen), one can easily enable mycroft / ovos integration in the bigscreen launcher by installing ovos core and required services and enabling the integration switch in the bigscreen KCM.',
    website: 'https://plasma-bigscreen.org',
    source: 'https://invent.kde.org/plasma/plasma-bigscreen',
    logo: 'https://plasma-bigscreen.org/img/logo.png',
    screenshot: 'https://plasma-bigscreen.org/img/screenshot-1.png'
  },
  {
    name: 'NeonGecko',
    description: 'Neon was one of the first projects ever to adopt ovos-core as a library to build their own voice assistant, Neon works closely together with OVOS and both projects are mostly compatible.',
    website: 'https://neon.ai',
    source: 'https://github.com/NeonGeckoCom',
    logo: 'https://neon.ai/wp-content/uploads/2024/04/neon-ai-artificial-intelligence-2-2-3.png'
  },
  {
    name: 'Mycroft',
    description: 'Mycroft AI started it all, it was one of the first ever FOSS voice assistants and is the project OVOS descends from. Most applications made for mycroft will work in OVOS and vice-versa.',
    website: 'https://mycroft.ai',
    source: 'https://github.com/MycroftAI',
    logo: 'https://mycroft.ai/wp-content/uploads/2017/02/Mycroft-Twitter-Profile.jpg'
  },
  {
    name: 'Secret Sauce AI',
    description: 'Secret Sauce AI is a coordinated community of tech minded AI enthusiasts working together on projects to identify blockers and improve the basic open source tools and pipeline components in the AI (voice) assistant pipeline (wakeword, ASR, NLU, NLG, TTS). The focus is mostly geared toward deployment on edge devices and self-hosted solutions. This is not a voice assistant project in and of itself, rather Secret Sauce AI helps AI (voice) assistant projects come together as individuals and solve basic problems faced by the entire community.',
    website: 'https://github.com/secretsauceai/secret_sauce_ai',
    source: 'https://github.com/secretsauceai',
    logo: 'https://avatars.githubusercontent.com/u/77728504?v=4'
  },
  {
    name: 'Blue Systems',
    description: 'Blue Systems claims to have one goal "We are a dedicated team from around the world to work on one goal: The advancement of free software solutions to be viable for daily use in every computing field." They currently host a TTS service used by the [ovos-tts-plugin-mimic3-server](https://github.com/OpenVoiceOS/ovos-tts-plugin-mimic3-server)',
    website: 'https://blue-systems.com',
    logo: 'https://blue-systems.com/wp-content/uploads/2019/08/bs-logo.png'
  }
];

export default function Friends() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto mt-24 px-4 sm:px-6">
        <div className="py-1 md:py-2">
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 dark:text-gray-300">Friends of Open Voice OS</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 pb-5">OpenVoiceOS collaborates with a wide range of projects within the FOSS voice technology ecosystem. Explore our friends and their contributions below.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {friends.map((friend, index) => (
              <div key={index} className="border rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <img src={friend.logo} alt={friend.name} className="w-12 h-12 mr-4" />
                  <h3 className="text-lg font-semibold dark:text-gray-300">{friend.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{friend.description}</p>
                {friend.screenshot && <img src={friend.screenshot} alt={`${friend.name} screenshot`} className="mb-4 rounded-lg shadow-md" />}
                <div className="flex justify-between items-center">
                  <Link href={friend.website}>
                    <p className="text-blue-600 dark:text-blue-400 font-bold" target="_blank">Website</p>
                  </Link>
                  {friend.source && (
                    <Link href={friend.source}>
                      <p className="text-blue-600 dark:text-blue-400 font-bold" target="_blank">Source Code</p>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}