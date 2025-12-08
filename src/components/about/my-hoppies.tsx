import { useTranslations } from "next-intl";
import SubTitlePage from "./sub-title-page";

export default function MyHoppies() {
  const t = useTranslations("about")
  const hoppies = [
    { id: 1, title: t("learning") },
    { id: 2, title: t("coding") },
    { id: 3, title: t("fitness") },
    { id: 4, title: t("gaming") },
    { id: 5, title: t("anime") },

  ]
  return (
    <div className="flex flex-col gap-6 w-full ">
      <SubTitlePage title={t("hobbies")} />
      <ul className="flex gap-4 flex-wrap">
        {hoppies.map((item) => (
          <li key={item.id} className="border border-primary-text text-medium text-primary-text p-2 w-fit">{item.title}</li>
        ))}
      </ul>
    </div >
  );
}