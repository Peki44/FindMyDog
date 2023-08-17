import Download from "./components/organisms/Download";
import Benefits from "./components/organisms/Benefits";
import Reviews from "./components/organisms/Reviews";
import Newsletter from "./components/organisms/Newsletter";
import About from "./components/organisms/About";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

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
