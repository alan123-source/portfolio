import styles from "./PageLayout";
import Container from "../Container/Container";

export default function PageLayout({children}){
  
    return (
        <main className={styles.page}>
            <Container>
                {children}
            </Container>
        </main>
    )

}