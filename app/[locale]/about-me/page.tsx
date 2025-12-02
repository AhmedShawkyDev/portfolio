import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about-me");
  return (
    <div className="flex flex-col  mt-50">
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
      {/* <ThemeToggle /> */}
    </div>
  );
}