import eyes from "@/public/eyes.svg";
import Image from "next/image";

const ContentWithEyes = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src={eyes}
          alt="eyes logo"
          priority
          className="md:w-full w-2/3"
        />
      </div>
    </>
  );
}

export default ContentWithEyes