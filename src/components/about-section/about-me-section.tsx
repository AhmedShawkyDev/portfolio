import Container from "../container";

export default function AboutMeSection() {
  return (
    <Container className="w-full h-screen">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
          <span className="text-primary ">#</span> About Me</h1>
        <div className="w-lvh h-px  bg-primary "></div>
      </div>
    </Container>
  );
}