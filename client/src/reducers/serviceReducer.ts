import { services } from "../data/servicesData";
import { ServiceState } from "../types/serviceTypes";

const serviceReducer = (
  state: ServiceState,
  action: { type: string; name: string }
) => {
  switch (action.type) {
    case "findOne":
      const oneService = services.find(
        (service) => service.seeMore === action.name
      );
      //if we can't find it set error
      if (!oneService)
        return { ...state, error: `${action.name} could not be found` };

      return { ...state, services: [oneService] };

    default:
      return { services: [], error: `Action ${action.type} not recognised` };
  }
};

export default serviceReducer;
