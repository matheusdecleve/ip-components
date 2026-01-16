import Image from "next/image";
import { ImageCardProps } from "./types";

function getGridColsClass(length: number) {
  if (length === 1) return "grid-cols-1";
  if (length === 2) return "grid-cols-2";
  if (length === 3) return "grid-cols-3";
  return "grid-cols-4";
}

export function ImageCard({ items }: ImageCardProps) {
  const gridColsClass = getGridColsClass(items.length);

  return (
    <div className={`container grid ${gridColsClass} gap-x-8 padding-section`}>
      {items.map((item) => (
        <div key={item.id} className="h-[420px] relative bg-dark-gray flex flex-col justify-end group overflow-hidden">
          {/* Background image */}
          <Image src={item.image} alt={item.imageAlt || "Imagem"} fill className="object-cover group-hover:scale-110 transition-all duration-700" />

          {/* Content */}
          <div className="z-10 text-white px-8 py-10 space-y-2 bg-gradient-to-b from-black/0 to-black/40">
            <div className="group-hover:-translate-y-4 transition-all duration-700">
              <Image src={item.icon} alt={item.iconAlt || ""} width={32} height={32} />

              <h4 className="mb-2">{item.title}</h4>

              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
