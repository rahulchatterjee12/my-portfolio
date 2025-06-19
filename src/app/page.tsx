import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skils";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Journey } from "@/components/Journey";
import ContactMe from "@/components/Contact";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Journey />
      <Projects />
      <Skills />
      <ContactMe />
    </>
  );
}
