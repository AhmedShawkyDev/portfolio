import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import SectionTitle from "../section-title";
export default function AboutMeSection() {
  const t = useTranslations("about_section");
  const locale = useLocale();

  return (

    <div className=" flex flex-col w-full h-fit xl:h-screen gap-14">
      <SectionTitle title={t("about")} />
      <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-4" >
        <div className="flex flex-col gap-7 w-full xl:w-1/2">
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

        <div className="w-full lg:w-2/3 flex justify-center xl:justify-end">
          <Image src={`https://res.cloudinary.com/dn2fdxtad/image/upload/v1765294417/herooo_kjjt87.webp`}
            alt="Ahmed Shawky"
            width={400}
            height={400}
            priority
            fetchPriority="high" />
        </div>

      </div>
    </div >
  );
}