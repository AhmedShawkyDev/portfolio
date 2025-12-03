import Link from "next/link";
import Container from "../container";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import heroo from "@/src/assets/hero2.png";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import SectionTitle from "../section-title";
export default function AboutMeSection() {
  const t = useTranslations("about_section");
  const locale = useLocale();

  return (

    <Container className="w-full h-screen gap-14">
      <SectionTitle title={t("about")} />

      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-7 w-1/2">
          <div className=" flex flex-col gap-4">
            <p className="text-xl text-foreground font-medium">{t("hello")}</p>
            <p className="text-xl text-primary-text font-medium">
              {t("study")}
            </p>
            <p className="text-xl text-primary-text font-medium">
              {t("trans")}
            </p>
          </div>

          <Link href={`/${locale}/about-me`} className="border px-4 py-2 border-primary w-fit hover:bg-primary flex  items-center">
            {t("read")} --
            {locale === "en" ? <RiArrowRightDoubleLine /> : <RiArrowLeftDoubleLine />}
          </Link>
        </div>

        <div className="w-1/2 flex justify-end">
          <Image src={heroo} alt="Ahmed Shawky" width={400} height={400} />
        </div>

      </div>
    </Container >
  );
}