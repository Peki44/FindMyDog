import styles from './InfoLabel.module.css';

interface InfoLabel{
    text:string;
    id:string;
}

const InfoLabel=(
    {text,id}:InfoLabel
)=>{
    return <div className={styles.box}>
        <p className={styles.label} id={id}>{text}</p>
    </div>
}
export default InfoLabel;