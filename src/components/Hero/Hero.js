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
                    
                     <div className={styles.badge}>
                        FULL STACK DEVELOPER
                     </div>

                      <h1 className={styles.title}>
                        {siteConfig.name}
                     </h1>
                     
                     <p className={styles.description}>
                          Building modern web applications and solving
                            real-world problems through full-stack development,
                            software engineering, and scalable backend systems.
                     </p>

                     <div className={styles.techStack}>
                          <span>Next.js</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                     </div>
                     <div className={styles.actions}>
                        <Button href="/projects" variant="primary">View Projects</Button>
                        <Button href="/resume/resume.pdf" variant="secondary" >Download Resume</Button>
                     </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image 
                        src="/images/profile.jpeg"
                        alt={siteConfig.name}
                        width={420}
                        height={350}
                        className={styles.image}
                        priority
                    />
                </div>
               </div>
            </Container>
        </section>
    );

}