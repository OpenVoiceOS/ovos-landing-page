import React from 'react';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Jhon Doe',
        role: 'CEO/Co-founder',
        image: 'https://example.com/image.jpg',
    },
];

const Halloffame: React.FC = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Community Hall of Fame</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    A big shoutout to our community members who have contributed to the project.
                </p>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={member.image} alt={`${member.name} Avatar`} />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">{member.name}</a>
                        </h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Halloffame;