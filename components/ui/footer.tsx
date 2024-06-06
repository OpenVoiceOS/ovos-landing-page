import Logo from './logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <p>
                OpenVoiceOS is a community-driven, open-source voice AI platform for creating custom voice-controlled ​interfaces across devices with NLP, a customizable UI, and a focus on privacy and security.
              </p>
            </div>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 justify-self-start">
            <h6 className="text-gray-800 font-medium mb-2">Quick Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blogs</Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Team</Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Discussion</Link>
              </li>
              <li className="mb-2">
                <Link href="/downloads" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Downloads</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
