import Image, { StaticImageData } from "next/image";
import Label from "../../atoms/Label";
import styles from './Review_card.module.css';
import profilePic from '../public/bannedCash.png'

interface ReviewProps{
    heading:string;
    text:string;
    src:string| StaticImageData;
    alt:string;
}

const Review_card=(
    {heading,text,src,alt}:ReviewProps
)=>{
    return <div className={styles.review}>
        <Label text={heading} size="_20" strong="bold" color="blue"></Label>
        <Image src={src} alt={alt} width={180} height={30}></Image>
        <Label text={text} size="_16" color="blue"></Label>
    </div>
}
export default Review_card;