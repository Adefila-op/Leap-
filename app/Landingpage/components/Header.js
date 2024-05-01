import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import HeaderRightLink from "./HeaderRightLink";
const Header = () => {

    // box-shadow: 0px 4px 4px 0px #B0E212;

  return (
    <header className="flex items-center justify-between py-[20px]">
        <Link href="/">
            <Image 
                src={Logo} 
                width={172} 
                height={60}
                priority 
                alt="logo"
            />
        </Link>
        <HeaderRightLink />
    </header>
  )
}

export default Header