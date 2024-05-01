"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const HeaderRightLink = () => {
  const path = usePathname();
  const isWaitList = path === "/waitlist";
  return (
    <Link 
      className={`bg-purpleDeep text-white py-[10px] px-[16px] rounded-[100px]`} 
      href={"/waitlist"}
    >
      {isWaitList ? "Documentation" : "Join waitlist"}
    </Link>
  )
}

export default HeaderRightLink;