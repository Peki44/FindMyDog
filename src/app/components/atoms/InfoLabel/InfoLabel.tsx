import Image from 'next/image';
import styles from './InfoLabel.module.css';

interface InfoLabel{
    text:string;
    id:string;
    src:string;
}

const InfoLabel=(
    {text,id,src}:InfoLabel
)=>{
    return <div className={styles.box}>
        <Image className={styles.image} src={src} alt="icon" width={25} height={25}></Image>
        <p className={styles.label} id={id}>{text}</p>
    </div>
}
export default InfoLabel;