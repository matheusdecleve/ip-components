import { HeaderHeroPage } from "@/components/header-hero-page";
import type { HeaderHeroPageButton } from "@/components/header-hero-page/types";

import { Breadcrumb } from "@/components/breadcrumb";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

export default function PortalDoCliente() {
  
  const buttons: HeaderHeroPageButton[] = [
    {
      id: 1,
      label: "Seja um parceiro",
      href: "#!",
      variant: "primary",
    },
  ]
  
  return (
    <>
      <Navbar {...navbarData} variant="white" />
      <Breadcrumb />
      <HeaderHeroPage  
        subtitle="Portal do cliente"
        title="Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        buttons={buttons}
      />
    </>
  );
}
