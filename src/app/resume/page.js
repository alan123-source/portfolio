import PageLayout from "@/components/common/PageLayout/PageLayout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Button from "@/components/common/Button/Button";
import styles from "./resume.module.css";
import Image from "next/image";
export default function ResumePage(){

    return (
       <PageLayout>
        <PageHeader title="Resume" 
                            description="View my education,skills and professional experience."          
         />

         <section className={styles.section}>
         <div className={styles.card}>

         <div className={styles.titleWrapper}>

            <Image 
              src="/icons/profile.svg"
              alt="Profile"
              width={40}
              height={40}
            />
            <h2 className={styles.cardTitle}>
               Professional Summary
            </h2>
         </div>

            <p className={styles.text}>Computer Science student passionate about full-stack
                web development,software engineering, and building 
                real world applications using modern web technologies
            </p>
         </div>
         </section>

         <section className={styles.section}>
          <div className={styles.card}>

          <div className={styles.titleWrapper}>
            <Image 
              src="/icons/education.svg"
              alt="eductaion"
              width={40}
              height={40}
            />
            <h2 className={styles.cardTitle}>
               Education
            </h2>
          </div>

            <p className={styles.text}>
                B.Tech in Computer Science and Engineering.
            </p>

          </div>
         </section>

  <section className={styles.section}>
        <div className={styles.card}>
         <div className={styles.titleWrapper}>
            <Image 
              src="/icons/experience.svg"
              alt="Experience"
              width={40}
              height={40}
            />
          <h2 className={styles.cardTitle}>
            Experience
          </h2>
         </div>


          <h3 className={styles.role}>
            Chair – FOSS Club CEP
          </h3>

          <p className={styles.duration}>
            Mar 2026 – Present
          </p>

          <ul className={styles.points}>
            <li>
              Leading the FOSS Club community and promoting open-source culture.
            </li>

            <li>
              Organizing technical events, workshops, and collaborative initiatives.
            </li>

            <li>
              Coordinating activities and fostering project-based learning.
            </li>

            <li>
              Developing leadership, communication, and teamwork skills.
            </li>
          </ul>

          <hr className={styles.divider} />

          <h3 className={styles.role}>
            Vice Chair – FOSS Club CEP
          </h3>

          <p className={styles.duration}>
            Mar 2025 – Mar 2026
          </p>

          <ul className={styles.points}>
            <li>
              Assisted in organizing technical events and workshops.
            </li>

            <li>
              Promoted open-source culture and collaborative learning.
            </li>

            <li>
              Worked closely with club members on community initiatives.
            </li>

            <li>
              Strengthened teamwork and leadership skills.
            </li>
          </ul>
        </div>
      </section>    

         <section className={styles.section}>

          <div className={styles.card}>

           <div className={styles.titleWrapper}>

            <Image 
              src="/icons/skills.svg"
              alt="Skills"
              width={40}
              height={40}
            />
            <h2 className={styles.cardTitle}>Technical Skills</h2>

           </div>

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

         <Button href="/resume/resume.pdf"
         
         >
            Download Resume
         </Button>
                
       </PageLayout>
    )

}