import skills from "@/data/skills";
import Container from "@/components/common/Container/Container";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import SkillCard from "@/components/skills/SkillCard/SkillCard";


import styles from "./SkillsPreview.module.css";

export default function SkillsPreview(){

    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle>
                    Skills
                </SectionTitle>

                <div className={styles.grid}>
                    {
                        skills.map((skill)=>(
                            <SkillCard 
                              key={skill.id}
                              skill={skill}
                            />
                        ))
                    }
                </div>
            </Container>
        </section>
    );

}