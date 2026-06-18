
import styles from "./Footer.module.css";
import {Mail,FolderGit,Link} from "lucide-react";
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
                    <FolderGit size={18}/>
                    GitHub
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >   <Link size={18}/>
                    Linkedin
                </a>
                <a href={`mailto:${siteConfig.email}`}>
                    <Mail size={18}/>
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