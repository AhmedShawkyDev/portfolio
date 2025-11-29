"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "../theme/ThemeToggle"

export default function Header() {
  const path = usePathname()

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Projects", path: "/projects" },
    { id: 3, name: "About Me", path: "/about-me" },
    { id: 4, name: "Contacts", path: "/contacts" },
  ]

  return (
    <div className="bg-[var(--color-back)]">
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
        <ThemeToggle />
      </div>
    </div>
  )
}