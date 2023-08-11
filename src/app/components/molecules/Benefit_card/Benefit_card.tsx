import Image, { StaticImageData } from "next/image";
import Label from "../../atoms/Label";
import styles from './Benefit_card.module.css';
import Heading from "../../atoms/Heading";

interface BenefitProps{
    heading:string;
    text:string;
    src:string| StaticImageData;
    alt:string;
    width:number;
    height:number;
}

const Benefit_card=(
    {heading,text,src,alt,width,height}:BenefitProps
)=>{
    return <div className={styles.benefit}>
        <Heading text={heading} size="_24" strong="bold" color="black"></Heading>
        <Image src={src} alt={alt} width={width} height={height}></Image>
        <Label text={text} size="_16" color="black"></Label>
    </div>
}
export default Benefit_card;