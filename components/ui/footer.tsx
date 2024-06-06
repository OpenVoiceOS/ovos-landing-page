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
          <div className="sm:col-span-12 lg:col-span-3 lg:col-start-10 sm:text-left lg:text-center flex sm:justify-start lg:justify-end">
            <div className="w-full lg:w-auto">
              <h6 className="text-gray-800 font-medium mb-2 sm:text-left lg:text-center">Quick Links</h6>
              <ul className="text-sm sm:text-left lg:text-center">
                <li className="mb-2">
                  <Link href="/" aria-label="Home" className="footer-link">Home</Link>
                </li>
                <li className="mb-2">
                  <Link href="/blogs" aria-label="Blogs" className="footer-link">Blogs</Link>
                </li>
                <li className="mb-2">
                  <Link href="/team" aria-label="Team" className="footer-link">Team</Link>
                </li>
                <li className="mb-2">
                  <Link href="/documentation" aria-label="Documentation" className="footer-link">Documentation</Link>
                </li>
                <li className="mb-2">
                  <Link href="/discussion" aria-label="Discussion" className="footer-link font-medium">Discussion</Link>
                </li>
                <li className="mb-2">
                  <Link href="/downloads" aria-label="Downloads" className="footer-link">Downloads</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
