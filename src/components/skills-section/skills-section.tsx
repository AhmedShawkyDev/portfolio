import { useTranslations } from "next-intl";
import SkillsCard from "../skills-card";

export default function SkillsSection() {
  const t = useTranslations("about")
  const Lang = [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
  ]

  const Other = [
    { id: 1, title: "JavaScript (ES6+)" },
    { id: 2, title: "TypeScript" },

  ]

  const Tool = [
    { id: 1, title: "React.js" },
    { id: 2, title: "Next.js" },

  ]

  const Framwork = [
    { id: 1, title: "Context API" },
    { id: 2, title: "Redux " },
    { id: 3, title: "Redux Toolkit" },
    { id: 4, title: "React Query" },
  ]

  const CSSFrameworks = [
    { id: 1, title: "Tailwind CSS" },
    { id: 2, title: "Bootstrap" },
  ]

  const CompLibraries = [
    { id: 1, title: "Material UI (MUI)" },
    { id: 2, title: "Shad cn" },
    { id: 3, title: "Hero Ui" },
  ]

  const BuildTools = [
    { id: 1, title: "Vite ,Webpack" },
    { id: 2, title: "npm/pnpm" },
  ]

  const VersionControl = [
    { id: 1, title: "Git" },
    { id: 2, title: "GitHub" },
  ]

  const APIIntegration = [
    { id: 1, title: "REST API" },
    { id: 2, title: "Axios/fetch API" },
  ]

  const responsive = [
    { id: 1, title: "Media Queries" },
    { id: 2, title: "Mobile First" },
  ]

  const CodeQuality = [
    { id: 1, title: "ESLint/Prettier" },
    { id: 2, title: "SEO basics " },
    { id: 3, title: "Performance optimization (Lazy loading, Code splitting)" }
  ]

  const SoftSkills = [
    { id: 1, title: "Problem-solving" },
    { id: 2, title: "Communication & teamwork" },
    { id: 3, title: "Agile/Scrum methodology" },
    { id: 4, title: "Time management" },
  ]

  const Libraries = [
    { id: 1, title: "Zod (Type-safe schema validation)" },
    { id: 2, title: "React Hook Form" },
    { id: 3, title: "React Query" },
    { id: 4, title: "React Toastify" },
    { id: 5, title: "React Router Dom" },
    { id: 6, title: "Framer Motion" },
  ]
  return (
    <div className="flex flex-col w-full gap-14">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
            <span className="text-primary ">#</span> {t("skills")}</h1>
        </div>
      </div>
      {/* <div className="flex justify-center w-full gap-4 "> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* <SkillsCard data={Lang} name={t("languages")} />
        <SkillsCard data={Other} name={t("other")} />
        <SkillsCard data={Framwork} name={t("framworks")} />
        <SkillsCard data={Tool} name={t("tools")} /> */}

        <SkillsCard data={Lang} name="Fundamental Web Technologies" />
        <SkillsCard data={Other} name="Programming Languages & Scripting" />
        <SkillsCard data={Tool} name="JavaScript Frameworks & Related" />
        <SkillsCard data={Framwork} name="State Management" />
        <SkillsCard data={CSSFrameworks} name="CSS Frameworks" />
        <SkillsCard data={CompLibraries} name="Component Libraries" />
        <SkillsCard data={BuildTools} name="Build Tools & Package Managers" />
        <SkillsCard data={VersionControl} name="Version Control & Collaboration" />
        <SkillsCard data={APIIntegration} name="API Integration" />
        <SkillsCard data={responsive} name="Responsive" />
        <SkillsCard data={CodeQuality} name="Code Quality & Best Practices" />
        <SkillsCard data={SoftSkills} name="Soft Skills" />
        <SkillsCard data={Libraries} name="Libraries" />

      </div>
    </div >
  );
}