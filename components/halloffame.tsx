import React from 'react';
import Link from 'next/link';

interface TeamMember {
    name: string;
    handle: string;
    image: string;
    country?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Gaëtan Trellu',
        handle: 'goldyfruit',
        image: 'https://avatars.githubusercontent.com/u/614115',
        country: 'Canada 🇨🇦',
    },
    {
        name: 'Mike Gray',
        handle: 'mikejgray',
        image: 'https://avatars.githubusercontent.com/u/30268971',
        country: 'USA 🇺🇸',
    },
    {
        name: 'Jeremy Brodie',
        handle: 'builderjer',
        image: 'https://avatars.githubusercontent.com/u/34875857',
        country: 'USA 🇺🇸',
    },
    {
        name: 'Swen Gross',
        handle: 'emphasize',
        image: 'https://avatars.githubusercontent.com/u/25036977',
        country: 'Germany 🇩🇪',
    },
    {
        name: 'Suvan Banerjee',
        handle: 'suvanbanerjee',
        image: 'https://avatars.githubusercontent.com/u/104707806',
        country: 'India 🇮🇳',
    },
    {
        name: 'Parker Seaman',
        handle: '5trongthany',
        image: 'https://avatars.githubusercontent.com/u/65565784',
        country: 'USA 🇺🇸',
    }

];

const Halloffame: React.FC = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-xl lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Community Hall of Fame</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-300">
                    A big shoutout to our community members for their invaluable contributions to the project! They have been instrumental in maintaining the core components of OVOS and hosting public servers for everyone in the community to use.
                </p>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center text-gray-500 dark:text-gray-300">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={member.image} alt={`${member.name} Avatar`} />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>{member.name}</p>
                            {member.country && <span className="text-sm text-gray-600 font-normal dark:text-gray-400">{member.country}</span>}
                        </h3>
                        <Link href={`https://github.com/${member.handle}`} >@{member.handle}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Halloffame;