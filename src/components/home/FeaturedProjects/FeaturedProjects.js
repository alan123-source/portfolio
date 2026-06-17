import projects from "@/data/projects";
import Container from "@/components/common/Container/Container";
import  SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";

import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects(){
    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle>
                    Featured 
                     <br/>
                    Projects
                </SectionTitle>

                <div className={styles.grid}>
                    {
                        projects.map((project)=>(
                            <ProjectCard 
                                key={project.id}
                                project={project}
                            />
                        ))

                    }
                </div>
            </Container>
        </section>
    )
}