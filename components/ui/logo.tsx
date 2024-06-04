import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="flex items-center">
        <Image src={logo} alt='Logo' width={32} height={32} />
        <span className="ml-2">Open Voice OS</span>
      </div>
    </Link>
  )
}
