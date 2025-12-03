import { useLocale } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const social = [
  { id: 1, name: "github", path: "https://github.com/AhmedShawkyDev", icon: <FaGithub className="w-5 h-5" /> },
  { id: 2, name: "linkedin", path: "https://www.linkedin.com/in/ahmed-shawky-a94003335/", icon: <FaLinkedin className="w-5 h-5" /> }

]

export default function SideSocial() {
  const locale = useLocale();
  return (
    <div className={`fixed flex flex-col top-0 justify-center items-center ${locale} === "ar" ? "right-8" :"left-8"`}>
      <div className="w-px h-48 bg-grey mb-4"></div>
      <ul className="flex flex-col gap-1.5 justify-center items-center ">
        {social.map((icons) => {
          return (
            <li key={icons.id} className={`hover:text-primary w-8 h-8 ${locale === "ar" ? "mr-3.5" : "ml-3.5"}`}>
              <a href={icons.path} target="_blank" rel="noopener noreferrer">{icons.icon}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}