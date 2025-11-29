import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import Header from "../components/header/Header";


const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fira.variable} dark`} suppressHydrationWarning={true} >
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
