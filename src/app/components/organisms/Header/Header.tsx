import Image from "next/image";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import Navigation from "../../molecules/Navigation";
import styles from './Header.module.css';

const Header=()=>{
    return <div className={styles.header}>
        <Navigation></Navigation> 
        <div className={styles.content}>
            <div className={styles.text}>
                <Heading text="Find your dogs when they get lost" strong="extrabold" color="white" size="_48"></Heading>
                <Label text='Using this app your dogs will be found easily' strong="bold" color="white" size="_24"></Label>
            </div>
                <Image className={styles.image} src="/manWalkingDog.png" alt="dog" width={330} height={290}></Image>
        </div>
    </div>
}
export default Header;