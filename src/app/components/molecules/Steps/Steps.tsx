import Image from "next/image";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import styles from './Steps.module.css';

const Steps=()=>{
    return <div className={styles.steps}>
        <Heading text="How does this App work?" size="_32" strong="extrabold" color="blue"></Heading>
        <div className={styles.row}>
            <Image src="/number-1.png" alt="one" width={38} height={38}></Image>
            <Label text="Download App for free" size="_24" strong="bold" color="blue"></Label>
        </div>
        <div className={styles.row}>
            <Image src="/number-2.png" alt="two" width={38} height={38}></Image>
            <Label text="Register or log in" size="_24" strong="bold" color="blue"></Label>
        </div>
        <div className={styles.row}>
            <Image src="/number-3.png" alt="three" width={38} height={38}></Image>
            <Label text="Create a profile for your dog and generate QR code" size="_24" strong="bold" color="blue"></Label>
        </div>
        <div className={styles.row}>
            <Image src="/number-4.png" alt="four" width={38} height={38}></Image>
            <Label text="Put QR code on dog’s collar" size="_24" strong="bold" color="blue"></Label>
        </div>
        <div className={styles.row}>
            <Image src="/number-5.png" alt="five" width={38} height={38}></Image>
            <Label text="Scan QR with your mobile phone" size="_24" strong="bold" color="blue"></Label>
        </div>
    </div>
}
export default Steps;