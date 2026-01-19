import { HeaderHeroPage } from "@/components/header-hero-page";
import { headerHeroPageData } from "@/src/data/header-hero-page";

import { Breadcrumb } from "@/components/breadcrumb";

import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

export default function Contato() {
  return (
    <>
      <Navbar {...navbarData} variant="white" />
      <Breadcrumb />
      <HeaderHeroPage {...headerHeroPageData} />
    </>
  );
}
