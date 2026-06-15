import styles from "./SkillCard.module.css";

export default function SkillCard({skill}){


    return (
        <article className={styles.card}>
            <h3 className={styles.title}>
                {skill.category}
            </h3>

            <div className={styles.skills}>
                {
                  skill.items.map((item)=>(
                    <span
                      key={item}
                    className={styles.badge}
                    >
                        {item}
                    </span>
                  ))
                
                }
            </div>
        </article>
    )

}