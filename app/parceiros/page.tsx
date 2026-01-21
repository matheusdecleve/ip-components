import { HeaderHeroPage } from "@/components/header-hero-page";
import { headerHeroPageData } from "@/src/data/header-hero-page";

import { Breadcrumb } from "@/components/breadcrumb";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

export default function Parceiros() {
  return (
    <>
      <Navbar {...navbarData} variant="white" />
      <Breadcrumb />
      <HeaderHeroPage  
        subtitle="Parceiros"
        title="Cadastre-se e seja um <br /> parceiro Ilha Pura"
        description="Preencha o formulário abaixo que nosso time entrará em contato." 
      />
    </>
  );
}
