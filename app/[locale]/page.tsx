// import ThemeToggle from "@/components/Theme-btn";
import AboutMeSection from "@/src/components/about-section/about-me-section";
import ContactsSection from "@/src/components/contacts/contacts-section";
import Container from "@/src/components/container";
import HeroSection from "@/src/components/hero-section/hero-section";
import ProjectSection from "@/src/components/project-section/project-section";
// import SkillsSection from "@/src/components/skills-section/skills-section";
// import { useTranslations } from "next-intl";

export default function Page() {
  // const t = useTranslations("home");
  return (
    <Container className="flex flex-col gap-28">
      <HeroSection />
      <ProjectSection />
      {/* <SkillsSection /> */}
      <AboutMeSection />
      <ContactsSection />
    </Container>
  );
}