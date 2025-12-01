"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "../theme/ThemeToggle"
import LocaleSwitcher from "../locale-switcher/locale-swithcher"
import SideSocial from "./side-social"

interface HeaderProps {
  locale: string;
}
export default function Header({ locale }: HeaderProps) {
  const path = usePathname()

  const navLinks = [
    { id: 1, name: "Home", path: `/${locale}` },
    { id: 2, name: "Projects", path: `/${locale}/projects` },
    { id: 3, name: "About Me", path: `/${locale}/about-me` },
    { id: 4, name: "Contacts", path: `/${locale}/contacts` },
  ]

  return (
    <>
      <SideSocial />
      <div className="bg-[var(--color-back)]  ">

        <div className="mx-44 flex justify-between items-center h-16 ">
          <Link href="/" className="font-bold text-xl text-white">Welcome 👋</Link>
          <ul className="flex gap-8">
            {navLinks.map((link) => {
              return (
                <li key={link.id} className="font-medium text-lg text-white"> <span className="text-[var(--color-primary)]"># </span>
                  <Link href={link.path} className={`${path === link.path ? "text-foreground" : "text-[var(--color-grey)]"}`}>{link.name}</Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LocaleSwitcher locale={locale} /></div>
        </div>
      </div>
    </>
  )
}