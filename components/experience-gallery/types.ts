export type ExperienceImage = {
  id: number;
  src: string;
  alt: string;

  width: number;
  height: number;

  className: string;
};

export type ExperienceGalleryProps = {
  title: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  images: ExperienceImage[];
};
