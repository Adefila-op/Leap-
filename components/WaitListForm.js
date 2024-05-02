"use client"

import { handleWaitList } from "@/utils/handleWaitList";
import { useState } from "react"

const WaitListForm = () => {
    const [email, setEmail] = useState("a");
    const [loading, setIsLoading] = useState(false)
    const handleSubmit = async e => {
        e.preventDefault();
        if(email.trim() === "") return;
        setIsLoading(true);


       
            await handleWaitList(email).then(res=>{
                console.log(res)
            });
            setEmail("")
            setIsLoading(false)
            return;
       
    }
  return (
    <form 
        className={`relative`}
        onSubmit={handleSubmit}
    >
        <input 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Enter your mail address"
            className={`border-[1px] rounded-[8px] py-[15px] px-[12px] w-[500px] text-[16px] bg-inherit border-[#F6F9F9] font-fourHundrend text-lightGrey`}
        />
        <button 
            type="submit"
            className={`bg-purpleDeep text-white text-sixteen font-sixHundrend rounded-[8px] py-[10px] px-[16px] absolute top-[44%] right-[-15px]`}
            style={{translate: "-50%"}}
        >
            {loading ? "Loading..." : "Submit"}
        </button>
    </form>
  )
}

export default WaitListForm