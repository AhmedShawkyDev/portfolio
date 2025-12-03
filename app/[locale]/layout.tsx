import { locales } from "@/navigation";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header/Header";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode
  params: {
    locale: string;
  };
}


export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));
  const { locale: currentLocale } = resolvedParams;

  if (!locales.includes(currentLocale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${currentLocale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider
      locale={currentLocale || "en"}
      messages={messages}
      timeZone="Asia/Dubai"
    >

      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
        <Header locale={currentLocale} />
        <div
          dir={currentLocale === "ar" ? "rtl " : "ltr"}
          lang={currentLocale}
          className={`${currentLocale === "ar" ? "font-cairo" : "font-fira-code"} `}
        >
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
