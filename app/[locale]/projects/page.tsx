import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <div className="flex flex-col  mt-50">
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
      {/* <ThemeToggle /> */}
    </div>
  );
}