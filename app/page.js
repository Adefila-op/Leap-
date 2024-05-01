import Header from "@/components/Header";
import HomePageContent from "@/components/HomePageContent";
import { black } from "@/constants/colors";

export default function Home() {
  return (
    <main className={`bg-[${black}]`}>
      <main >
        <HomePageContent />
      </main>
    </main>
  );
}
