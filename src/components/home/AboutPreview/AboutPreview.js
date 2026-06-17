import Container from "@/components/common/Container/Container";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import styles from "./AboutPreview.module.css";
import Button from "@/components/common/Button/Button";
export default function AboutPreview(){

    return (

        <section className={styles.section}>
            <Container>
                <SectionTitle>
                    About Me
                </SectionTitle>

               <p className={styles.description}>
                    I'm a Computer Engineering student and aspiring
                    Full Stack Developer who enjoys building modern web
                    applications and solving real-world problems through
                    software engineering.

                    Currently, I'm focused on Next.js, Node.js,
                    Data Structures & Algorithms, and building
                    production-ready projects while continuously
                    improving my problem-solving skills.
               </p>
               <div className={styles.focus}>
                 <span>Next.js</span>
                 <span>Node.js</span>
                 <span>DSA</span>
                 <span>Backend Development</span>
                 <span>React</span>
                 
               </div>
               <Button
                    href="/about"
                    variant="secondary"
                 >
                    More About Me
                 </Button>

            </Container>
        </section>

    )

}