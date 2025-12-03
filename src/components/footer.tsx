import Link from "next/link";
import Container from "./container";
import { social } from "./header/side-social";
import { useLocale } from "next-intl";
export default function Footer() {
  const locale = useLocale();
  return (
    <>
      <div className="w-full h-px bg-primary-text"></div>
      <Container className="h-56  flex-col  gap-12 py-8">
        <div className="flex justify-between w-full">
          <div className="flex-col  items-start">
            <p className="text-lg font-medium text-foreground">Ahmed Shawky</p>
            <p className="text-lg font-medium text-foreground">front-end developer</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg font-medium text-foreground">Social</p>
            <ul className=" flex">
              {social.map((icons) => {
                return (
                  <li key={icons.id} className="hover:text-primary w-8 h-8 ">
                    <a href={icons.path} target="_blank" rel="noopener noreferrer" >{icons.icon}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg text-primary-text">© Copyright 2025. Made by
            <Link href={`/${locale}/`} className="text-primary"> Me</Link>
          </p>

        </div>

      </Container>
    </>
  )
}
