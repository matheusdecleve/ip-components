import { HeaderHero } from "@/components/header-hero";
import { HeaderHeroProps } from "@/components/header-hero";
import { SectionTitle, SectionTitleProps } from "@/components/section-title";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";
import { ProductImageCard } from "@/components/product-image-card";
import { ContactForm } from "@/components/contact-form";

export default function Home() {

  const headerHeroData: HeaderHeroProps = {
    title: "A vida na Barra em sua forma mais rara",
    description: "Um ícone se revela quando a sofisticação se manifesta em um lugar raro, Ilha Pura.",
    backgroundImage: "/images/header-hero-oro.jpg",
    buttons: [
      {
        id: 1,
        label: "Explore o imóvel",
        href: "#!",
        variant: "primary",
      }
    ],
  };

  const sectionTitleData: SectionTitleProps = {
    variant: "withButton",
    eyebrow: "Empreendimentos",
    eyebrowColorClass: "text-primary",
    title: "Descubra os condomínios do Ilha Pura",
    description: "Explore os detalhes e encantos de cada um dos empreendimentos do bairro mais moderno do Rio. ",
    button: {
      label: "Encontre o imóvel ideal pra você",
      href: "#!",
      icon: "/images/icons/search.svg",
    },
  }; 

  const productsImageCards = [
    {
      id: 1,
      title: "Astra",
      image: "/images/product-banners/banner-astra.png",
      logo: "/images/logos/logo-product-astra.svg",
      price: "1.200.000,00",
      href: "/empreendimentos/astra",
      tags: [
        {
          icon: "/images/icons/champagne.svg",
          label: "Lançamento",
        },
        {
          icon: "/images/icons/bathtub.svg",
          label: "1 ou 2 suítes",
        },
        {
          icon: "/images/icons/ruler.svg",
          label: "Aptos. de 86 a 93 m²",
        },
      ],
    },
    {
      id: 2,
      title: "Elos",
      image: "/images/product-banners/banner-elos.png",
      logo: "/images/logos/logo-product-elos.svg",
      price: "941.369,52",
      href: "/empreendimentos/elos",
      tags: [
        {
          icon: "/images/icons/fire.svg",
          label: "Últimas Unidades",
        },
        {
          icon: "/images/icons/bathtub.svg",
          label: "1 ou 2 suítes",
        },
        {
          icon: "/images/icons/ruler.svg",
          label: "Aptos. de 118,16 a 124, 82 m²",
        },
      ],
    },
    {
      id: 3,
      title: "Millenio",
      image: "/images/product-banners/banner-millenio.png",
      logo: "/images/logos/logo-product-millenio.svg",
      price: "641.042,61",
      href: "/empreendimentos/millenio",
      tags: [
        {
          icon: "/images/icons/check-circle.svg",
          label: "100% Vendido",
        },
        {
          icon: "/images/icons/bathtub.svg",
          label: "1 ou 2 suítes",
        },
        {
          icon: "/images/icons/ruler.svg",
          label: "Aptos. de 78 a 84 m²",
        },
      ],
    },
    {
      id: 4,
      title: "Oro",
      image: "/images/product-banners/banner-oro.png",
      logo: "/images/logos/logo-product-oro.svg",
      price: "2.000.000,00",
      href: "/empreendimentos/oro",
      tags: [
        {
          icon: "/images/icons/champagne.svg",
          label: "Lançamento",
        },
        {
          icon: "/images/icons/bathtub.svg",
          label: "1 ou 2 suítes",
        },
        {
          icon: "/images/icons/ruler.svg",
          label: "Aptos. de 171 a 461 m²",
        },
      ],
    },
    {
      id: 5,
      title: "Saint Michel",
      image: "/images/product-banners/banner-saint-michel.png",
      logo: "/images/logos/logo-product-saint-michel.svg",
      price: "1.126.574,00",
      href: "/empreendimentos/saint-michel",
      tags: [
        {
          icon: "/images/icons/fire.svg",
          label: "Últimas Unidades",
        },
        {
          icon: "/images/icons/bed.svg",
          label: "3 e 4 quartos",
        },
        {
          icon: "/images/icons/ruler.svg",
          label: "Aptos. de 131 a 161 m²",
        },
      ],
    },
    {
      id: 6,
      title: "Viure",
      image: "/images/product-banners/banner-viure.png",
      logo: "/images/logos/logo-product-viure.svg",
      price: "917.071,00",
      href: "/empreendimentos/viure",
      tags: [
        {
          icon: "/images/icons/fire.svg",
          label: "Últimas Unidades",
        },
        {
          icon: "/images/icons/bed.svg",
          label: "3 quartos",
        },
        {
          icon: "/images/icons/ruler.svg",
          label: "Aptos. de 110 m²",
        },
      ],
    },
  ];

  const sectionTitleFormData: SectionTitleProps = {
    variant: "default",
    cssClass: "!p-0",
    eyebrow: "Contato",
    eyebrowColorClass: "text-primary",
    title: "Fale conosco",
    description: "Tire dúvidas, solicite informações e agende uma visita diretamente com nosso time. ",
  }; 
  

  return (
    <>
      <Navbar {...navbarData} />
      <HeaderHero {...headerHeroData} />
      <SectionTitle {...sectionTitleData} />

      <div className="container padding-bottom-section grid grid-cols-3 gap-x-5 gap-y-8 !pb-[120px]">
        {productsImageCards.map((product) => (
          <ProductImageCard
            key={product.id}
            cssClass={
              productsImageCards.indexOf(product) === 0
                ? "product-image-card__big"
                : productsImageCards.indexOf(product) === 1
                ? "product-image-card__medium"
                : "product-image-card__small"
            }
            {...product}
          />
        ))}
      </div>

      <div className="py-[100px] section-form bg-cover">
        <div className="max-w-2xl mx-auto bg-white py-12 px-14">
          <SectionTitle {...sectionTitleFormData} />
          <ContactForm
            color="primary"
            products={[
              { value: "astra", label: "Astra" },
              { value: "elos", label: "Elos" },
              { value: "millenio", label: "Millenio" },
              { value: "oro", label: "Oro" },
              { value: "saint-michel", label: "Saint Michel" },
              { value: "viure", label: "Viure" },
            ]}
          />
        </div>
      </div>

    </>
  );
}
