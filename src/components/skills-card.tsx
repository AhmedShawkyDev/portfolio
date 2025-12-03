interface DataItem {
  id: number;
  title: string;
}

interface SkillsCardProps {
  data: DataItem[];
  name: string;
}

export default function SkillsCard({ data, name }: SkillsCardProps) {
  return (
    <div className="border border-primary-text ">
      <p className="p-2 text-foreground text-lg font-semibold">{name}</p>
      <div className="w-full h-px bg-grey"></div>

      <ul className="flex flex-wrap ">
        {data.map((item) => (
          <li key={item.id} className="p-2 text-primary-text text-lg font-medium">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
