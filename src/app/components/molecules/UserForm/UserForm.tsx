import Image from "next/image";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import styles from './UserForm.module.css';
import InfoLabel from "../../atoms/InfoLabel";

export interface UserFormProps {
    data?: any;
}   

const UserForm=(
    {data}:UserFormProps
)=>{
    return <div className={styles.user_form}>
        <Heading text={data.dogsName} size="_36" strong="bold"></Heading>
        <div className={styles.image}>
            <Image src={data.profileImageUri} alt="dog" width={160} height={160} id="image" className={styles.photo}></Image>
        </div>
        <div className={styles.forms}>
            <Label text='Breed' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text={data.breed} id="breed" src="/paw.svg"></InfoLabel>
            <Label text='Owner' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text={data.owner} id="owner" src="/boy.svg"></InfoLabel>
            <Label text='Phone' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text={data.phone} id="phone" src="/phoneCall.svg"></InfoLabel>
            <Label text='Email' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text={data.email} id="email" src="/mail.svg"></InfoLabel>
            <Label text='Address' strong="bold" color="white" size="_16"></Label>
            <InfoLabel text={data.address} id="address" src="/dogHouse.svg"></InfoLabel>
        </div>
    </div>
}
export default UserForm;