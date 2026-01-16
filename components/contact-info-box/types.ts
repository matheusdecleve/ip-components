export interface ContactInfoItem {
  id: number;
  label: string;
  labelHighlight?: string;
  value: string | string[];
}

export interface ContactInfoBoxProps {
  items: ContactInfoItem[];
}
