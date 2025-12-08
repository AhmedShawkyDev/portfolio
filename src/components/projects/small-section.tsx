import { useTranslations } from "next-intl";
import SmallAppsCard from "./small-apps-card";
export default function SmallSection() {
  const t2 = useTranslations("projects");
  const smallApps = [
    {
      id: 1,
      title: "Paryer Times",
      path: "https://github.com/AhmedShawkyDev/prayerTimes",
      description: t2("prayer"),
      tools: "Html,Css,Javascript,React, Axios, and React Router DOM ",
    },
    {
      id: 2,
      title: "Foodies Project",
      path: "https://github.com/AhmedShawkyDev/foodies-project",
      description: t2("recipe"),
      tools: "Next.js, React, CSS, useRef, Custom Forms and Axios",
    },
    {
      id: 3,
      title: "React Posts",
      path: "https://github.com/AhmedShawkyDev/ReactPoster",
      description: t2("react-based"),
      tools: "React, React DOM (loader & action), Custom Modal Forms",
    },

  ]
  return (
    <>
      <div className="flex gap-2 ">
        <span className="text-primary text-3xl font-medium">#</span>
        <h1 className="text-foreground text-3xl font-medium">{t2("small")}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {smallApps.map((project) => {
          return <SmallAppsCard
            key={project.id}
            title={project.title}
            path={project.path}
            description={project.description}
            tools={project.tools} />;
        })}
      </div>
    </>
  )
}