import Link from "next/link";
import Container from "./container";
import { social } from "./header/side-social";
import { useLocale, useTranslations } from "next-intl";
export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  return (
    <>
      <div className="w-full h-px bg-primary-text"></div>
      <Container className="  flex-col  gap-12 py-4 lg:py-8 lg:flex-row ">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
          <div className=" flex flex-col  items-center lg:items-start">
            <p className="text-lg font-medium text-foreground">{t("name")}</p>
            <p className="text-lg font-medium text-foreground">{t("developer")}</p>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-lg text-primary-text">{t("copy")}
              <Link href={`/${locale}/`} className="text-primary"> {t("me")}</Link>
            </p>

          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg font-medium text-foreground">{t("social")}</p>
            <ul className=" flex">
              {social.map((icons) => {
                return (
                  <li key={icons.id} className="hover:text-primary w-8 h-8 ">
                    <a href={icons.path} target="_blank" rel="noopener noreferrer" >{icons.icon}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>


      </Container>
    </>
  )
}
