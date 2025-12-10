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

  const SkillsCards = [
    { id: 1, data: Lang, name: t("Fundamental") },
    { id: 2, Other: Other, name: t("Programming") },
    { id: 3, data: Tool, name: t("JavaScriptF") },
    { id: 4, data: Framwork, name: t("State") },
    { id: 5, data: CSSFrameworks, name: t("CSSFrameworks") },
    { id: 6, data: CompLibraries, name: t("Component") },
    { id: 7, data: BuildTools, name: t("Build") },
    { id: 8, data: VersionControl, name: t("Version") },
    { id: 9, data: APIIntegration, name: t("APIIntegration") },
    { id: 10, data: responsive, name: t("Responsive") },
    { id: 11, data: CodeQuality, name: t("CodeQuality") },
    { id: 12, data: SoftSkills, name: t("Soft") },
    { id: 13, data: Libraries, name: t("Libraries") },
  ]
  return (
    <div className="flex flex-col w-full gap-14">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
            <span className="text-primary ">#</span> {t("skills")}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SkillsCards.map((card) => (
          <SkillsCard key={card.id} data={card.data || card.Other} name={card.name} />
        ))}
      </div>
    </div >
  );
}