
import { useTranslations } from "next-intl";
import InputField from "./input-field";

export default function Form() {
  const t = useTranslations("contacts");
  return (
    <>
      <form className="flex flex-col gap-4 w-full "
        action="https://formsubmit.co/ahshawky7@gmail.com"
        method="POST">
        <InputField type="text" id="name" name="name" labelName={t("name")} />
        <InputField type="email" id="email" name="email" labelName={t("email")} />
        <InputField type="text" id="title" name="title" labelName={t("title")} />
        <input type="hidden" name="_captcha" value="false" />
        <p className="flex flex-col justify-center items-start w-full gap-2">
          <label htmlFor="message">{t("message")}</label>
          <textarea name="message" id="message" rows={5} required className="border w-full p-2 " placeholder={t("message")}>
          </textarea>
        </p>

        <button
          type="submit"
          className="border px-4 py-2 border-primary w-fit hover:bg-primary text-foreground cursor-pointer">
          {t("submit")}</button>
      </form>
    </>
  )
}