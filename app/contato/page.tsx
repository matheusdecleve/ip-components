import { HeaderHeroPage } from "@/components/header-hero-page";
import { Breadcrumb } from "@/components/breadcrumb";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

export default function Contato() {
  return (
    <>
      <Navbar {...navbarData} variant="white" />
      <Breadcrumb />
      <HeaderHeroPage
        subtitle="Contato"
        title="Fale conosco"
        description="Tire dúvidas, solicite informações e agende uma visita diretamente com nosso time."
      />
    </>
  );
}
