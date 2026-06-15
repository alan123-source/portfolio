import styles from "./Hero.module.css";
import Container from "@/components/common/Container/Container";
import Button from "@/components/common/Button/Button";
import siteConfig from "@/constants/siteConfig";
import Image from "next/image";

export default function Hero() {

    return(
        <section className={styles.hero}>
            <Container>
               <div className={styles.wrapper}>
                 <div className={styles.content}>
                     <h1 className={styles.title}>
                        Hi,I'm {siteConfig.name}
                     </h1>
                     <h2 className={styles.subtitle}>
                        {siteConfig.role}
                     </h2>
                     <p className={styles.description}>
                        I build modern web applications using JavaScript,
                        React, Next.js, Node.js, Express.js and MongoDB.
                     </p>
                     <div className={styles.actions}>
                        <Button href="/projects">View Projects</Button>
                        <Button href="/contact">Contact Me</Button>
                     </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image 
                        src="/images/profile.jpeg"
                        alt={siteConfig.name}
                        width={300}
                        height={300}
                        className={styles.image}
                        priority
                    />
                </div>
               </div>
            </Container>
        </section>
    );

}