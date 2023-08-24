import Image from "next/image";
import Steps from "../../molecules/Steps";
import styles from './About.module.css';
import About_us from "../../molecules/About_us";

const About=()=>{
    return <div id="about" className={styles.about}>
        <About_us></About_us>
        <div className={styles.section}>
            <Steps></Steps>
            <Image className={styles.image} src="/womenWithDog.png" alt="women with dog" width={350} height={260}></Image>
        </div>
    </div>
}
export default About;