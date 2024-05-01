import Image from 'next/image'
import  Logo  from '@/assets/images/logomain.png'

export default function Navbar() {
  return (
    <nav className="px-16 py-4 md:mx-6 md:my-1 shadow-sm md:rounded-md">
      <div className="flex items-center gap-3">
        <h1 className="font-semibold text-xl">
          <span className="text-GreenDeep border">L</span>
          <span>e</span>
          <span>a</span>
          <span>p</span>
        </h1>
        <Image src={Logo} width={50} height={50} alt="logo" />
      </div>
    </nav>
  );
}
