import { useTranslations } from "next-intl"
import SubTitlePage from "./sub-title-page"

export default function Graduation() {
  const t = useTranslations("about")
  const graduation = [
    { id: 1, title: t("faulty"), description: t("graduated") },
    { id: 2, title: t("it"), description: t("full") },
  ]
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <SubTitlePage title={t("certifications")} />
      </div>
      {graduation.map((item) => {
        return (
          <div key={item.id} className="flex flex-col" >
            <span className="text-foreground text-xl font-semibold "> -- {item.title}</span>
            <p className=" text-primary-text text-lg font-medium">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}