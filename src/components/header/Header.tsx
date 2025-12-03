"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "../theme/ThemeToggle"
import LocaleSwitcher from "../locale-switcher/locale-swithcher"
import SideSocial from "./side-social"
import { useTranslations } from "next-intl"

interface HeaderProps {
  locale: string;
}
export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("header")
  const path = usePathname()

  const navLinks = [
    { id: 1, name: t("home"), path: `/${locale}` },
    { id: 2, name: t("projects"), path: `/${locale}/projects` },
    { id: 3, name: t("about-me"), path: `/${locale}/about-me` },
    { id: 4, name: t("contacts"), path: `/${locale}/contacts` },
  ]

  return (
    <div className={`${locale === "ar" ? "font-cairo" : "font-fira-code"}`}>
      <SideSocial />
      <div className="bg-back  ">

        <div className="mx-44 flex justify-between items-center h-16 ">
          <Link href="/" className="font-bold text-xl text-white">{t("welcome")} 👋</Link>
          <ul className="flex gap-8">
            {navLinks.map((link) => {
              return (
                <li key={link.id} className="font-medium text-lg text-white"> <span className="text-primary"># </span>
                  <Link href={link.path} className={`${path === link.path ? "text-foreground" : "text-grey"}`}>{link.name}</Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LocaleSwitcher locale={locale} /></div>
        </div>
      </div>
    </div>
  )
}