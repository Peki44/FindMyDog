import Image from "next/image";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import styles from './Email_form.module.css';

const Email_form=()=>{
    return <div className={styles.email_form}>
        <div className={styles.forms}>
            <Label text='Enter your name:' strong="bold" color="black" size="_16"></Label>
            <Input type="email" placeholder="Enter name" id="name"></Input>
            <Label text='Enter your email:' strong="bold" color="black" size="_16"></Label>
            <Input type="email" placeholder="Enter email" id="email"></Input>
            {/* <Label text='Sign up to our newsletter to receive the latest updates' strong="regular" color="black" size="_16"></Label> */}
        </div>
        <div className={styles.text}>
            <Label text='Sign up to our newsletter to receive the latest updates' strong="regular" color="black" size="_16"></Label>
        </div>
        <Button text="Sign up"></Button>
        <div className={styles.pen}>
            <Image src="/bluePen.png" alt="blue pen" width={70} height={140}></Image>
        </div>
    </div>
}
export default Email_form;