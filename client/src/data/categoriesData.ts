import { ColorTypes } from "../types/colorTypes";
import { CategoryForwardTo } from "../types/serviceTypes";

export const categoriesArray: {
  name: string;
  color: ColorTypes;
  to: CategoryForwardTo;
}[] = [
  { name: "Shelter", color: "orange", to: "shelter" },
  { name: "Addiction", color: "amber", to: "addiction" },
  { name: "Food and Materials", color: "emerald", to: "material" },
  { name: "Housing", color: "cyan", to: "housing" },
  { name: "Support Groups", color: "violet", to: "supportGroups" },
  { name: "Mental Health", color: "fuchsia", to: "mentalHealth" },
];
