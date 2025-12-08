import { useTranslations } from "next-intl"

export default function OtherSkills() {
  const t = useTranslations("about")
  const other = [
    { id: 1, title: t("word") },
    { id: 2, title: t("excel") },

  ]
  return (
    <div className="flex flex-col w-full gap-6 mb-40">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
            <span className="text-primary ">#</span> {t("Office")}</h1>
        </div>
      </div>
      <ul className="flex flex-col">
        {other.map((item) => (
          <li key={item.id} className="text-primary-text text-lg font-medium">{item.title}</li>
        ))}
      </ul>
    </div>
  )
}