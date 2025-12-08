"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "../theme/ThemeToggle"
import LocaleSwitcher from "../locale-switcher/locale-swithcher"
import SideSocial from "./side-social"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import MobileNavLinks from "./mobile-nav-links"

interface HeaderProps {
  locale: string;
}
export default function Header({ locale }: HeaderProps) {

  const t = useTranslations("header")
  const path = usePathname()
  const [openMenu, SetOpenMenu] = useState(false)
  const handleOpenMenu = () => {
    SetOpenMenu((prev) => !prev)
  }

  const navLinks = [
    { id: 1, name: t("home"), path: `/${locale}` },
    { id: 2, name: t("projects"), path: `/${locale}/projects` },
    { id: 3, name: t("about-me"), path: `/${locale}/about-me` },
    { id: 4, name: t("contacts"), path: `/${locale}/contacts` },
  ]

  return (
    <div className={`${locale === "ar" ? "font-cairo" : "font-fira-code"}`}>
      <SideSocial />
      <div className="bg-back w-full ">
        <div className="mx-4 lg:mx-44 flex flex-col lg:flex-row justify-between items-center h-12 lg:h-16 ">
          <div className="flex justify-between items-center w-full lg:w-0  py-2 ">  <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          ><Link href="/" className="font-bold text-xl text-white">{t("welcome")}
              👋</Link></motion.div>
            <button onClick={handleOpenMenu} className="lg:hidden font-bold text-3xl text-white"  >
              {openMenu ? (
                <IoMdClose />
              ) : locale === "ar" ? (
                <BiMenuAltLeft />
              ) : (
                <BiMenuAltRight />
              )}
            </button></div>
          {openMenu && (
            <div className={`fixed top-11.5  index-50 w-fit h-fit  ${locale === "ar" ? "right-0" : "left-0"}`}>
              <MobileNavLinks data={navLinks} />
            </div>
          )}
          <ul className="hidden lg:flex gap-8 ">
            {navLinks.map((link) => {
              return (
                <li key={link.id} className="font-medium text-lg text-white"> <span className="text-primary"># </span>
                  <Link href={link.path} className={`${path === link.path ? "text-foreground" : "text-grey"}`}>{link.name}</Link>
                </li>
              )
            })}
          </ul>
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <LocaleSwitcher locale={locale} /></div>
        </div>
      </div>
    </div>
  )
}