import Image from "next/image";
import Heading from "../../atoms/Heading";
import Label from "../../atoms/Label";
import Review_card from "../../molecules/Review_card";
import styles from './Reviews.module.css';

const Reviews=()=>{
    return <div id="reviews" className={styles.reviews}>
        <Heading text="What others say about this app?!" size="_36" strong="extrabold" color="blue"></Heading>
        <Label text="Here are some reviews about this app" size="_24" strong="bold" color="blue"></Label>
        <div className={styles.review_cards}>
            <div className={styles.item}>
                <Review_card heading="Marko P." src="/fiveStars.png" alt="five stars" text="Best dog app I have seen!"></Review_card>
            </div>
            <div className={styles.item}>
                <Review_card heading="Ana H." src="/fiveStars.png" alt="five stars" text="What a lovely app!"></Review_card>
            </div>
            <div className={styles.item}>
                <Review_card heading="Luka M." src="/fiveStars.png" alt="five stars" text="Very interesting and useful app!"></Review_card>
            </div>
            <div className={styles.image}>
                <Image src="/boyWithTablet.png" alt="boy" width={250} height={210}></Image>
            </div>
        </div>
    </div>
}
export default Reviews;