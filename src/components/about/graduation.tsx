export default function Graduation() {
  const graduation = [
    { id: 1, title: "Faulty of Arts", description: "- Graduated from Mansoura University with a degree in oriantal languages." },
    { id: 2, title: "IT Share", description: "- Certificated course from IT share in full stack web development ." },
  ]
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
            <span className="text-primary ">#</span> Certifications</h1>
        </div>
      </div>
      {graduation.map((item) => {
        return (
          <div key={item.id} className="flex flex-col" >
            <span className="text-foreground text-xl font-semibold "> -- {item.title}</span>
            <p className=" text-primary-text text-lg font-medium">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}