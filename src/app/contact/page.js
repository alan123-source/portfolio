import PageLayout from "@/components/common/PageLayout/PageLayout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import siteConfig from "@/constants/siteConfig";
import styles from "./contact.module.css";
import Image from "next/image";



export default function ContactPage(){
 
    return (
      
        <PageLayout>
            <PageHeader title="Contact"
                          description="  Feel free to reach out for opportunities,
                                         collaborations, or project discussions."
              />
           <div className={styles.grid}>
 
  
  <div className={styles.card}>
    <a href={`mailto:${siteConfig.email}`}>
         <div className={styles.header}>
          <Image 
             src="/icons/gmail.svg"
             alt="Email"
             width={24}
             height={24}
             className={styles.icon}
          />
          <p className={styles.label}>Email</p>
     </div>
    </a>
    
  
    <p className={styles.value}>
      {siteConfig.email}
    </p>
  </div>

  <div className={styles.card}>
    <div className={styles.header}>
      
         <Image 
            src="/icons/location.svg"
            alt="Location"
            width={24}
            height={24}
            className={styles.icon}
         />
          <p className={styles.label}>Location</p>
    </div>
    
    <p className={styles.value}>
      {siteConfig.location}
    </p>
  </div>

  <div className={styles.card}>
    <div className={styles.header}>
        <Image 
           src="/icons/github.svg"
           alt="Github"
           width={24}
           height={24}
           className={styles.icon}
        />
        <p className={styles.label}>GitHub</p>
        
    </div>
    

    <a
      href={siteConfig.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      View GitHub Profile →
    </a>
  </div>

  <div className={styles.card}>
    <div className={styles.header}>
      <Image 
        src="/icons/linkedin.svg"
        alt="Linkedin"
        width={24}
        height={24}
        className={styles.icon}
      />
      <p className={styles.label}>LinkedIn</p>
    </div>
    

    <a
      href={siteConfig.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      View LinkedIn Profile →
    </a>
  </div>
</div>
  <section className={styles.cta}>
    <h2 className={styles.ctaTitle}>
      Open to Oppurtunites
    </h2>
    <p className={styles.ctaDescription}>
      I,m always interested in internship,collaboration,open-source contributions,and exciting projects.
    </p>
  </section>
              
        </PageLayout>

    )
}