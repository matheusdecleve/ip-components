export interface BreadcrumbLabelMap {
  [key: string]: string;
}

export interface BreadcrumbProps {
  /**
   * Mapa opcional para customizar labels
   * ex: { empreendimentos: "Empreendimentos", oro: "Oro" }
   */
  labels?: BreadcrumbLabelMap;
}
