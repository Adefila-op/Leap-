"use client"

import { lightGrey, purpleDeep, white } from "@/constants/colors";
import { sixteen } from "@/constants/fontSizes";
import { fourHundrend, sixHundrend } from "@/constants/fontWeight";
import { useState } from "react"

const WaitListForm = () => {
    const [email, setEmail] = useState("");
  
  return (
    <form 
        className={`relative`}
    >
        <input 
            type="email"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Enter your mail address"
            className={`border-[1px] rounded-[8px] py-[15px] px-[12px] w-[500px] text-[16px] bg-inherit border-[#F6F9F9] font-[${fourHundrend}] text-[${lightGrey}]`}
        />
        <button 
            type="submit"
            className={`bg-[${purpleDeep}] text-[${white}] text-[${sixteen}] font-[${sixHundrend}] rounded-[8px] py-[10px] px-[16px] absolute top-[44%] right-[-15px]`}
            style={{translate: "-50%"}}
        >
            Submit
        </button>
    </form>
  )
}

export default WaitListForm