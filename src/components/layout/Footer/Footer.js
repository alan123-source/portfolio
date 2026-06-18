
import styles from "./Footer.module.css";
import Image from "next/image";
import siteConfig from "@/constants/siteConfig"; 
export default function Footer(){
    return (
        <footer className={styles.footer}>
           
            <h3 className={styles.name}>
                {siteConfig.name}
            </h3>
            <p className={styles.role}>
                {siteConfig.role}
            </p>
            <p className={styles.motto}>
                Building, learning, and growing one project at a time.
           </p>
            <div className={styles.links}>
                <a
                   href={siteConfig.github}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                   <Image 
                      src="/icons/github.svg"
                      alt="Github"
                      width={18}
                      height={18}
                      className={styles.icon}
                   />
                    GitHub
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >   
                   <Image 
                      src="/icons/linkedin.svg"
                      alt="Linkedin"
                      width={18}
                      height={18}
                      className={styles.icon}
                   />
                    Linkedin
                </a>
                <a href={`mailto:${siteConfig.email}`}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <Image 
                      src="/icons/gmail.svg"
                      alt="Email"
                      width={18}
                      height={18}
                      className={styles.icon}
                    />
                     Email
                </a>

               
            </div>
               <p className={styles.built}>
                    Designed and Developed with Next.js
                </p>
              <p className={styles.copy}>
                     © 2026 {siteConfig.name}
                </p>
          
        </footer>
    );
}