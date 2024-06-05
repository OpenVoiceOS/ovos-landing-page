export const metadata = {
    title: 'Team',
    description: 'Meet the team behind OpenVoiceOS.'
}

import Teams from '@/components/teams'
import Halloffame from '@/components/halloffame'

    export default function Team() {
    return (
        <>
        <Teams />
        <Halloffame />
        </>
    )
}