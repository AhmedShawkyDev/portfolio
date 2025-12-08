import { useTranslations } from "next-intl"
import SubTitlePage from "./sub-title-page"

export default function OtherSkills() {
  const t = useTranslations("about")
  const other = [
    { id: 1, title: t("word") },
    { id: 2, title: t("excel") },

  ]
  return (
    <div className="flex flex-col w-full gap-6 mb-40">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <SubTitlePage title={t("skills")} />
      </div>
      <ul className="flex flex-col">
        {other.map((item) => (
          <li key={item.id} className="text-primary-text text-lg font-medium">{item.title}</li>
        ))}
      </ul>
    </div>
  )
}