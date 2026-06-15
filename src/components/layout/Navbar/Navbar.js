"use client";
import Link from "next/link";
import Container from "@/components/common/Container/Container";
import {usePathname} from "next/navigation";
import styles from "./Navbar.module.css";
import navigation from "@/constants/navigation";
import siteConfig from "@/constants/siteConfig";


export default function Navbar(){
    
    const pathname=usePathname();

    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.wrapper}>
                    <Link href="/" className={styles.logo}>
                       {siteConfig.name}
                    </Link>

                    <div className={styles.links}>
                        {
                           navigation.map((link)=>(
                            <Link
                              key={link.href}
                              href={link.href}
                              className={`$styles.link} {
                                link.href==="/projects"
                                 ? pathname.startsWith("/projects")
                                   ?styles.active
                                   :""
                                 :pathname===link.href
                                 ?styles.active
                                 :""
                              }`}
                            >
                               {link.label}
                            </Link>
                           ))
                        }
                    </div>
                </div>
            </Container>
           
        </nav>
    );
}