import Navigation from "../../molecules/Navigation";
import User_form from "../../molecules/User_form";
import styles from './User.module.css';

const User=()=>{
    return <div className={styles.user}>
        <Navigation></Navigation>
        <User_form></User_form>        
        
    </div>
}
export default User;