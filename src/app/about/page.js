import PageLayout from "@/components/common/PageLayout/PageLayout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Button from "@/components/common/Button/Button";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <PageLayout>

      <PageHeader
        title="About Me"
        description="My journey, interests and what I'm currently working on."
      />

      {/* Introduction */}

      <section className={styles.section}>
        <h2 className={styles.heading}>Introduction</h2>

        <p className={styles.description}>
          I'm Alan Paul John, a Computer Engineering student at the College of
          Engineering Poonjar and an aspiring Full Stack Developer. I enjoy
          learning new technologies, building practical applications and solving
          problems through software. My approach to learning has always been
          simple: learn by building.
        </p>
      </section>

      {/* Journey */}

      <section className={styles.section}>
        <h2 className={styles.heading}>My Journey</h2>

        <p className={styles.description}>
          During my early college days, I was always excited to learn new
          things but struggled with where and how to learn. Like many
          beginners, I got trapped in the tutorial loop.
        </p>

        <p className={styles.description}>
          A turning point came when I attended a TinkerHub meetup in Pampady.
          When a speaker asked how many people had built projects, only a few
          hands were raised. That moment made me realize the importance of
          building projects.
        </p>

        <p className={styles.description}>
          I came home and started my first project — a Sorting Algorithm
          Visualizer using HTML, CSS and JavaScript. That project helped me
          overcome my fear of failure and introduced me to project-based
          learning.
        </p>

        <p className={styles.description}>
          Since I enjoyed JavaScript, I explored backend development using
          Node.js and Express. Through building projects, I learned REST APIs,
          MongoDB Atlas, middleware, authentication and eventually completed a
          full-stack E-Commerce project. Later, I learned React and began
          exploring Next.js through this portfolio.
        </p>
      </section>

      {/* Current Work */}

      <section className={styles.section}>
        <h2 className={styles.heading}>Currently Working On</h2>

        <p className={styles.description}>
          I'm currently focused on project-based learning and improving my
          problem-solving skills through Data Structures and Algorithms.
          Initially, I followed the NeetCode roadmap, but later shifted to
          pattern-based learning. So far I've covered Arrays, Two Pointers,
          Sliding Window and Hash Maps, and I'm continuing to learn more.
        </p>
      </section>

      {/* Education */}

      <section className={styles.section}>
        <h2 className={styles.heading}>Education</h2>

        <ul className={styles.list}>
          <li>Crossroads Central School, Pampady</li>
          <li>College of Engineering Poonjar</li>
        </ul>
      </section>

      <section className={styles.section}>
    <h2 className={styles.heading}>Timeline</h2>

    <div className={styles.timeline}>
        <div>
            <h3>2023</h3>
            <p>Started B.Tech in Computer Engineering.</p>
        </div>

        <div>
            <h3>2024</h3>
            <p>
                Attended TinkerHub meetup, built my first project,
                Sorting Algorithm Visualizer and started learning
                through projects.
            </p>
        </div>

        <div>
            <h3>2025</h3>
            <p>
                Learned Node.js and Express, built a Full Stack
                E-Commerce project, started DSA and became
                Vice Chair of FOSS Club CEP.
            </p>
        </div>

        <div>
            <h3>2026</h3>
            <p>
                Learning Next.js, building this portfolio and
                preparing for internships.
            </p>
        </div>

        <div>
            <h3>Future</h3>
            <p>
                Becoming a strong Software Engineer and
                building impactful software.
            </p>
        </div>
    </div>
</section>

      {/* Tech Stack */}

      <section className={styles.section}>
        <h2 className={styles.heading}>Current Tech Stack</h2>

        <div className={styles.techStack}>
          <span>MERN Stack</span>
          <span>Next.js</span>
          <span>Python</span>
          <span>MongoDB</span>
          <span>React</span>
          <span>Node.js</span>
        </div>
      </section>

      {/* Interests */}

      <section className={styles.section}>
        <h2 className={styles.heading}>Interests Beyond Coding</h2>

        <div className={styles.techStack}>
          <span>Cricket 🏏</span>
          <span>Football ⚽</span>
          <span>Continuous Learning 📚</span>
        </div>
      </section>

     

    </PageLayout>
  );
}