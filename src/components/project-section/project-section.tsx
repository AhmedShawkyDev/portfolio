import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import Container from "../container";
import Card from "../card";
import rh from "@/src/assets/r_h.png"
import roia from "@/src/assets/roia.png"
import agilova from "@/src/assets/agilova.png"
import SectionTitle from "../section-title";

export default function ProjectSection() {

  const t = useTranslations("projects_section");
  const locale = useLocale();
  const projects = [

    {
      id: 1, title: t("projects_data.0.title"),
      path: "https://rhcapital.ae/en",
      image: rh,
      description: t("projects_data.0.description"),
      tools: t("projects_data.0.tools"),
    },
    {
      id: 2, title: t("projects_data.1.title"),
      path: "https://roia.ae/en",
      image: roia,
      description: t("projects_data.1.description"),
      tools: t("projects_data.1.tools"),
    },
    {
      id: 3, title: t("projects_data.2.title"),
      path: "https://agilova.com/",
      image: agilova,
      description: t("projects_data.2.description"),
      tools: t("projects_data.2.tools"),
    }
  ]

  return (
    <Container className=" w-full h-fit xl:h-screen gap-14 lg:mt-0">
      <div className="flex flex-col lg:flex-row justify-between! items-center gap-6 w-full ">
        <SectionTitle title={t("projects")} />
        <Link href={`${locale}/projects`} className="text-lg xl:flex items-center flex-nowrap w-1/4 hidden ">{t("view")}
          {locale === "en" ? <RiArrowRightDoubleLine /> : <RiArrowLeftDoubleLine />}
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Card key={project.id}
            title={project.title}
            path={project.path}
            image={project.image}
            description={project.description}
            tools={project.tools} />;
        })}
      </div>
    </Container>
  )
}


