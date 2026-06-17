import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({project}){

    return (
        
            <Link
               href={`/projects/${project.slug}`}
               className={styles.card}
            >
            
                 <h3 className={styles.title}>
                    {project.title}
                </h3>
                <p className={styles.description}>
                    {project.description}
                </p>
            
            <div className={styles.techStack}>
                {
                    project.technologies.slice(0,4).map((technology)=>(
                        <span
                           key={technology}
                           className={styles.badge}
                        >
                            {technology}
                        </span>
                    ))
                }
            </div>
        </Link>
      
    )
}