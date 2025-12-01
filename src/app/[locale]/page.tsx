
import Container from "@/src/components/container";
import HeroSection from "@/src/components/hero-section/hero-section";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("home");

  return (
    <Container className="flex flex-col  mt-16">
      <HeroSection />
    </Container>
  );
}