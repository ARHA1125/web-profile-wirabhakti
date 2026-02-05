interface ProgramProps {
  title: string;
  age: string;
  desc: string;
  image: string;
}

export default function ProgramCard({ title, age, desc, image }: ProgramProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <span className="text-primary font-bold text-sm uppercase">{age}</span>
        <h3 className="text-2xl font-bold mt-2 text-secondary">{title}</h3>
        <p className="mt-3 text-gray-600">{desc}</p>
        <button className="mt-6 font-bold text-secondary border-b-2 border-primary inline-block hover:text-primary transition-colors">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}