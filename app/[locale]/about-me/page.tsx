import Container from "@/src/components/container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroo from "@/src/assets/hero2.png";
import SkillsSection from "@/src/components/skills-section/skills-section";
import MyHoppies from "@/src/components/about/my-hoppies";
import Graduation from "@/src/components/about/graduation";
import OtherSkills from "@/src/components/about/other-skills";

export default function AboutPage() {
  const t = useTranslations("about_section");

  return (
    <Container className="mt-14 items-start! gap-16 ">
      <div className="flex flex-col w-full gap-3.5">
        <h1 className="flex gap-2 text-3xl text-foreground font-semibold">
          <span className="text-primary">/</span>
          About me</h1>
        <p className="text-foreground text-lg font-medium">Who am I ?</p>
      </div>
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