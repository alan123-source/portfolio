import Container from "@/components/common/Container/Container";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import styles from "./ContactPreview.module.css";
import siteConfig from "@/constants/siteConfig";
import Button from "@/components/common/Button/Button";


export default function ContactPreview(){

    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle>
                    Let's Build
                    <br/>
                    Something Together
                </SectionTitle>
                <p className={styles.description}>
                    I'm always open to internships,
                    collaborations, and interesting
                    opportunities. Feel free to reach out
                    if you'd like to work together.
                </p>
                <Button
                   href="/contact"
                   variant="primary"
                >
                    Get in Touch
                </Button>
               
            </Container>
        </section>
    )

}