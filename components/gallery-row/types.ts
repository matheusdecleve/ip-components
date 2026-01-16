export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryRowProps {
  row1: GalleryImage[];
  row2: GalleryImage[];
}
