import { HeaderHero } from "@/components/header-hero";
import { headerHeroData } from "@/src/data/header-hero";

import { HeaderHeroPage } from "@/components/header-hero-page";
import { headerHeroPageData } from "@/src/data/header-hero-page";

import { HeaderHeroProduct } from "@/components/header-hero-product";
import { headerHeroProductData } from "@/src/data/header-hero-product";

import { SectionTitle } from "@/components/section-title";
import { sectionTitleData } from "@/src/data/section-title";

import { IconBox } from "@/components/icon-box";
import { iconBoxData } from "@/src/data/icon-box";

import { FeaturedCard } from "@/components/featured-card";
import { featuredCardData } from "@/src/data/featured-card";

import { ImageCard } from "@/components/image-card";
import { imageCardData } from "@/src/data/image-card";

import { TestimonialSlider } from "@/components/testimonial-slider";
import { testimonialSliderData } from "@/src/data/testimonial-slider";

import { FullscreenImageSlider } from "@/components/fullscreen-image-slider";
import { fullscreenImageSliderData } from "@/src/data/fullscreen-image-slider";

import { ImageContentTabs } from "@/components/image-content-tab";
import { imageContentTabsData } from "@/src/data/image-content-tabs";

import { GalleryRow } from "@/components/gallery-row";
import { galleryRowData } from "@/src/data/gallery-row";

import { FaqContent } from "@/components/faq-content";
import { faqContentData } from "@/src/data/faq-content";

import { BlogPostCard } from "@/components/blog-post-card";
import { blogPostCardData } from "@/src/data/blog-post-card";

import { ContactInfoBox } from "@/components/contact-info-box/ContactInfoBox";
import { contactInfoBoxData } from "@/src/data/contact-info-box";

import { Breadcrumb } from "@/components/breadcrumb";

import { ProductSection } from "@/components/product-section";
import { productCardData } from "@/src/data/product-card";

import { PlantsContentTab } from "@/components/plants-content-tab";
import { plantsContentTabData } from "@/src/data/plants-content-tab";
import { Navbar } from "@/components/navbar";
import { navbarData } from "@/src/data/navbar";

export default function Home() {
  return (
    <>
      <Navbar {...navbarData} />
      <HeaderHero {...headerHeroData} />
      <SectionTitle {...sectionTitleData} />
      <HeaderHeroPage {...headerHeroPageData} />
      <HeaderHeroProduct {...headerHeroProductData} />
      <IconBox items={iconBoxData} />
      <FeaturedCard items={featuredCardData} />
      <ImageCard items={imageCardData} />
      <TestimonialSlider items={testimonialSliderData} />
      <FullscreenImageSlider slides={fullscreenImageSliderData} />
      <ImageContentTabs items={imageContentTabsData} />
      <GalleryRow {...galleryRowData} />
      <FaqContent items={faqContentData} />
      <BlogPostCard {...blogPostCardData} />
      <ProductSection products={productCardData} />
      <PlantsContentTab plants={plantsContentTabData} />
      <ContactInfoBox items={contactInfoBoxData} />
    </>
  );
}
