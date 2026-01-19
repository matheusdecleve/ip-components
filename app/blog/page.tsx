import { HeaderHeroPage } from "@/components/header-hero-page";

import { Breadcrumb } from "@/components/breadcrumb";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

export default function Blog() {
  return (
    <>
      <Navbar {...navbarData} variant="white" />
      <Breadcrumb />
      <HeaderHeroPage  
        subtitle="Blog"
        title="Leia as últimas notícias<br />do Ilha Pura"
        description="Conheça nosso blog e descubra tudo o que acontece no bairro." />
    </>
  );
}
