export default function MyHoppies() {
  const hoppies = [
    { id: 1, title: "Learning New Tools" },
    { id: 2, title: "Coding" },
    { id: 3, title: "fitness/gym" },
    { id: 4, title: "Gaming" },
    { id: 5, title: "Anime" },

  ]
  return (
    <div className="flex flex-col gap-6 w-full ">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-4xl text-foreground font-semibold flex gap-2 ">
          <span className="text-primary ">#</span> My Hoppies</h1>
      </div>
      <ul className="flex gap-4">
        {hoppies.map((item) => (
          <li key={item.id} className="border border-primary-text text-medium text-primary-text p-2 w-fit">{item.title}</li>
        ))}
      </ul>
    </div>
  );
}