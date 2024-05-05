"use client"

import { useState } from "react"

const WaitListForm = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border rounded-md w-full md:w-[500px] justify-between">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your mail address"
          className={` rounded-md py-4 px-6 focus:outline-none w-full text-[16px] bg-inherit  font-fourHundrend text-lightGrey`}
        />
        <button
          type="submit"
          className={`bg-purpleDeep text-white text-sixteen font-sixHundrend rounded-md py-3.5 px-8`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default WaitListForm