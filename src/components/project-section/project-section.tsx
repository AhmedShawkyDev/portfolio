import Link from "next/link";

import { useLocale } from "next-intl";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Container from "../container";
import Card from "../card";
import rh from "@/src/assets/r_h.png"
import roia from "@/src/assets/roia.png"
import agilova from "@/src/assets/agilova.png"
export default function ProjectSection() {

  const locale = useLocale();

  const projects = [
    {
      id: 1, title: "R&H Capital",
      path: "https://rhcapital.ae/en",
      image: rh,
      description: "Discover top-tier real estate opportunities with Capital H&R – Dubai's trusted consultancy for off-plan, ready-to-move, and luxury properties. Transparent, expert-driven solutions.",
      tools: "React, Redux, and Tailwind CSS with framework Next.js",
    },
    {
      id: 2, title: "ROIA",
      path: "https://roia.ae/en",
      image: roia,
      description: "ROIA is the UAE's leading smart film and switchable glass company, delivering PDLC film, privacy glass, and glass tinting across Dubai, Abu Dhabi, Sharjah & all Emirates. Enjoy instant privacy, UV protection, energy efficiency, elegant design, and a 2-year warranty — for homes, offices, hotels, villas, clinics & retail spaces.",
      tools: "React and Tailwind CSS with framework Next.js",
    },
    {
      id: 3, title: "Agilova",
      path: "https://agilova.com/",
      image: agilova,
      description: "RealState Project for states trading in UAE",
      tools: "React, Redux, and Tailwind CSS with framework Next.js",
    },
  ]

  return (
    <Container className=" w-full  h-screen gap-14">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-4xl text-foreground font-semibold flex gap-2">
            <span className="text-primary">#</span> Projects</h1>
          <div className="w-lvh h-px  bg-primary "></div>
        </div>
        <Link href={`${locale}/projects`} className="text-lg flex items-center ">View more ---<RiArrowRightDoubleLine /></Link>
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
    </Container>
  )
}


