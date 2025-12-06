import Container from "@/src/components/container";
import CompleteSection from "@/src/components/projects/complete-section";
import PageTitle from "@/src/components/page-title";

export default function Projects() {
  // const t = useTranslations("projects");
  return (
    <Container className="mt-14 items-start! gap-16 ">
      <PageTitle title="Projects" description="List of my projects" />
      <CompleteSection />
    </Container>
  );
}