import { useTranslations } from "next-intl"

export default function Graduation() {
  const t = useTranslations("about")
  const graduation = [
    { id: 1, title: t("faulty"), description: t("graduated") },
    { id: 2, title: t("it"), description: t("full") },
  ]
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
            <span className="text-primary ">#</span> {t("certifications")}</h1>
        </div>
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