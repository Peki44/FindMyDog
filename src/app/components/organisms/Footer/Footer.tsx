import Label from '../../atoms/Label';
import Footer_text from '../../molecules/Footer_text';
import Location from '../../molecules/Location';
import styles from './Footer.module.css';

const Footer=()=>{
    return <div className={styles.footer}>
        <div className={styles.row}>
            <Location></Location>
            <Footer_text></Footer_text>
        </div>
        <div className={styles.row}>
            <Label text='© 2023 FindMyDog | All rights reserved.'strong="regular" color="white" size="_16"></Label>
        </div>
    </div>
}
export default Footer;