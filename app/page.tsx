'use client'

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

import { HeaderHero } from "@/components/header-hero";
import { headerHeroData } from "@/src/data/header-hero";

import { SectionTitle } from "@/components/section-title";

import { FeaturedCard } from "@/components/featured-card";
import { featuredCardData } from "@/src/data/featured-card";

import { BlogPostCard } from "@/components/blog-post-card";
import { blogPostCardData } from "@/src/data/blog-post-card";

import { ExperienceGallery } from "@/components/experience-gallery";

export default function Home() {
  const sectionTitleButton = {
    label: 'Encontre o imóvel ideal pra você',
    href: '#!',
    icon: '/images/icons/search.svg',
  };
  return (
    <>
      <Navbar {...navbarData} />
      <HeaderHero {...headerHeroData} />
      <SectionTitle variant="withButton" title="Explore os condomínios desse projeto icônico" eyebrow="Empreendimentos" eyebrowColorClass="text-primary" description="Cada endereço em Ilha Pura reserva detalhes únicos e especiais para uma vida completa." button={sectionTitleButton} />
      <ExperienceGallery
        subtitle="Sobre o bairro"
        title="Experimente o melhor <br /> da vida ao seu redor"
        description="PParque Ilha Pura com 72 mil m² de área livre, segurança 24h e conveniências do lado de casa."
        buttonLabel="Viva essa experiência"
        buttonHref="#"
        images={[
          {
            id: 1,
            width: 407,
            height: 270,
            src: "/images/experience/1.jpg",
            alt: "Imagem 1",
            className: "top-12 left-10 max-w-1/3",
          },
          {
            id: 2,
            width: 330,
            height: 231,
            src: "/images/experience/2.jpg",
            alt: "Imagem 2",
            className: "top-12 left-3/8",
          },
          {
            id: 3,
            width: 327,
            height: 327,
            src: "/images/experience/3.jpg",
            alt: "Imagem 3",
            className: "top-8 left-5/8",
          },
          {
            id: 4,
            width: 288,
            height: 192,
            src: "/images/experience/4.jpg",
            alt: "Imagem 4",
            className: "top-2/7 -right-20",
          },
          {
            id: 5,
            width: 275,
            height: 346,
            src: "/images/experience/5.jpg",
            alt: "Imagem 5",
            className: "top-3/7 left-0",
          },
          {
            id: 6,
            width: 560,
            height: 350,
            src: "/images/experience/6.jpg",
            alt: "Imagem 6",
            className: "bottom-0 left-60",
          },
          {
            id: 7,
            width: 444,
            height: 302,
            src: "/images/experience/7.jpg",
            alt: "Imagem 7",
            className: "bottom-0 left-5/10",
          },
          {
            id: 8,
            width: 464,
            height: 346,
            src: "/images/experience/8.jpg",
            alt: "Imagem 8",
            className: "bottom-20 -right-40",
          },
        ]}
      />

      <SectionTitle title="Um bairro pronto para viver com tudo" eyebrow="Destaques" description="Tudo o que você e sua família precisam para um dia a dia com facilidades." />
      <FeaturedCard items={featuredCardData} />
      <BlogPostCard {...blogPostCardData} />
    </>
  );
}
