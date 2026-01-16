export interface FullscreenImageSlide {
  id: number;
  image: string;
  caption: string;
}

export interface FullscreenImageSliderProps {
  slides: FullscreenImageSlide[];
  autoplayDelay?: number;
}
