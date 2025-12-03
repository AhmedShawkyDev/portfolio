import Container from "../container";
import Dots from "../dots";
import SkillsCard from "../skills-card";

export default function SkillsSection() {

  const Lang = [
    { id: 1, title: "JavaScript" },
    { id: 2, title: "TypeScript" },
  ]

  const Other = [
    { id: 1, title: "HTML 5" },
    { id: 2, title: "CSS" },
    { id: 3, title: "Tailwind" },
  ]

  const Tool = [
    { id: 1, title: "Git" },
    { id: 2, title: "GitHub" },
    { id: 3, title: "Vscode" },
    { id: 4, title: "shadcn/ui" },
    { id: 5, title: "Font Awesome" },
    { id: 6, title: "slugify" },
    { id: 7, title: "Metadata Management" },
    { id: 8, title: "XSS library" },
  ]

  const Framwork = [
    { id: 1, title: "React" },
    { id: 2, title: "Next.js" },
  ]

  return <div className="flex flex-col w-full gap-14">
    <div className="flex flex-row justify-between! items-center gap-6 w-full">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
          <span className="text-primary ">#</span> Skills</h1>
      </div>
    </div>
    <div className="flex justify-center w-full gap-4">
      <SkillsCard data={Lang} name="Languages" />
      <SkillsCard data={Other} name="Others" />
      <SkillsCard data={Tool} name="Tools" />
      <SkillsCard data={Framwork} name="Framworks" />
    </div>


  </div>;
}