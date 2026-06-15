import Hero from "@/components/Hero/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects/FeaturedProjects";
import SkillsPreview from "@/components/home/SkillsPreview/SkillsPreview";
import AboutPreview from "@/components/home/AboutPreview/AboutPreview";
import ContactPreview from "@/components/home/ContactPreview/ContactPreview";


export default function Home() {
  return (
    <main>
       <Hero />
       <FeaturedProjects />
       <SkillsPreview />
       <AboutPreview />
       <ContactPreview />
    </main>
  );
}
