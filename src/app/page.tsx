import { HeroParallaxDemo } from "@/components/UI/Hero";
import Skills from "@/components/UI/Skils";
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
      <Skills />
      <AboutSection />
      <ContactSection />
    </>
  );
}
