import Container from "@/components/common/Container/Container";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import styles from "./ContactPreview.module.css";
import siteConfig from "@/constants/siteConfig";


export default function ContactPreview(){

    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle>
                    Contact
                </SectionTitle>
                <p className={styles.description}>
                 Interested in working together or discussing a
                 project? Feel free to reach out.
                </p>
                <div className={styles.contactInfo}>
                    <p>
                        Email:{siteConfig.email}
                    </p>
                    <p>
                       Location:{siteConfig.location}
                    </p>
                </div>
            </Container>
        </section>
    )

}