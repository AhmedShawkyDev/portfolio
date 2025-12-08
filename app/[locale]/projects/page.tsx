import Container from "@/src/components/container";
import CompleteSection from "@/src/components/projects/complete-section";
import PageTitle from "@/src/components/page-title";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <Container className="mt-14 items-start! gap-16 ">
      <PageTitle title={t("projects")} description={t("list")} />
      <CompleteSection />
    </Container>
  );
}