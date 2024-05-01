import ContentWithEyes from "@/components/ContentWithEyes"
import WaitListForm from "@/components/WaitListForm"

const page = () => {
  return (
    <main className="my-[60px]">
      <ContentWithEyes>
        <section className={`text-yellowDeep text-sixty font-sixHundrend text-center`}>
          <h1>Apply for our</h1>
          <h1>early access NFT</h1>
          <h3 className={`text-twentyFour font-fourHundrend text-white`}>Be part of the few to build on Infocentric Media</h3>
          <WaitListForm />
        </section>
      </ContentWithEyes>
    </main>
  )
}

export default page