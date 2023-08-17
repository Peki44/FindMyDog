'use client'
import Image from "next/image";
import Button from "../../atoms/Button";
import styles from './Navigation.module.css';
import { useState } from "react";
import Link from "next/link";

const Navigation=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
    setIsOpen(!isOpen);
    };

    return <div className={styles.navigation}>
        <div className={styles.image}>
            <Image src="/Logo.svg" alt="logo" width={184} height={55}></Image>
        </div>
        <div className={!isOpen ? `${styles.navbar}` : `${styles.sidebar}`}>
            {/* <Button text="About us" link="/about"></Button>
            <Button text="Download" link="/about"></Button>
            <Button text="Benefits" link="/about"></Button>
            <Button text="Reviews" link="/about"></Button> */}
            <Link href="#about" className={styles.link}>About us</Link>
            <Link href="#download" className={styles.link}>Download</Link>
            <Link href="#benefits" className={styles.link}>Benefits</Link>
            <Link href="#reviews" className={styles.link}>Reviews</Link>
        </div>
        <div className={styles.icon} onClick={toggleNavbar}>
            {!isOpen ? <Image src="/menuIcon.svg" alt="menuIcon" width={35} height={35} ></Image> : <Image src="/closeIcon.svg" alt="closeIcon" width={35} height={35} />}
        </div>
    </div>
}
export default Navigation;