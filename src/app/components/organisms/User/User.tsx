import Navigation from "../../molecules/Navigation";
import UserForm from "../../molecules/UserForm";
import styles from './User.module.css';

const User=()=>{
    return <div className={styles.user}>
        <Navigation></Navigation>
        <UserForm></UserForm> 
    </div>
}
export default User;