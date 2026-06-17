import styles from "./Button.module.css";
import Link from "next/link";
export default function Button({children,href,variant="primary",}){

    if(href){

        const isExternal=href.startsWith("http");
        const buttonClass=`${styles.button} ${styles[variant]}`;

        if(isExternal){
            return(
                <a
                  href={href}
                  target="blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                    {children}
                </a>
            )
        }
        return (
            <Link 
               href={href}
               className={buttonClass}
            >
               {children}
            </Link>
        );
    }

    return (
        <button 
        className={buttonClass}>
            {children}
        </button>
    );
}