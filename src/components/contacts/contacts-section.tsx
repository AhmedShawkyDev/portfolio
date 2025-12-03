import { MdEmail } from "react-icons/md";
import Card from "../card";
import Container from "../container";
import SectionTitle from "../section-title";
import SkillsCard from "../skills-card";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactsSection() {
  return <Container className="w-full h-[50vh] gap-14">
    <SectionTitle title="Contacts" />
    <div className="flex justify-between">
      <p className=" text-primary-text font-medium text-lg w-1/2">
        I’m currently seeking a front-end developer position or freelance opportunity.
        However, if you have other request or question, don’t hesitate to contact me</p>
      <div className="border border-grey p-4 flex flex-col justify-end gap-4 w-fit">
        <p className="">Message Me --</p>
        <a href="https://wa.me/966561417008"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-primary">
          <FaWhatsapp className="w-5 h-5" />
          What's App
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=ahmed.shawky.elnabawy@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-primary"
        >
          <MdEmail className="w-5 h-5" />
          Mail
        </a>
      </div></div>

  </Container>
}