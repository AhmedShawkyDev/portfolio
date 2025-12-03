import { useTranslations } from "next-intl";
import rh from "@/src/assets/r_h.png"
import roia from "@/src/assets/roia.png"
import agilova from "@/src/assets/agilova.png"
import Card from "../card";
import portfolio from "@/src/assets/portifolio.png"
import SmallAppsCard from "./small-apps-card";
export default function CompleteSection() {
  const t = useTranslations("projects_section");
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
      description: "A professional portfolio demonstrating my skills in front-end development, UI design, and building modern web experiences.",
      tools: "React , typescript and Tailwind CSS with framework Next.js",
    }
  ]

  const smallApps = [
    {
      id: 1,
      title: "Paryer Times",
      path: "https://github.com/AhmedShawkyDev/prayerTimes",
      description: "A modern Prayer Times app  fast, clean, and easy to use.",
      tools: "Html,Css,Javascript,React, Axios, and React Router DOM ",
    },
    {
      id: 2,
      title: "Foodies Project",
      path: "https://github.com/AhmedShawkyDev/foodies-project",
      description: "A responsive recipe website showcasing various dishes with individual pages for each recipe.",
      tools: "Next.js, React, CSS, useRef, Custom Forms",
    },
    {
      id: 3,
      title: "React Posts",
      path: "https://github.com/AhmedShawkyDev/ReactPoster",
      description: "A React-based app allowing users to create and view posts on the page via a modal form.",
      tools: "React, React DOM (loader & action), Custom Modal Forms",
    },
    {
      id: 4,
      title: "Paryer Times",
      path: "https://github.com/AhmedShawkyDev/prayerTimes",
      description: "A modern Prayer Times app  fast, clean, and easy to use.",
      tools: "Html,Css,Javascript,React, Axios, and React Router DOM ",
    },
    {
      id: 5,
      title: "Foodies Project",
      path: "https://github.com/AhmedShawkyDev/foodies-project",
      description: "A responsive recipe website showcasing various dishes with individual pages for each recipe.",
      tools: "Next.js, React, CSS, useRef, Custom Forms",
    },
    {
      id: 6,
      title: "React Posts",
      path: "https://github.com/AhmedShawkyDev/ReactPoster",
      description: "A React-based app allowing users to create and view posts on the page via a modal form.",
      tools: "React, React DOM (loader & action), Custom Modal Forms",
    },
  ]
  return (
    <div className="flex flex-col gap-12 mb-32">
      <div className="flex gap-2 ">
        <span className="text-primary text-3xl font-medium">#</span>
        <h1 className="text-foreground text-3xl font-medium">Complete Projects</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => {
          return <Card key={project.id}
            title={project.title}
            path={project.path}
            image={project.image}
            description={project.description}
            tools={project.tools} />;
        })}
      </div>

      <div className="flex gap-2 ">
        <span className="text-primary text-3xl font-medium">#</span>
        <h1 className="text-foreground text-3xl font-medium">Small Apps</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {smallApps.map((project) => {
          return <SmallAppsCard
            key={project.id}
            title={project.title}
            path={project.path}
            description={project.description}
            tools={project.tools} />;
        })}
      </div>

    </div>
  )
}