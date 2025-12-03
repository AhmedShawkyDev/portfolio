import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

interface CardProps {

  title: string
  path: string
  image: StaticImageData
  description: string
  tools: string
}
export default function Card({ title, path, image, description, tools }: CardProps) {
  const locale = useLocale();
  const t = useTranslations("projects_section");
  return (
    <div className="flex flex-col border border-grey ">
      <div className="w-full h-56">
        <Image src={image} alt={title} width={400} height={400} className="w-full h-full  object-cover" />
      </div>
      <div className="w-full h-px bg-grey"></div>
      <p className="font-medium text-lg text-primary-text py-2 px-2 ">{tools}</p>
      <div className="w-full h-px bg-grey"></div>
      <div className="flex flex-col py-4 px-4 gap-4 ">
        <p className="text-2xl text-foreground">{title}</p>
        <p className="text-lg text-primary-text line-clamp-3 min-h-20">{description}</p>
        <a href={path} target="_blank" className="border px-4 py-2 border-primary w-fit hover:bg-primary flex justify-center items-center">{t("live")} ---
          {locale === "en" ? <RiArrowRightDoubleLine /> : <RiArrowLeftDoubleLine />}
        </a>
      </div>

    </div>
  )
}