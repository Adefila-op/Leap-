import WaitListForm from "@/app/Landingpage/components/WaitListForm";
import ContentWithEyes from "../Landingpage/components/ContentWithEyes";
import Layout from "../Landingpage/layout";

const page = () => {
  return (
    <Layout>
      <main className="flex items-center flex-col-reverse lg:flex-row justify-between my-52">
        <section className="text-yellowDeep text-sixty font-sixHundrend text-center">
          <h1>Apply for our</h1>
          <h1>early access NFT</h1>
          <h3 className="text-twentyFour font-fourHundrend text-white mb-6">
            Be part of the few to build on Infocentric Media
          </h3>
          <WaitListForm />
        </section>
        <ContentWithEyes />
      </main>
    </Layout>
  );
};

export default page;
