import Image from 'next/image';
import styles from './Location.module.css';

const Location=()=>{
    return <div className={styles.location}>
        <Image src="/Logo.svg" alt='logo' width={184} height={55}></Image>
        <Image src="/Croatia.svg" alt='logo' width={184} height={60}></Image>
    </div>
}
export default Location;