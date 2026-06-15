import projects from "@/data/projects";
import PageLayout from "@/components/common/PageLayout/PageLayout";
import styles from "./page.module.css";
import Button from "@/components/common/Button/Button";

export default async function ProjectDetailsPage({
    params
}) {
    const {slug}=await params;
    const project=projects.find((project)=>project.slug===slug);
    return (
      
        <PageLayout>
                 <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.actions}>
                    {
                        project.githubUrl &&(
                            <Button href={project.githubUrl}>
                                Github
                            </Button>
                        )
                    }
                    {
                        project.liveUrl &&(
                            <Button href={project.liveUrl}>
                                Live Demo
                            </Button>
                        )
                    }
                </div>
                <h2 className={styles.sectionTitle}>Technologies</h2>

                <div className={styles.badges}>
                    {
                        project.technologies.map((technology)=>(
                            <span key={technology}
                                className={styles.badge}
                            >
                                {technology}
                            </span>
                        ))
                    }
                </div>

                <h2>Key Features</h2>
                <ul className={styles.features}>
                    {
                        project.features.map((feature)=>(
                            <li key={feature}>{feature}</li>
                        ))
                    }
                </ul>
        </PageLayout>
    )
}