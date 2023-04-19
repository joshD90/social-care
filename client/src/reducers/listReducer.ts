import { ListItemType } from "../types/serviceTypes";

import { categoriesArray } from "../data/categoriesData";
import { services as servicesData } from "../data/servicesData";
import { ColorTypes } from "../types/colorTypes";

export const listReducer = (
  state: ListItemType[],
  action: { type: string; payload: string }
): ListItemType[] => {
  switch (action.type) {
    //setting up our layout list as our categories
    case "Set_Categories_List":
      const categoryList = categoriesArray.map((category) => ({
        name: category.name,
        color: category.color,
        forwardTo: `/services/categories/${category.to}`,
      }));
      return categoryList;
    //setting our layout list as services within a category
    case "Set_Services_List":
      const catColor = categoriesArray.find(
        (cat) => cat.to.toLowerCase() === action.payload.toLowerCase()
      )?.color;
      if (!catColor) throw new Error("cant find color");
      const filteredByCategory = servicesData.filter((service) => {
        return service.category.toLowerCase() === action.payload.toLowerCase();
      });

      const listItemsInCategory = filteredByCategory.map((item) => ({
        name: item.name,
        forwardTo: `/services/categories/${action.payload}/${item.seeMore}`,
        color: catColor,
        droppedInfo: item,
      }));

      return listItemsInCategory;
    default:
      throw new Error(`No action matches ${action.type}`);
  }
};
