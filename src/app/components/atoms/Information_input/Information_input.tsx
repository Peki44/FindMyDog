import styles from './Information_input.module.css';

interface InputProps{
    type:'text'|'email'|'password';
    placeholder:string;
    id:string;
}
const Information_input=(
    {type='text',placeholder,id}:InputProps
)=>{
    return <input className={styles.input} type={type} placeholder={placeholder} id={id}></input>
        
}
export default Information_input;  