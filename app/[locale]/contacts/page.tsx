// import { useTranslations } from "next-intl";

import Container from "@/src/components/container";
import Form from "@/src/components/form/form";
import PageTitle from "@/src/components/page-title";

export default function Contacts() {
  // const t = useTranslations("contacts");
  return (
    <Container className="mt-14 items-start! gap-16">
      <PageTitle title="Contacts" description="Who am i?" />
      <div className="flex justify-between items-center w-full">
        <div className="w-1/2">
          <p className="text-primary-text font-medium text-lg ">
            I’m currently seeking a front-end developer position or freelance opportunity.
            However, if you have other request or question, don’t hesitate to contact me.</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start gap-4">
          <h1 className="text-primary-text font-bold text-2xl ">Contact with Email too !</h1>
          <Form />
        </div>
      </div>
    </Container>
  );
}