import { ColorTypes } from "../types/colorTypes";

export const categoriesArray: {
  name: string;
  color: ColorTypes;
  to: string;
}[] = [
  { name: "Shelter", color: "orange", to: "shelter" },
  { name: "Addiction", color: "amber", to: "addiction" },
  { name: "Food and Materials", color: "emerald", to: "material" },
  { name: "Housing", color: "cyan", to: "housing" },
  { name: "Support Groups", color: "violet", to: "supportGroups" },
  { name: "Mental Health", color: "fuchsia", to: "mentalHealth" },
];
