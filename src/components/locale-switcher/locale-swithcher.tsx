"use client"
import { usePathname } from "next/navigation";

export default function LocaleSwitcher({ locale }: { locale: string }) {

  const pathname = usePathname();
  const oppositeLocale = locale === "en" ? "ar" : "en";
  const newPath = `/${oppositeLocale}${pathname.replace(/^\/(en|ar)/, "")}`;

  return (
    <div className="flex px-3 py-2">
      <button
        className="cursor-pointer text-white"
        aria-label={`Switch language to ${oppositeLocale.toUpperCase()}`}
        onClick={() => window.location.href = newPath}>
        {oppositeLocale.toUpperCase()}
      </button>

    </div>
  )
}