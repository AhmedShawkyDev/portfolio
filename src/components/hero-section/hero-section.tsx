
import Image from "next/image";
import Container from "../container";
import hero from "@/src/assets/hero.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
// import DownloadButton from "../download-pdf";



export default function HeroSection() {
  const t = useTranslations("herosection");
  const locale = useLocale();
  // const downloadPDF = () => {
  //   const link = document.createElement("a");
  //   link.href = "/public/Ahmed_Shawky.pdf"; // مسار صحيح
  //   link.download = "Ahmed_Shawky.pdf"; // اسم التحميل
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <Container className="flex-row gap-5 justify-between w-full h-screen">
      <div className="flex flex-col gap-6 w-2/3">
        <div className="text-4xl text-foreground  flex flex-wrap gap-4 font-semibold flex-col">
          <div className="flex gap-2">
            <span className="">{t("Name")}</span>
            <span className="text-primary"> {t("Ahmed")} </span></div>

          {t("and")}
          <span className="text-primary"> {t("developer")} </span>
        </div>
        <p className="text-xl text-primary-text font-medium w-3/4">
          {t("description")}
        </p>
        <div className="flex gap-4">
          <Link
            href={`/${locale}/contacts`}
            className="border px-4 py-2 border-primary w-fit hover:bg-primary">{t("contact")}</Link>
          {/* <Link href={`/${locale}/Ahmed_Shawky.pdf`} download className="border px-4 py-2 border-primary w-fit hover:bg-primary">
            Download CV</Link> */}
          {/* <DownloadButton /> */}
          {/* <button onClick={downloadPDF}>
            Download
          </button> */}
        </div>
      </div>
      <Link
        href={`/${locale}/about-me`}
        className="w-1/3">
        <Image src={hero} alt="Ahmed Shawky" width={400} height={400} />
      </Link>
    </Container>
  )
}