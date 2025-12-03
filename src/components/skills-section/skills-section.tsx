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
    { id: 4, title: "Font Awesome" },
  ]

  const Framwork = [
    { id: 1, title: "React" },
    { id: 2, title: "Next.js" },
  ]

  return <Container className=" w-full  h-screen gap-14">
    <div className="flex flex-row justify-between! items-center gap-6 w-full">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
          <span className="text-primary ">#</span> Skills</h1>
        <div className="w-lvh h-px  bg-primary "></div>
      </div>
    </div>
    <div className="flex flex-row justify-between w-full">
      <div className="w-1/3 grid grid-cols-4 grid-rows-3 items-center">
        <div className="col-start-1 row-start-1">
          <div className="border border-primary w-16 h-16"></div>
        </div>
        <div className="col-start-3 row-start-2">
          <Dots />
        </div>
        <div className="col-start-4 row-start-2">
          <Dots />
        </div>
        <div className="col-start-3 row-start-3 ">
          <Dots className="bg-primary!" />
        </div>
      </div>
      <div className="w-2/3 grid grid-cols-3 grid-rows-3 gap-4">
        <div className="col-start-1 row-start-1"><SkillsCard data={Lang} name="Languages" /></div>
        <div className="col-start-2 row-start-1"><SkillsCard data={Other} name="Others" /></div>
        <div className="col-start-2 row-start-2"><SkillsCard data={Tool} name="Tools" /></div>
        <div className="col-start-3 row-start-2"><SkillsCard data={Framwork} name="Framworks" /></div>

      </div>
    </div>


  </Container>;
}