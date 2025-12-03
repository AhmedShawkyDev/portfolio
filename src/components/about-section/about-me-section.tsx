import Link from "next/link";
import Container from "../container";
import { useLocale } from "next-intl";
import Image from "next/image";
import heroo from "@/src/assets/hero2.png";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import SectionTitle from "../section-title";
export default function AboutMeSection() {
  const locale = useLocale();

  return (

    <Container className="w-full h-screen gap-14">
      <SectionTitle title="About Me" />

      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-7 w-1/2">
          <div className="text-lg text-primary-text font-medium flex flex-col gap-4">
            <p>Hello, i’m Ahmed Shawky !</p>
            <p>
              I’m a self-taught front-end developer based in Mansoura , Egypt.
              And live now in jeddah, Saudia Arabia.
              I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been my passion for over a year.
              I have been helping various clients to establish their presence online.
              I always strive to learn about the newest technologies and frameworks.
            </p>
          </div>

          <Link href={`/${locale}/about-me`} className="border px-4 py-2 border-primary w-fit hover:bg-primary flex  items-center">
            Read More --
            <RiArrowRightDoubleLine />
          </Link>
        </div>

        <div className="w-1/2 flex justify-end">
          <Image src={heroo} alt="Ahmed Shawky" width={400} height={400} />
        </div>

      </div>
    </Container >
  );
}