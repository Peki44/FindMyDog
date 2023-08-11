import Image from "next/image";
import Steps from "../../molecules/Steps";
import styles from './About.module.css';
import About_us from "../../molecules/About_us";

const About=()=>{
    return <div className={styles.about}>
        <About_us></About_us>
        <div className={styles.section}>
            <Steps></Steps>
            <div className={styles.image}>
                <Image src="/womenWithDog.png" alt="women with dog" width={370} height={280}></Image>
            </div>
        </div>
    </div>
}
export default About;