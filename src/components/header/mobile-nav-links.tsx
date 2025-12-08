import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";
import LocaleSwitcher from "../locale-switcher/locale-swithcher";
import { useLocale } from "next-intl";

interface DataItem {
  id: number;
  name: string;
  path: string;
}
interface NavLinksProps {
  data: DataItem[]
}

export default function MobileNavLinks({ data }: NavLinksProps) {
  const locale = useLocale()
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-3 bg-back ">
      <ul className="flex flex-col gap-4 ">
        {data.map((item) => (
          <li key={item.id} className="text-white text-2xl font-semibold">
            <span className="text-primary"># </span>  <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <LocaleSwitcher locale={locale} />
    </div>
  )
}