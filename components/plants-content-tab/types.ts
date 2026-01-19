export type PlantImage = {
  src: string;
  alt?: string;
};

export type PlantItem = {
  id: string;
  title: string;
  area: string;
  images: PlantImage[];
};

export type PlantsContentTabProps = {
  plants: PlantItem[];
};
