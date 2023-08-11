import Image from "next/image";
import Button from "../../atoms/Button";
import styles from './Navigation.module.css';

const Navigation=()=>{
    return <div className={styles.navigation}>
        <div className={styles.image}>
            <Image src="/Logo.svg" alt="logo" width={184} height={55}></Image>
        </div>
        <div className={styles.links}>
            <Button text="About us" link="/about"></Button>
            <Button text="Download" link="/about"></Button>
            <Button text="Benefits" link="/about"></Button>
            <Button text="Reviews" link="/about"></Button>
        </div>
    </div>
}
export default Navigation;