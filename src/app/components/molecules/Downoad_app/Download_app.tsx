import Image from "next/image";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import styles from './Download_app.module.css';

const Download_app=()=>{
    return <div className={styles.download}>
        <Heading text="Download app and create a profile of your dog" strong="extrabold" color="blue" size="_40"></Heading>
        <Button text="Download"></Button>
        <Image src="/pointingHand.png" alt="hand" width={140} height={260} className={styles.image}></Image>
    </div>
}
export default Download_app;