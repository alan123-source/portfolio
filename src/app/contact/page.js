import PageLayout from "@/components/common/PageLayout/PageLayout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import siteConfig from "@/constants/siteConfig";
import styles from "./contact.module.css";
export default function ContactPage(){
    return (
      
        <PageLayout>
            <PageHeader title="Contact"
                          description="  Feel free to reach out for opportunities,
                                         collaborations, or project discussions."
              />
            <section className={styles.section}>
                <div className={styles.card}>
                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>
                    {siteConfig.email}
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.card}>
                    <p className={styles.label}>Location</p>
                    <p className={styles.value}>
                    {siteConfig.location}
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.card}>
                    <p className={styles.label}>GitHub</p>
                    <p className={styles.value}>
                    {siteConfig.github || "Coming Soon"}
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.card}>
                    <p className={styles.label}>LinkedIn</p>
                    <p className={styles.value}>
                    {siteConfig.linkedin || "Coming Soon"}
                    </p>
                </div>
            </section>
              
        </PageLayout>

    )
}