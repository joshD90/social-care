import { ServiceDropped } from "../classes/serviceClasses";
import { services } from "../data/servicesData";
import { ServiceState } from "../types/serviceTypes";

const serviceReducer = (
  state: ServiceState,
  action: { type: string; name: string }
) => {
  switch (action.type) {
    //find a single service
    case "findOne":
      const oneService = services.find(
        (service) => service.seeMore === action.name
      );
      //if we can't find it set error
      if (!oneService)
        return { ...state, error: `${action.name} could not be found` };

      return { ...state, services: [oneService] };
    //find list of services by category
    case "findAllInCategory":
      const categoryServices = services.filter(
        (service) =>
          action.name.toLowerCase() === service.category.toLowerCase()
      );
      if (categoryServices.length === 0 || categoryServices === undefined)
        return {
          ...state,
          error: `Could Not Find Any Services in the ${action.name}  category`,
        };
      return { ...state, services: categoryServices };
    //if our action.type is not recognised
    default:
      return { ...state, error: `Action ${action.type} not recognised` };
    // throw new Error(`Action type ${action.type} is not recognised`);
  }
};

export default serviceReducer;
