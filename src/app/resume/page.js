import PageLayout from "@/components/common/PageLayout/PageLayout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Button from "@/components/common/Button/Button";
import styles from "./resume.module.css";
export default function ResumePage(){

    return (
       <PageLayout>
        <PageHeader title="Resume" 
                            description="View my education,skills and professional experience."          
         />

         <section className={styles.section}>
         <div className={styles.card}>

         
            <h2 className={styles.cardTitle}>
                Professioal Summary
            </h2>
            <p className={styles.text}>Computer Science student passionate about full-stack
                web development,software engineering, and building 
                real world applications using modern web technologies
            </p>
         </div>
         </section>

         <section className={styles.section}>
          <div className={styles.card}>

          
            <h2 className={styles.cardTitle}>
                Education
            </h2>
            <p className={styles.text}>
                B.Tech in Computer Science and Engineering.
            </p>

          </div>
         </section>

         <section className={styles.section}>

          <div className={styles.card}>

         
            <h2 className={styles.cardTitle}>Technical Skills</h2>
            <div className={styles.skills}>
                <span className={styles.skill}>HTML&CSS</span>
                <span className={styles.skill}>JavaScript</span>
                <span className={styles.skill}>React</span>
                <span className={styles.skill}>Next.js</span>
                <span className={styles.skill}>Node.js</span>
                <span className={styles.skill}>Express.js</span>
                <span className={styles.skill}>MongoDB</span>
                <span className={styles.skill}>Python</span>
                <span className={styles.skill}>Docker</span>
                <span className={styles.skill}>DataStructures And Algorithm</span>


            </div>
          </div>
    
         </section>

         <Button href="/resume/resume.pdf">
            Download Resume
         </Button>
                
       </PageLayout>
    )

}