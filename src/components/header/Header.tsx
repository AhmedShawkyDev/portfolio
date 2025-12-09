"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "../theme/ThemeToggle"
import LocaleSwitcher from "../locale-switcher/locale-swithcher"
import SideSocial from "./side-social"
import { useTranslations } from "next-intl"
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import MobileNavLinks from "./mobile-nav-links"
import { motion } from "framer-motion"
interface HeaderProps {
  locale: string;
}
export default function Header({ locale }: HeaderProps) {

  const t = useTranslations("header")
  const path = usePathname()
  const [openMenu, setOpenMenu] = useState(false)
  const handleOpenMenu = () => {
    setOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setOpenMenu(false)
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
      <div className="bg-back w-full fixed top-0 left-0 z-10 ">
        <div className="mx-4 lg:mx-22 xl:mx-44 flex flex-col lg:flex-row justify-between items-center h-12 lg:h-16 ">

          <div className="flex justify-between items-center  w-full lg:w-1/4 xl:w-1/8 py-2  ">
            <Link href="/" className="font-bold text-xl text-white ">{t("welcome")}
              <motion.div
                animate={{ rotate: [0, 20, -15, 15, -10, 10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }} // مهم عشان rotate يبقى طبيعي
              >
                👋
              </motion.div></Link>
            <button
              onClick={openMenu ? handleCloseMenu : handleOpenMenu}
              className="lg:hidden font-bold text-3xl text-white"
            >
              {openMenu ? <IoMdClose /> : locale === "ar" ? <BiMenuAltLeft /> : <BiMenuAltRight />}
            </button>
          </div>
          {openMenu && (
            <div className={`fixed top-11.5  index-50 w-full h-screen bg-back/90  ${locale === "ar" ? "right-0" : "left-0"} `}>
              <MobileNavLinks data={navLinks} closeMenu={handleCloseMenu} />
            </div>
          )}
          <ul className="hidden lg:flex gap-4 xl:gap-8 ">
            {navLinks.map((link) => {
              return (
                <li key={link.id} className="font-medium text-lg  text-white flex "> <span className="text-primary"># </span>
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
    </div >
  )
}