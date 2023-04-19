import { categoriesArray } from "../data/categoriesData";
import { ColorTypes } from "../types/colorTypes";

export const getCategoryColor = (category: string): ColorTypes => {
  //find the category within the array
  const matchingCategory = categoriesArray.find(
    (cat) => cat.to.toLowerCase() === category.toLowerCase()
  );

  //if we can't find it we have an error
  if (!matchingCategory) throw new Error("Category Names Don't match");

  //return the color of that category
  const color = matchingCategory.color;

  return color;
};
