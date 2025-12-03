import Container from "@/src/components/container";
import CompleteSection from "@/src/components/projects/complete-section";
// import { useTranslations } from "next-intl";

export default function Projects() {
  // const t = useTranslations("projects");
  return (
    <Container className="mt-14 items-start! gap-16 ">
      <div className="flex flex-col w-full gap-3.5">
        <h1 className="flex gap-2 text-3xl text-foreground font-semibold">
          <span className="text-primary">/</span>
          Projects</h1>
        <p className="text-foreground text-lg font-medium">List of my projects</p></div>
      <CompleteSection />
    </Container>
  );
}