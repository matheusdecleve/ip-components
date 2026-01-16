export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqContentProps {
  items: FaqItem[];
}
