import Logo from "../../molecules/Logo";
import Navigation from "../../molecules/Navigation";
import UserForm from "../../molecules/UserForm";
import styles from './User.module.css';

export interface UserProps {
    data?: any;
}

const User=(
    {data}:UserProps
)=>{
    return <div className={styles.user}>
        <Logo></Logo>
        <UserForm data={data}></UserForm> 
    </div>
}
export default User;