import Image from "next/image";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import styles from './UserForm.module.css';
import InfoLabel from "../../atoms/InfoLabel";

const UserForm=()=>{
    return <div className={styles.user_form}>
        <Heading text="Rex" size="_36" strong="bold"></Heading>
        <div className={styles.image}>
            <Image src="/dogSitting.png" alt="dog" width={100} height={120} id="image"></Image>
        </div>
        <div className={styles.forms}>
            <Label text='Breed' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text="Breed" id="breed"></InfoLabel>
            {/* <Information_input type="text" placeholder="" id="breed"></Information_input> */}
            <Label text='Owner' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text="Owner" id="owner"></InfoLabel>
            <Label text='Phone' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text="Phone" id="phone"></InfoLabel>
            <Label text='Email' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text="Email" id="email"></InfoLabel>
            <Label text='Address' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text="Address" id="address"></InfoLabel>
        </div>
    </div>
}
export default UserForm;