import Container from "@/src/components/container";
import CompleteSection from "@/src/components/projects/complete-section";
import PageTitle from "@/src/components/page-title";
import { useTranslations } from "next-intl";
import SmallSection from "@/src/components/projects/small-section";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <Container className=" items-start! gap-12 xl:gap-16   flex-col  mb-32">
      <PageTitle title={t("projects")} description={t("list")} />
      <CompleteSection />
      <SmallSection />
    </Container>
  );
}