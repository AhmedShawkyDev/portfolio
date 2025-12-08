import Container from "@/src/components/container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroo from "@/src/assets/hero2.png";
import SkillsSection from "@/src/components/skills-section/skills-section";
import MyHoppies from "@/src/components/about/my-hoppies";
import Graduation from "@/src/components/about/graduation";
import OtherSkills from "@/src/components/about/other-skills";
import PageTitle from "@/src/components/page-title";

export default function AboutPage() {
  const t = useTranslations("about_section");
  const t2 = useTranslations("about");

  return (
    <Container className="mt-14 items-start! gap-16 ">
      <PageTitle title={t2("about_me")} description={t2("who")} />
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-7 w-1/2">
          <div className=" flex flex-col gap-6">
            <p className="text-xl text-foreground font-medium">{t("hello")}</p>
            <p className="text-xl text-primary-text font-medium">
              {t("study")}
            </p>
            <p className="text-xl text-primary-text font-medium">
              {t("trans")}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image src={heroo} alt="Ahmed Shawky" width={400} height={400} />
        </div>

      </div>
      <SkillsSection />
      <MyHoppies />
      <Graduation />
      <OtherSkills />
    </Container>
  );
}