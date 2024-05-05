"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const HeaderRightLink = () => {
  const path = usePathname();
  const isWaitList = path === "/waitlist";
  return (
    <Link 
      className={`bg-purpleDeep shadow-green-500 shadow-lg text-white py-2 px-4 rounded-full`} 
      href={"/waitlist"}
    >
      {isWaitList ? "Documentation" : "Join waitlist"}
    </Link>
  )
}

export default HeaderRightLink;