"use client"
import { usePathname } from "next/navigation";

export default function LocaleSwitcher({ locale }: { locale: string }) {

  const pathname = usePathname();
  const oppositeLocale = locale === "en" ? "ar" : "en";
  const newPath = `/${oppositeLocale}${pathname.replace(/^\/(en|ar)/, "")}`;

  return (
    <div className="flex">
      <a href={newPath}>{oppositeLocale.toUpperCase()}</a>
    </div>
  )
}