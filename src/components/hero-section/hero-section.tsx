import Image from "next/image";
import Container from "../container";
import hero from "@/src/assets/hero.png";
export default function HeroSection() {
  return (
    <Container className="flex-row gap-5 justify-between w-full">
      <div className="flex flex-col gap-3.5 w-2/3">
        <div className="text-4xl text-[var(--foreground)]  flex flex-wrap gap-4 font-semibold">My Name is
          <span className="text-[var(--color-primary)]"> Ahmed Shawky </span>
          and I am a
          <span className="text-[var(--color-primary)]"> front-end developer</span>
        </div>
        <p className="">
          Frontend developer passionate about turning ideas into seamless digital experiences. Enthusiastic about React and building modern, practical applications.
        </p>
      </div>
      <div className="w-1/3">
        <Image src={hero} alt="Ahmed Shawky" width={400} height={400} />
      </div>
    </Container>
  )
}