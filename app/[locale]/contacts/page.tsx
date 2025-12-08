// import { useTranslations } from "next-intl";

import Container from "@/src/components/container";
import Form from "@/src/components/form/form";
import PageTitle from "@/src/components/page-title";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("contacts");
  return (
    <Container className="mt-14 items-start! gap-16 mb-28">
      <PageTitle title={t("contacts")} description={t("who")} />
      <div className="flex justify-between items-center w-full gap-7">
        <div className="w-1/2  ">
          <p className="text-primary-text font-medium text-3xl leading-relaxed ">
            {t("description")}</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start gap-4">
          <h1 className="text-primary-text font-bold text-2xl ">{t("contact")}</h1>
          <Form />
        </div>
      </div>
    </Container>
  );
}