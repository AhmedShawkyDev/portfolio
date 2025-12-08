
import Image from "next/image";
import Container from "../container";
import hero from "@/src/assets/hero.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function HeroSection() {
  const t = useTranslations("herosection");
  const locale = useLocale();

  return (
    <Container className="lg:flex-row gap-5 justify-between w-full h-fit xl:h-screen mt-10 lg:mt-0">
      <div className="flex flex-col gap-6 lg:w-2/3 w-full">
        <div className="text-4xl text-foreground  flex flex-wrap gap-4 font-semibold flex-col">
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
            href="https://drive.google.com/file/d/1n-6YfCf1I5TKtAHNXBIzCNHgY-FpfNUh/view?usp=sharing">{t("download")} <FaCloudDownloadAlt /></a>
        </div>
      </div>
      <Link
        href={`/${locale}/about-me`}
        className="w-full lg:w-1/3">
        <Image src={hero} alt="Ahmed Shawky" width={400} height={400} className="w-full h-full  object-cover" />
      </Link>
    </Container>
  )
}