import { ServiceDropped } from "../classes/serviceClasses";
import { categoriesArray } from "../data/categoriesData";
import {
  ServiceWithoutSubs,
  ListReducerType,
  ListReducerActions,
} from "../types/serviceTypes";
import { getCategoryColor } from "../utils/getCategoryColor";

const newListReducer = (
  state: ListReducerType,
  action: ListReducerActions
): ListReducerType => {
  switch (action.type) {
    case "Set_Categories_List": {
      const categoryList = categoriesArray.map((category) => ({
        name: category.name,
        color: category.color,
        forwardTo: `/services/categories/${category.to}`,
      }));
      return { ...state, isLoading: false, data: categoryList };
    }
    case "GET_INIT":
      return { ...state, isLoading: true, error: null, data: [] };
    case "GET_SUCCESS": {
      const newData = action.payload.map(
        (thisService: ServiceWithoutSubs & { needsMet: string[] }) => {
          return {
            name: thisService.name,
            forwardTo: `${thisService.category}/${thisService.id.toString()}`,
            color: getCategoryColor(thisService.category),
            droppedInfo: new ServiceDropped(
              thisService.name,
              thisService.category,
              thisService.organisation,
              thisService.description,
              thisService.needsMet,
              thisService.id.toString(),
              thisService.minAge,
              thisService.maxAge
            ),
          };
        }
      );
      return { ...state, isLoading: false, data: newData };
    }
    case "GET_FAILURE":
      return { ...state, isLoading: true, error: action.payload };
  }
};

export default newListReducer;
