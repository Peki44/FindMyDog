import Link from "next/link";
import styles from './Button.module.css';

interface ButtonProps{
    text:string;
    type?:'button'|'submit'|'reset';
    link?:string;
    onClick?:()=>void;
}


const Button=(
    {text,type='button',link,onClick}:ButtonProps
)=>{
    if(link){
        return(
            <Link legacyBehavior href={link}>
                <a className={styles.link}>{text}</a>
            </Link>
        )
    }else{
        return(
            <button className={styles.button} type={type} onClick={onClick}>
                {text}
            </button>
        )
    }
    
}
export default Button;