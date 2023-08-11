import Image from "next/image";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import Email_form from "../../molecules/Email_form";
import styles from './Newsletter.module.css';

const Newsletter=()=>{
    return <div className={styles.newsletter}>
        <div className={styles.heading}>
          <Heading text="Want to stay informed about new features of this app?" size="_32" strong="extrabold" color="blue"></Heading>
          <Label text="This app will be constantly updated and will have more and more features" size="_20" strong="bold" color="blue"></Label>
          <div className={styles.image}>
            <Image src="/dogWithBag.png" alt="dog" width={300} height={200}></Image>
          </div>
        </div>
        <div className={styles.form}>
            <Email_form></Email_form>
        </div>
    </div>
}
export default Newsletter;