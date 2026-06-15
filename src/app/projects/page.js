import PageLayout from "@/components/common/PageLayout/PageLayout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import projects from "@/data/projects";
import styles from "./page.module.css";
export default function ProjectsPage(){

    return (
       
        <PageLayout>
            <PageHeader title="Projects"
                           description="A collection of projects showcasing my skills in full-stack development, IoT, and problem solving."
                />
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
        </PageLayout>
    )

}