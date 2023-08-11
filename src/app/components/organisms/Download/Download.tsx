import Image from "next/image";
import Download_app from "../../molecules/Downoad_app";
import styles from './Download.module.css';

const Download=()=>{
    return <div className={styles.download}>
        <div className={styles.grid_item}>
            <Image src="/phone.png" alt="phone" width={200} height={400} ></Image>
        </div>
        <Download_app></Download_app>
    </div>
}
export default Download;