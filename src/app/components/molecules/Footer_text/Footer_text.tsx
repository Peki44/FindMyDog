import Label from "../../atoms/Label";
import styles from './Footer_text.module.css';

const Footer_text=()=>{
    return <div className={styles.row}>
        <div className={styles.column}>
            <Label text='Navigation' strong="bold" color="white" size="_20"></Label>
            <Label text='Home' strong="regular" color="white" size="_16"></Label>
            <Label text='About us' strong="regular" color="white" size="_16"></Label>
            <Label text='Download' strong="regular" color="white" size="_16"></Label>
            <Label text='Benefits' strong="regular" color="white" size="_16"></Label>
            <Label text='Reviews' strong="regular" color="white" size="_16"></Label>
        </div>
        <div className={styles.column}>
            <Label text='Legal' strong="bold" color="white" size="_20"></Label>
            <Label text='Terms of service' strong="regular" color="white" size="_16"></Label>
            <Label text='Privacy Policy' strong="regular" color="white" size="_16"></Label>
            <Label text='Cookie Policy' strong="regular" color="white" size="_16"></Label>
        </div>
        <div className={styles.column}>
            <Label text='Contact us' strong="bold" color="white" size="_20"></Label>
            <Label text='info@abc.com' strong="regular" color="white" size="_16"></Label>
            <Label text='+385 998765432' strong="regular" color="white" size="_16"></Label>
        </div>
    </div>
}
export default Footer_text;