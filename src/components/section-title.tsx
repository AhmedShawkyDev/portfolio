interface SectionTitleProps {
  title: string
}
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-row items-center gap-5 w-full">
      <h1 className="text-4xl text-foreground font-semibold flex gap-2 items-center ">
        <span className="text-primary ">#</span> {title}</h1>
      <div className="w-lvh h-px  bg-primary "></div>
    </div>
  )
}