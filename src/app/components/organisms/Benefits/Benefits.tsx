import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import Benefit_card from "../../molecules/Benefit_card";
import styles from './Benefits.module.css';

const Benefits=()=>{
    return <div id="benefits" className={styles.benefits}>
        <Heading text="Why to use this app?" size="_36" strong="extrabold" color="white"></Heading>
        <Label text="Here are some benefits of FindMyDog" size="_24" strong="bold" color="white"></Label>
        <div className={styles.benefit_cards}>
            <Benefit_card heading="Free app" src="/bannedCash.png" alt="free app" width={180} height={180} text="App is free and you only need to sign up and create profile of your dog"></Benefit_card>
            <Benefit_card heading="You just need a mobile phone" src="/holdingSmartphone.png" alt="using smartphone" width={170} height={180} text="With mobile phone everyone can scan QR code and help you to find your dog"></Benefit_card>
            <Benefit_card heading="No radiation" src="/noWifi.png" alt="no wifi" width={180} height={170} text="Using QR code, there is no radiation which affect on the dog like GPS tracker"></Benefit_card>
        </div>
    </div>
}
export default Benefits;