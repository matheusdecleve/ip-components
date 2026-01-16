import Image from "next/image";
import { HeaderHeroProductProps } from "./types";

export function HeaderHeroProduct({ backgroundColorClass, linesImage, logo, priceLabel, price, title, badges }: HeaderHeroProductProps) {
  return (
    <section
      className={`w-full min-h-[524px] relative ${backgroundColorClass}
      flex flex-col justify-center header-hero-product overflow-hidden`}
    >
      {/* LINHAS */}
      <Image src={linesImage} alt="Imagem de linhas ilustrativas" width={1200} height={400} className="absolute bottom-0 -right-40" />

      <div className="container">
        {/* TOPO */}
        <div className="flex items-center mb-9 text-white">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />

          <div className="h-14 border-l border-white ms-10 me-6"></div>

          <div>
            <span className="text-sm leading-0">{priceLabel}</span>
            <p className="text-[32px] leading-10 font-light">
              R$ <span className="font-bold">{price}</span>
            </p>
          </div>
        </div>

        {/* TÍTULO */}
        <h1 className="text-white mb-6 !text-[56px] max-w-3xl">{title}</h1>

        {/* BADGES */}
        <div className="flex items-center flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge.id}
              className="flex items-center gap-x-2 max-w-fit px-2 py-2 mb-1
              text-sm bg-product-oro-secondary text-white"
            >
              <Image src={badge.icon} alt="" width={16} height={16} />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
