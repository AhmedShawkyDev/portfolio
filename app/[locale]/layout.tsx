import { ReactNode } from "react";
import { locales } from "@/navigation";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header/Header";
// import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import NextIntlClientProviderWrapper from "@/src/components/client-wrapper";

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params));
  const locale = resolvedParams.locale as "en" | "ar";

  if (!locales.includes(locale)) notFound();

  return (
    <NextIntlClientProviderWrapper locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="dark" value={{ light: "light", dark: "dark" }}>
        <Header locale={locale} />
        <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale} className={`${locale === "ar" ? "font-cairo" : "font-fira-code"}`}>
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProviderWrapper>
  );
}

