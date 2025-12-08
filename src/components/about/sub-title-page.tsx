interface SubTitlePageProps {
  title: string
}
export default function SubTitlePage({ title }: SubTitlePageProps) {
  return (
    <div className="flex flex-row items-center gap-5">
      <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
        <span className="text-primary ">#</span> {title}</h1>
    </div>
  )
}