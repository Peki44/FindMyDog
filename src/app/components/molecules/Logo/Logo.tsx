import Image from "next/image"
import styles from './Logo.module.css';


const Logo = ()=>{
    return <div className={styles.logo}>
            <Image src="/Logo.svg" alt="logo" width={184} height={55}></Image>
        </div>
}
export default Logo;