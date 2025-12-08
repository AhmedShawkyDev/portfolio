import { MdEmail } from "react-icons/md";
import Container from "../container";
import SectionTitle from "../section-title";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ContactsSection() {
  const t = useTranslations("contact_section");

  return <Container className="w-full h-fit xl:h-[50vh] gap-14 mb-20 xl:mb-0">
    <SectionTitle title={t("contacts")} />
    <div className="flex flex-col lg:flex-row gap-4 justify-between lg:gap-7">
      <p className=" text-primary-text font-medium text-lg w-full lg:w-1/2">
        {t("description")}</p>
      <div className="border border-grey p-4 flex flex-col justify-end gap-4 w-full lg:w-fit">
        <p className="">{t("message")} --</p>
        <a href="https://wa.me/966561417008"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-primary">
          <FaWhatsapp className="w-5 h-5" />
          {t("whatsapp")}
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=ahmed.shawky.elnabawy@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-primary"
        >
          <MdEmail className="w-5 h-5" />
          {t("mail")}
        </a>
      </div></div>

  </Container>
}