import Button from "./components/atoms/Button";
import Heading from "./components/atoms/Heading";
import Input from "./components/atoms/Input";
import Label from "./components/atoms/Label";
import Email_form from "./components/molecules/Email_form";
import About_us from "./components/molecules/About_us";
import Benefit_card from "./components/molecules/Benefit_card";
import Review_card from "./components/molecules/Review_card";
import Download_app from "./components/molecules/Downoad_app";
import Download from "./components/organisms/Download";

import Benefits from "./components/organisms/Benefits";
import Reviews from "./components/organisms/Reviews";
import Newsletter from "./components/organisms/Newsletter";
import Steps from "./components/molecules/Steps";
import About from "./components/organisms/About";
import Header from "./components/organisms/Header";
import Navigation from "./components/molecules/Navigation";
import Footer from "./components/organisms/Footer";
import Footer_text from "./components/molecules/Footer_text";

export default function Home() {
  return (
    <main >
      {/* <h1>Home</h1>
      <Button text="Download"/>
      <Button text="Button text" link="/about"/>
      <Heading text="Download" strong="extrabold" color="blue" size="_36"/>
      <Input type="email" placeholder="Enter email" id="email"/> */}
      {/* <Benefit_card heading="Free app" src="/bannedCash.png" alt="free app" width={180} height={190} text="App is free and you only need to sign up and create profile of your dog"></Benefit_card>
      <Review_card heading="Marko P." src="/fiveStars.png" alt="free app" text="Best dog app I have seen!"></Review_card>
      <Download_app></Download_app> */}
      {/* <Navigation></Navigation> */}
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
