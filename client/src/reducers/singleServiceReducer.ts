import { Service } from "../classes/serviceClasses";
import {
  FullServiceType,
  SingeServiceReducerActions,
  SingleServiceReducerType,
} from "../types/serviceTypes";

const singleServiceReducer = (
  state: SingleServiceReducerType,
  action: SingeServiceReducerActions
): SingleServiceReducerType => {
  switch (action.type) {
    case "GET_INIT":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "GET_SUCCESS": {
      const service = new Service(action.payload as FullServiceType);
      return {
        ...state,
        isLoading: false,
        data: service,
      };
    }
    case "GET_FAILURE": {
      return { ...state, isLoading: false, error: action.payload };
    }
  }
};
export default singleServiceReducer;
