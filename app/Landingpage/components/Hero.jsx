import Link from "next/link";
import ContentWithEyes from "./ContentWithEyes";
import Image from "next/image";
import backdrop from '@/assets/images/backdrop.png'


export default function Hero() {
  return (
    <>
      <div className="py-16">
        <article className="flex items-center flex-col-reverse md:flex-row justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-purpleDeep justify-center md:justify-start flex md:flex-col gap-2 text-2xl font-medium md:text-sixty md:font-sixHundrend">
              Deep Dive, {/* */}{" "}
              <span className="text-yellowDeep md:pt-8">
                {" "}
                {/* */}No Distraction
              </span>
            </h1>
            <p className="md:text-xl text-gray-50 text-xl md:w-2/4 pt-4 md:pt-8">
              Zero knowledge proof social fi platform where professional share
              career specific content
            </p>
            <div className="pt-6 flex gap-3 flex-col md:flex-row">
              <Link
                href={"/#"}
                className="bg-purpleDeep shadow-yellowDeep shadow-lg text-white py-2 px-4 rounded-full"
              >
                Our Roadmap
              </Link>
              <Link
                href={"/#"}
                className="bg-yellowDeep shadow-purpleDeep shadow-lg text-white py-2 px-4 rounded-full"
              >
                Documentation
              </Link>
            </div>
          </div>
          <div className="pb-6 relative">
            <div className="">
              <Image src={backdrop} className="w-full left-0 absolute -mt-16" />
            </div>
            <ContentWithEyes />
          </div>
        </article>
      </div>
    </>
  );
}
