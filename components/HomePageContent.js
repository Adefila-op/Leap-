import handshake from "@/public/handshake.svg";
import tree from "@/public/tree.svg";
import roadmap from "@/public/roadmap.svg";
import peopleJoingHands from "@/public/peoplejoinghands.svg";
import Image from "next/image";
import Link from "next/link";
import HomePageHeadAndText from "./HomePageHeadAndText";
import ContentWithEyes from "./ContentWithEyes";


const HomePageContent = () => {
  // console.log(`text-[${purpleDeep}]`)
  // console.log(`text-[${yellowDeep}]`)
  return (
    <main>
        <section className=" my-[50px]">
          <ContentWithEyes>
                <h1 
                  className={`text-purpleDeep text-sixty font-sixHundrend`}
                >
                  Deep Dive,
                </h1>
                <h1 
                  className={`text-yellowDeep text-sixty font-sixHundrend`}
                >
                    No Distraction
                </h1>
                <p 
                  className={`text-twentyFour font-fourHundrend`}
                >
                  Zero knowledge proof social fi platform where
                </p>
                <p 
                  className={`text-twentyFour font-fourHundrend`}
                >
                  professional share career specific content.
                </p>
                <div className="flex mt-[30px]">
                  <Link 
                    className={`bg-purpleDeep py-[10px] px-[40px] rounded-[100px] text-sixteen mr-[15px] block`} 
                    href={"/"}
                  >
                    Our Roadmap
                  </Link>
                  <Link 
                    className={`bg-yellowDeep py-[10px] px-[40px] rounded-[100px] text-black text-sixteen block`}
                    href={"/"}
                  >
                    Documentation
                  </Link>
            </div>
          </ContentWithEyes>
            
        </section>
        <section className="">
          <div className={`text-center text-fiftySix font-sixHundrend my-[50px]`}>
            <h2>The First Decentralized Peer</h2>
            <h2>to Peer Blockchain</h2>
            <h2>Onboarding Platoform</h2>
          </div>
          <div className={`text-fifty`}>
            <HomePageHeadAndText 
              title1="Share Niche /Based content with Peer"
              title2="while earning redeemable xp with"
              text1="Pack is a cluster identity system enshrines on our social platform"
              text2="that enables decentralized approach to our peer to peer content"
              textStyles={`text-thirtyTwo text-lightGrey`}
            />
            <div className="flex justify-between">
              <div></div>
              <Image src={handshake} alt="handshake"/>
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
              <Image src={peopleJoingHands} alt="people"/>
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
            <Image src={roadmap} alt="road map"/>
          </div>
        </section>
    </main>
  )
}

export default HomePageContent