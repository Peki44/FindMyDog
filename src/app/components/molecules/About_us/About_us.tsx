import Label from "../../atoms/Label";
import Heading from "../../atoms/Heading";
import styles from './About_us.module.css';

const About_us=()=>{
    return <div className={styles.about}>
            <Heading text="About us" size="_36" color="blue" strong="extrabold"></Heading>
            <p className={styles.text}>
                    <span className={styles.words}>FindMyDog</span> is a newly created application that gives dog owners 
                    the opportunity to easily find their dogs if they get lost or run away 
                    from home. Using this app, you need to <span className={styles.words}>enter information</span> about 
                    the dog on the basis of which the <span className={styles.words}>QR code</span> will be created. That QR code
                    will be on the <span className={styles.words}>dogs collar</span> and anyone who finds the dog will be able to 
                    <span className={styles.words}> scan it</span>. In this way, the person who finds the dog will find out information 
                    about the dog and will be able to quickly return it to the owner.
                </p>
            {/* <div className={styles.text}>
            <Label text="FindMyDog is a newly created application that gives dog owners 
                    the opportunity to easily find their dogs if they get lost or run away 
                    from home. Using this app, you need to enter information about 
                    the dog on the basis of which the QR code will be created. That QR code
                    will be on the dog's collar and anyone who finds the dog will be able to 
                    scan it. In this way, the person who finds the dog will find out information 
                    about the dog and will be able to quickly return it to the owner." size="_24" strong="bold" color="blue"></Label>
            </div> */}
           </div>
}
export default About_us;