import Image from "next/image";
import Container from "../container";
import hero from "@/src/assets/hero.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";


export default function HeroSection() {
  const t = useTranslations("herosection");
  const locale = useLocale();
  return (
    <Container className="flex-row gap-5 justify-between w-full h-screen">
      <div className="flex flex-col gap-6 w-2/3">
        <div className="text-4xl text-foreground  flex flex-wrap gap-4 font-semibold">{t("Name")}
          <span className="text-primary"> {t("Ahmed")} </span>
          {t("and")}
          <span className="text-primary"> {t("developer")} </span>
        </div>
        <p className="text-lg text-primary-text font-medium w-3/4">
          {t("description")}
        </p>
        <Link href={`/${locale}/contacts`} className="border px-4 py-2 border-primary w-fit hover:bg-primary">{t("contact")}</Link>
      </div>
      <Link href={`/${locale}/about-me`} className="w-1/3">
        <Image src={hero} alt="Ahmed Shawky" width={400} height={400} />
      </Link>
    </Container>
  )
}