import AboutMeSection from "@/src/components/about-section/about-me-section";
import ContactsSection from "@/src/components/contacts/contacts-section";
import Container from "@/src/components/container";
import HeroSection from "@/src/components/hero-section/hero-section";
import ProjectSection from "@/src/components/project-section/project-section";


export default function Page() {

  return (
    <Container className="flex flex-col gap-20  ">
      <HeroSection />
      <ProjectSection />
      <AboutMeSection />
      <ContactsSection />
    </Container>
  );
}