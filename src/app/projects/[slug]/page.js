import projects from "@/data/projects";
import PageLayout from "@/components/common/PageLayout/PageLayout";
import styles from "./page.module.css";
import Button from "@/components/common/Button/Button";
import Image from "next/image";
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
                    {
                        project.reportUrl &&(
                            <Button
                               href={project.reportUrl}
                               variant="primary"
                            >
                                View Report
                            </Button>
                        )
                    }
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={700}
                      className={`${styles.image} ${
                        project.imageHeight==="portrait"
                            ?styles.portrait
                            :styles.landscape
                      }`}
                    />
                </div>



                <h2 className={styles.sectionTitle}>
                    Overview
                </h2>
                <p className={styles.paragraph}>
                    {project.overview}
                </p>
                <h2 className={styles.sectionTitle}>
                    Challenges Faced
                </h2>
                <ul className={styles.features}>
                    {
                        project.challenges.map((challenge)=>(
                            <li key={challenge}>
                                {challenge}
                            </li>
                        ))
                    }
                </ul>

                <h2 className={styles.sectionTitle}>
                    What I Learned
                </h2>
                <p className={styles.paragraph}>
                    {project.learned}
                </p>

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