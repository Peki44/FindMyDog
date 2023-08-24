import Download from "@/app/components/organisms/Download";
import Benefits from "@/app/components/organisms/Benefits";
import Reviews from "@/app/components/organisms/Reviews";
import Newsletter from "@/app/components/organisms/Newsletter";
import About from "@/app/components/organisms/About";
import Header from "@/app/components/organisms/Header";
import Footer from "@/app/components/organisms/Footer";

export default function Home() {
  return (
    <main >
      <Header></Header>
      <About></About>
      <Download></Download>
      <Benefits></Benefits>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </main>
  )
}
