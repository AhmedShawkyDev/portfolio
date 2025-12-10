import Image from "next/image";
import Container from "../container";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaCloudDownloadAlt } from "react-icons/fa";
import MotionComp from "@/src/lib/motion-component";



export default function HeroSection() {
  const t = useTranslations("herosection");
  const locale = useLocale();

  return (
    <Container className="lg:flex-row gap-5 justify-between w-full h-fit xl:h-screen  mt-10! lg:mt-0!">
      <div className="flex flex-col gap-6 lg:w-2/3 w-full">
        <MotionComp className="flex flex-col gap-6">
          <div className="text-2xl xl:text-4xl text-foreground  flex flex-wrap gap-4 font-semibold flex-col">
            <div className="flex gap-2">
              <span className="">{t("Name")}</span>
              <span className="text-primary"> {t("Ahmed")} </span></div>
            {t("and")}
            <span className="text-primary"> {t("developer")} </span>
          </div>
          <p className="text-xl text-primary-text font-medium lg:w-3/4 w-full">
            {t("description")}
          </p>
          <div className="flex gap-4">
            <Link
              href={`/${locale}/contacts`}
              className="border px-4 py-2 border-primary w-fit hover:bg-primary text-foreground">{t("contact")}</Link>
            <a
              className="border px-4 py-2 border-primary w-fit hover:bg-primary flex items-center gap-2 text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              download={true}
              href="https://drive.google.com/file/d/1lO2aGujfsXZEux5kmkZpzh7Xc4hCD5Sj/view?usp=sharing">{t("download")} <FaCloudDownloadAlt /></a>
          </div>
        </MotionComp>
      </div>
      <MotionComp className="w-full lg:w-1/3 flex justify-center xl:justify-end">
        <Link
          href={`/${locale}/about-me`}
        >
          <Image
            src={`https://res.cloudinary.com/dn2fdxtad/image/upload/v1765281936/hero_i9seac.webp`}
            alt="Ahmed Shawky"
            width={400}
            height={400}
            priority
            fetchPriority="high" />
        </Link>
      </MotionComp>
    </Container>
  )
}