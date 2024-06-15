import Link from 'next/link';

const friends = [
  {
    name: 'HiveMind',
    description: 'HiveMind is a community-developed superset or extension of OpenVoiceOS. With HiveMind, you can extend one (or more, but usually just one!) instance of OpenVoiceOS to as many devices as you want, including devices that can\'t ordinarily run OVOS! OVOS itself usually runs on our desktop computers or our home servers, but you can use any Mycroft-branded device, or OpenVoiceOS, as your central unit.',
    website: 'https://jarbashivemind.github.io/HiveMind-community-docs',
    source: 'https://github.com/JarbasHiveMind',
    logo: 'https://github.com/JarbasHiveMind/HiveMind-assets/raw/master/logo/hivemind-512.png'
  },
  {
    name: 'TigreGótico',
    description: 'Timely bug fixes and chat support for OVOS are kindly sponsored by TigreGótico, official OVOS channel partner providing Enterprise support for anything OpenVoiceOS.',
    website: 'https://github.com/TigreGotico',
    source: 'https://github.com/TigreGotico',
    logo: 'https://avatars.githubusercontent.com/u/155266030'
  },
  {
    name: 'Smart'Gic',
    description: 'Building smart things with magic and love! We have Smart\'Gic to thank for our ovos-installer and ovos-docker',
    website: 'https://www.youtube.com/@smartgic',
    source: 'https://github.com/smartgic',
    logo: 'https://avatars.githubusercontent.com/u/73618837?s=200&v=4'
  },
  {
    name: 'NeonGecko',
    description: 'Neon was one of the first projects ever to adopt ovos-core as a library to build their own voice assistant, Neon works closely together with OVOS and both projects are mostly compatible.',
    website: 'https://neon.ai',
    source: 'https://github.com/NeonGeckoCom',
    logo: 'https://neon.ai/wp-content/uploads/2024/04/neon-ai-artificial-intelligence-2-2-3.png'
  },
  {
    name: 'Koninklijke Visio',
    description: 'Visio offers information and advice, but also various forms of research, guidance, rehabilitation, education, work and living. These services are available for people who are visually impaired or blind, even if they also have an intellectual, physical or other sensory disability.',
    website: 'http://www.visio.org',
    source: 'https://github.com/timonvanhasselt',
    logo: 'https://www.visio.org/media/klhfdhpp/visio-logo.svg'
  },
  {
    name: 'Proyecto Ilenia',
    description: 'ILENIA is a common and coordinated project between BSC-CNS (AINA project), CENID (VIVES project), HiTZ (NEL-GAITU project) and the University of Santiago de Compostela (NÓS project), which aims to generate digital resources that allow developing multilingual applications in the different languages ​​of Spain. The ILENIA Project collaborates by making the OVOS project known, facilitating product localization and promoting the integration of our linguistic models.',
    website: 'https://proyectoilenia.es',
    source: 'https://proyectoilenia.es/recursos',
    logo: 'https://proyectoilenia.es/wp-content/uploads/2023/09/ILENIA_logo.png'
  },
  {
    name: 'Mycroft',
    description: 'Mycroft AI started it all, it was one of the first ever FOSS voice assistants and is the project OVOS descends from. Most applications made for mycroft will work in OVOS and vice-versa.',
    website: 'https://mycroft.ai',
    source: 'https://github.com/MycroftAI',
    logo: 'https://avatars.githubusercontent.com/u/14171097'
  },
  {
    name: 'Secret Sauce AI',
    description: 'Secret Sauce AI is a coordinated community of tech minded AI enthusiasts working together on projects to identify blockers and improve the basic open source tools and pipeline components in the AI (voice) assistant pipeline (wakeword, ASR, NLU, NLG, TTS). The focus is mostly geared toward deployment on edge devices and self-hosted solutions. This is not a voice assistant project in and of itself, rather Secret Sauce AI helps AI (voice) assistant projects come together as individuals and solve basic problems faced by the entire community.',
    website: 'https://github.com/secretsauceai/secret_sauce_ai',
    source: 'https://github.com/secretsauceai',
    logo: 'https://avatars.githubusercontent.com/u/77728504?v=4'
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
                    <p className="text-blue-600 dark:text-blue-400 font-bold">Website</p>
                  </Link>
                  {friend.source && (
                    <Link href={friend.source}>
                      <p className="text-blue-600 dark:text-blue-400 font-bold">Source Code</p>
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
