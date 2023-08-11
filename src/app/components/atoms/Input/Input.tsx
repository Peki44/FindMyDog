import styles from './Input.module.css';

interface InputProps{
    type:'text'|'email'|'password';
    placeholder:string;
    id:string;
}
const Input=(
    {type='text',placeholder,id}:InputProps
)=>{
    return <input className={styles.input} type={type} placeholder={placeholder} id={id}></input>
        
}
export default Input;  