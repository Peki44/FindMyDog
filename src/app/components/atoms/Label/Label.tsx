import styles from './Label.module.css';

interface LabelProps{
    text:string;
    strong?:'regular'|'bold';
    size?:'_16'|'_20'|'_24';
    color?:'white'|'blue'|'black';
}

const Label=(
    {text,strong='bold',size='_20',color='white'}:LabelProps
)=>{
    return <p className={`${styles.label} ${styles[strong]} ${styles[size]} ${styles[color]}`}>{text}</p>
}
export default Label;