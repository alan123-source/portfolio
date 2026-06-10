import styles from "./Hero.module.css";
export default function Hero() {

    return(
        <section className={styles.hero}>
            <h1 className={styles.title}>Alan Paul John</h1>
            <p className={styles.description}>
                Welcome to my portfolio website
            </p>
        </section>
    );

}