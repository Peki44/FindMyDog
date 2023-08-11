import styles from './Heading.module.css';

interface HeadingProps{
    text:string;
    strong?:'bold'|'extrabold';
    size?: '_24'|'_32'|'_36'|'_40'|'_48';
    color?:'blue'|'white'|'black';
}
const Heading=(
    {text,strong='extrabold',size='_40',color='white'}:HeadingProps
)=>{
    return <p className={`${styles.heading} ${styles[strong]} ${styles[size]} ${styles[color]}`}>{text}</p>
}
export default Heading;