import Link from 'next/link'

export default function About() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="zoom-y-out" data-aos-delay="150">
        <div className="py-1 md:py-2">
          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 dark:text-gray-300">About Open Voice OS</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 pb-5" data-aos="zoom-y-out">Meet OpenVoiceOS, a newcomer in the smart speaker scene, offering a different choice from the usual options like Amazon Echo and Google Home. With OpenVoiceOS, you have control over your data and can customize your smart speaker experience. It's designed to respond accurately to your commands, whether you speak or touch the screen. OpenVoiceOS is open-source, meaning anyone can help improve it, and it can run offline for added privacy. If you're looking for a smart speaker that puts you in control, OpenVoiceOS might be the one for you.</p>
            <p className=" bg-gray-200 dark:bg-gray-800 p-4 rounded-3xl text-center text-gray-900 dark:text-gray-200 w-fit mx-auto">
            Open Voice OS is a part of a larger ecosystem of FOSS voice technologies. Check <Link href="/friends" className="text-blue-600 dark:text-blue-400 font-bold">Friends Projects</Link> to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}