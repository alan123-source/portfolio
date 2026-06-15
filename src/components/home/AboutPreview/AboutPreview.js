import Container from "@/components/common/Container/Container";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import styles from "./AboutPreview.module.css";

export default function AboutPreview(){

    return (

        <section className={styles.section}>
            <Container>
                <SectionTitle>
                    About Me
                </SectionTitle>

                <p className={styles.description}>
                    I am a Computer Science student passionate about
                    full-stack web development, problem solving, and
                    software engineering. I enjoy building practical
                    applications and continuously improving my skills in
                    modern web technologies.
                </p>
                <p className={styles.description}>
                    Currently, I am focused on JavaScript, React,
                    Next.js, Node.js, Data Structures & Algorithms,
                    and building production-ready projects
                </p>

            </Container>
        </section>

    )

}