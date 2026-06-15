import styles from "./Button.module.css";
import Link from "next/link";
export default function Button({children,href}){

    if(href){

        const isExternal=href.startsWith("http");

        if(isExternal){
            return(
                <a
                  href={href}
                  target="blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                    {children}
                </a>
            )
        }
        return (
            <Link 
               href={href}
               className={styles.button}
            >
               {children}
            </Link>
        );
    }

    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}