

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface Props {
  locale: string;
  children: ReactNode;
}

export default async function NextIntlClientProviderWrapper({ locale, children }: Props) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Dubai">{children}</NextIntlClientProvider>;
}
