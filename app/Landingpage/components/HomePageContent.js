import handshake from "@/public/handshake.svg";
import tree from "@/public/tree.svg";
import roadmap from "@/public/roadmap.svg";
import peopleJoingHands from "@/public/peoplejoinghands.svg";
import Image from "next/image";
import Link from "next/link";
import HomePageHeadAndText from "./HomePageHeadAndText";
import ContentWithEyes from "./ContentWithEyes";
import Hero from "./Hero";
import Layout from "../layout";


const HomePageContent = () => {
  // console.log(`text-[${purpleDeep}]`)
  // console.log(`text-[${yellowDeep}]`)
  return (
    <Layout>
      <main>
        <Hero />
        <section className="">
          <div className="text-center text-3xl md:text-fifty text-white md:font-medium my-8">
            <h2>The First Decentralized Peer</h2>
            <h2 className="md:py-4 py-2">to Peer Blockchain</h2>
            <h2>Onboarding Platoform</h2>
          </div>
          <div className={`text-fifty text-white mt-14`}>
            <HomePageHeadAndText
              title1="Share Niche /Based content with Peer"
              position="left"
              title2="while earning redeemable xp with"
              text1="Pack is a cluster identity system enshrines on our social platform"
              text2="that enables decentralized approach to our peer to peer content"
              textStyles={`text-thirtyTwo text-lightGrey`}
            />
            <div className="flex justify-between">
              <div></div>
              <Image src={handshake} alt="handshake" />
            </div>

            <HomePageHeadAndText
              position="right"
              title1="Owned a Community ip: Owned a"
              title2="Community built on a ERC721C"
              text1="Pack is a cluster identity system thay enshrines on our social"
              text2="platform that enables descentralized approach to our peer"
              text3="to peer content"
              textStyles={`text-lightGrey text-thirtyTwo font-fourHundrend`}
            />

            <div>
              <Image src={peopleJoingHands} alt="people" />
            </div>

            <HomePageHeadAndText
              title1="Explore web3 Protocol easily via On-"
              title2="chain module"
              text1="Pack is a cluster identity system that enshrines on our social"
              text2="platform that enables decentralized approach to our peer"
              text3="to peer content"
              textStyles={`text-lightGrey text-thirtyTwo font-fourHundrend`}
            />
            <div className="flex justify-between">
              <div></div>
              <Image src={tree} alt="tree" />
            </div>
            <Image src={roadmap} alt="road map" />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePageContent