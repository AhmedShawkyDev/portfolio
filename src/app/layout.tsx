import "./globals.css";
import { Fira_Code } from "next/font/google";
import { headers } from "next/headers";
import { routing } from "@/routing";


const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata = {
  title: "Ahmed Shawky | Portfolio",
  description: "Welcome to my portfolio ",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const currentLocale =
    headersList.get("x-next-intl-locale") || routing.defaultLocale;
  return (
    <html lang={currentLocale} dir={currentLocale === "ar" ? "rtl" : "ltr"} className={`${fira.variable} dark`} suppressHydrationWarning={true} >
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
