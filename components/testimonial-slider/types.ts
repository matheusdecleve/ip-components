export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface TestimonialSliderProps {
  items: TestimonialItem[];
  autoplayDelay?: number;
}
