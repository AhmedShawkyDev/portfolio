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
  closeMenu: () => void;
}

export default function MobileNavLinks({ data, closeMenu }: NavLinksProps) {
  const locale = useLocale()
  return (
    <div className="flex flex-col justify-start items-start gap-8 p-3 bg-back/90 ">
      <ul className="flex flex-col gap-4 ">
        {data.map((item) => (
          <li
            key={item.id}
            className="text-white text-xl font-semibold"
            onClick={closeMenu}
          >
            <span className="text-primary"># </span>
            <Link href={item.path} aria-label={`Go to ${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-start w-3/4 ">
        <ThemeToggle />
        <LocaleSwitcher locale={locale} />
      </div>
    </div>
  );
}