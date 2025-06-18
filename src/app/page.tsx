import { HeroParallaxDemo } from "@/components/UI/Hero";
import { Skills } from "@/components/UI/Skils";
import { SkillsHeader } from "@/components/UI/Skils/Header";
import { TimelineDemo } from "@/components/UI/Timeline";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <ProjectsSection />
      <TimelineDemo />
      <SkillsHeader />
      <Skills />
      <AboutSection />
      <ContactSection />
    </>
  );
}
