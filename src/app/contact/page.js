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
           <div className={styles.grid}>
  <div className={styles.card}>
    <p className={styles.label}>Email</p>
    <p className={styles.value}>
      {siteConfig.email}
    </p>
  </div>

  <div className={styles.card}>
    <p className={styles.label}>Location</p>
    <p className={styles.value}>
      {siteConfig.location}
    </p>
  </div>

  <div className={styles.card}>
    <p className={styles.label}>GitHub</p>

    <a
      href={siteConfig.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      View GitHub Profile
    </a>
  </div>

  <div className={styles.card}>
    <p className={styles.label}>LinkedIn</p>

    <a
      href={siteConfig.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      View LinkedIn Profile
    </a>
  </div>
</div>
              
        </PageLayout>

    )
}