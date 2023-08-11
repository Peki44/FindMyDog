import Image from "next/image";
import Heading from "../../atoms/Heading";
import Information_input from "../../atoms/Information_input";
import Label from "../../atoms/Label";
import styles from './User_form.module.css';

const Email_form=()=>{
    return <div className={styles.user_form}>
        <Heading text="Rex" size="_36" strong="bold"></Heading>
        <div className={styles.image}>
            <Image src="/dogSitting.png" alt="dog" width={100} height={120} id="image"></Image>
        </div>
        <div className={styles.forms}>
            <Label text='Breed' strong="bold" color="white" size="_16"></Label>
            <Information_input type="text" placeholder="" id="breed"></Information_input>
            <Label text='Owner' strong="bold" color="white" size="_16"></Label>
            <Information_input type="text" placeholder="" id="owner"></Information_input>
            <Label text='Phone' strong="bold" color="white" size="_16"></Label>
            <Information_input type="text" placeholder="" id="phone"></Information_input>
            <Label text='Email' strong="bold" color="white" size="_16"></Label>
            <Information_input type="email" placeholder="" id="email"></Information_input>
            <Label text='Address' strong="bold" color="white" size="_16"></Label>
            <Information_input type="text" placeholder="" id="address"></Information_input>
        </div>
    </div>
}
export default Email_form;