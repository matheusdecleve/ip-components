import Image from "next/image";
import Link from "next/link";
import { ProductImageCardData } from "./types";

export function ProductImageCard({ id, title, cssClass, image, logo, price, href, tags }: ProductImageCardData) {
  return (
    <div className={`product-image-card relative ${cssClass}`} id={`product-${id}`}>
      <Link href={href}>
        <div className="w-full h-full relative bg-dark-gray flex flex-col justify-end overflow-hidden">
          <Image
            src={image}
            alt={`Imagem do empreendimento ${title}`}
            width={1200}
            height={420}
            className="absolute inset-0 w-full h-full object-cover z-10 product-image-banner__img"
          />
      
          <div className="absolute bottom-0 left-0 w-full h-[270px] z-20 backdrop-blur-md blur-mask"></div>
          <div className="bg-overlay z-20 py-10 px-12">
            <div className={`mb-6 text-white ${cssClass !== 'product-image-card__small' ? 'flex items-center' : ''}`}>
              <img src={logo} alt={`Logo ${title}`} className="max-h-[72px] max-w-[280px]" />
              {cssClass === 'product-image-card__small' ? (
                <div className="h-[1px] w-full border-t border-gray block mt-6 mb-4"></div>
              ) : (
                <div className="h-14 border-l border-white ms-10 me-6"></div>
              )}
              <div className={`${cssClass === 'product-image-card__small' ? 'flex items-center gap-x-4' : ''}`}>
                <span className="text-sm leading-0">a partir de</span>
                <p className="product-image-card__title text-2xl leading-8 font-light">R$ <span className="font-bold">{price}</span></p>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span key={index} className="flex items-center gap-x-2 max-w-fit px-2 py-2 mb-1 text-sm bg-[#f0f0f0]">
                  <Image src={tag.icon} alt="Ícone" width={16} height={16} />
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
