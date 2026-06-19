import PageLayout from "@/components/common/PageLayout/PageLayout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Image from "next/image";
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

      <section className={styles.section}>
        <h2 className={styles.heading}>My Journey</h2>
        <p className={styles.description}>
        My interest in technology started with curiosity and a desire to learn new things. Like many beginners, I initially found myself stuck in tutorial loops, unsure of what to learn and how to apply it.

        A turning point came when I attended a TinkerHub meetup in my hometown, Pampady. Seeing people showcase their projects made me realize the importance of learning by building. That day, I started my first project, a Sorting Algorithm Visualizer built with HTML, CSS, and JavaScript. Although simple, it helped me overcome my fear of failure and gave me the confidence to keep building.

        As my interest in JavaScript grew, I moved into backend development with Node.js and Express.js. Through project-based learning, I explored REST APIs, MongoDB, authentication, middleware, and eventually built a full-stack E-Commerce platform.

        Today, I continue to learn through projects while improving my problem-solving skills with Data Structures and Algorithms and exploring modern technologies like React and Next.js.
        </p>
      </section>

  <section className={styles.section}>
    <h2 className={styles.heading}>Journey Timeline</h2>

    <div className={styles.timeline}>
        <div className={styles.card}>
            <h3>2023</h3>
            <p>Started learning programming and explored different technologies.</p>
        </div>

        <div className={styles.card}>
            <h3>2024</h3>
            <p>Built my first project, a Sorting Algorithm Visualizer.</p>
        </div>

        <div className={styles.card}>
            <h3>2025</h3>
            <p>Learned Node.js, Express.js and MongoDB through project-based learning.</p>
        </div>

        <div className={styles.card}>
            <h3>2026</h3>
            <p>Built a full-stack E-Commerce platform and started learning React and Next.js.</p>
        </div>

        <div className={styles.card}>
            <h3>Present</h3>
            <p>Improving DSA skills and building modern web applications.</p>
        </div>
    </div>
</section>

  <section className={styles.section}>
    <h2 className={styles.heading}>Education</h2>
  <div className={styles.grid}>


    <div className={styles.card}>
        <h3>B.Tech Computer Science and Engineering</h3>

        <p className={styles.description}>
            College of Engineering Poonjar
            <br />
            2023 – 2027
        </p>
    </div>

    <div className={styles.card}>
        <h3>Higher Secondary Education</h3>

        <p>
            Crossroads Central School, Pampady
        </p>
    </div>
  </div>
</section>
     
     <section className={styles.section}>
    <h2 className={styles.heading}>Quick Facts</h2>

    <div className={styles.grid}>
        <div className={styles.card}>
          <Image 
            src="/icons/location.svg"
            alt="Location"
            width={30}
            height={30}
            className={styles.icon}
          />
          <h3>Kerala,India</h3>
          <p>Based in Kerala</p>

        </div>

        <div className={styles.card}>

          <Image 
            src="/icons/developer.svg"
            alt="Developer"
            width={30}
            height={30}
            className={styles.icon}
          />
          <h3>Software Engineer</h3>
          <p>Building scalable applications.</p>

        </div>

        <div className={styles.card}> 
          <div className={styles.icon}>

            <Image 
               src="/icons/mongoDB.svg"
               alt="mongoDB"
               width={32}
               height={32}
            />

              <Image 
               src="/icons/express.svg"
               alt="Express"
               width={32}
               height={32}
            />

              <Image 
               src="/icons/react.svg"
               alt="React"
               width={32}
               height={32}
            />

              <Image 
               src="/icons/node.svg"
               alt="Node"
               width={32}
               height={32}
            />

            <Image 
              src="/icons/mern&next.svg"
              alt="Next"
              width={30}
              height={30}
              
            />
          </div>

          <h3>MERN + Next.js</h3>
          <p>Building modern web applications</p>
          
          </div>

        <div className={styles.card}>
          <Image 
            src="/icons/python.svg"
            alt="Python"
            width={30}
            height={30}
            className={styles.icon}
          />
          <h3>Python for DSA</h3>
          <p>Problem Solving and algorithms</p>
        </div>

        <div className={styles.card}>
          <Image 
             src="/icons/projectbased.svg"
             alt="ProjectBased"
             width={30}
             height={30}
             className={styles.icon}

          />
         <h3>Project-Based Learner</h3> 
         <p>Learning through building real projects</p>
        </div>

        <div className={styles.card}>
          <Image 
            src="/icons/cricket.svg"
            alt="interst"
            width={30}
            height={30}
            className={styles.icon}
          />
          <h3>Cricket & Football</h3>
          <p>Interest Beyond coding</p>
          </div>
    </div>
</section>

   <section className={styles.section}>
   <h2 className={styles.heading}>Learning Philosophy</h2>

    <p className={styles.description}>
        I strongly believe that the best way to learn technology is by building projects. Every concept I learn is reinforced through practical implementation, helping me understand not only how things work, but why they work.

        This project-based approach has shaped my learning journey and continues to drive my growth as a developer.
    </p>
</section>

    </PageLayout>
  );
}