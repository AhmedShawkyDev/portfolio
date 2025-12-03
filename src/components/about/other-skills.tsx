export default function OtherSkills() {
  const other = [
    { id: 1, title: "- Word (professional documentation & reporting)" },
    { id: 2, title: "- Excel (formulas, pivot tables)" },

  ]
  return (
    <div className="flex flex-col w-full gap-6 mb-40">
      <div className="flex flex-row justify-between! items-center gap-6 w-full">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
            <span className="text-primary ">#</span> Office & Productifty Tools</h1>
        </div>
      </div>
      <ul className="flex flex-col">
        {other.map((item) => (
          <li key={item.id} className="text-primary-text text-lg font-medium">{item.title}</li>
        ))}
      </ul>
    </div>
  )
}