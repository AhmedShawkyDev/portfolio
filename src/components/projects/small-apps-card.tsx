import { useLocale, useTranslations } from "next-intl";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

interface SmallCardProps {

  title: string
  path: string
  description: string
  tools: string
}
export default function SmallAppsCard({ title, path, description, tools }: SmallCardProps) {
  const locale = useLocale();
  const t = useTranslations("projects_section");
  return (
    <div className="flex flex-col border border-grey ">
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