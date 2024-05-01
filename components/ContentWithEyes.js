import eyes from "@/public/eyes.svg";
import Image from "next/image";

const ContentWithEyes = ({ children }) => {
  return (
    <main className="flex justify-between">
        <div>
            {children}
        </div>
        <div>
            <Image 
                src={eyes} 
                alt="eyes logo"
                priority
            />
        </div>
    </main>
  )
}

export default ContentWithEyes