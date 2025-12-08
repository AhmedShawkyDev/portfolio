import { useTranslations } from "next-intl";
import rh from "@/src/assets/r_h.png"
import roia from "@/src/assets/roia.png"
import agilova from "@/src/assets/agilova.png"
import Card from "../card";
import portfolio from "@/src/assets/portifolio.png"

export default function CompleteSection() {
  const t = useTranslations("projects_section");
  const t2 = useTranslations("projects");
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
    },
    {
      id: 4, title: "Portfolio",
      path: "https://agilova.com/",
      image: portfolio,
      description: t2("proto"),
      tools: "React , typescript and Tailwind CSS with framework Next.js",
    }
  ]


  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div className="flex">
          <span className="text-primary text-3xl font-medium">#</span>
          <h1 className="text-foreground text-3xl font-medium">{t2("complete")}</h1></div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project) => {
          return <Card key={project.id}
            title={project.title}
            path={project.path}
            image={project.image}
            description={project.description}
            tools={project.tools} />;
        })}
      </div>


    </>

  )
}