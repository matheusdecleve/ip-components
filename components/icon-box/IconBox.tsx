import Image from "next/image";
import { IconBoxProps } from "./types";

export function IconBox({ items }: IconBoxProps) {
  return (
    <div className="container grid grid-cols-3 gap-8 padding-section">
      {items.map((item) => (
        <div key={item.id} className="space-y-2">
          <Image src={item.icon} alt={item.iconAlt || item.title} width={32} height={32} />

          <h4>{item.title}</h4>

          <p className="text-base">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
