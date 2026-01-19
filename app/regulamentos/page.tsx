import { HeaderHeroPage } from "@/components/header-hero-page";

import { Breadcrumb } from "@/components/breadcrumb";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

export default function Regulamentos() {
  return (
    <>
      <Navbar {...navbarData} variant="white" />
      <Breadcrumb />
      <HeaderHeroPage  
        subtitle="Documentos"
        title="Regulamentos"
        description="Encontre documentos importantes sobre os empreendimentos do Ilha Pura." />
    </>
  );
}
