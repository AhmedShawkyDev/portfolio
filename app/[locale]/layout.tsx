import { locales } from "@/navigation";
import Header from "@/src/components/header/Header";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string | any }>;
}) {
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));
  const { locale: currentLocale } = resolvedParams;

  if (!locales.includes(currentLocale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${currentLocale}.json`)).default;
  } catch (error) {
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
        >
          {children}

        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
