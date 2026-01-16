import Image from "next/image";
import Link from "next/link";
import { ProductCardData } from "./types";

export function ProductCard({ id, title, image, price, href, tags }: ProductCardData) {
  return (
    <div id={`product-${id}`}>
      <Image
        src={image}
        alt={`Imagem do empreendimento ${title}`}
        width={400}
        height={330}
        className="w-full max-h-[330px] min-h-[330px] object-cover block mb-6 bg-[#DADADA]"
      />

      <h2 className="!text-[32px]/10 mt-4 mb-2 border-b border-[#F0F0F0]">{title}</h2>

      <span className="block text-sm text-dark-gray">a partir de</span>
      <span className="block text-lg text-dark-gray">
        R$ <span className="font-bold">{price}</span>
      </span>

      <div className="flex items-center flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="flex items-center gap-x-2 max-w-fit px-2 py-2 mb-1 text-sm bg-[#f0f0f0]">
            <Image src={tag.icon} alt="" width={16} height={16} />
            {tag.label}
          </span>
        ))}
      </div>

      <Link href={href} className="inline-block text-sm text-gray border border-light button !max-w-full mt-8 hover:bg-primary-dark hover:text-white">
        Explore o imóvel
      </Link>
    </div>
  );
}
