import { ServiceDropped } from "../classes/serviceClasses";
import { ColorTypes } from "./colorTypes";
import { Service } from "../classes/serviceClasses";

export type ServiceFiltered = {
  name: string;
  address?: string;
  needsServed?: string[];
  upperAge?: number;
  lowerAge?: number;
};

export type CategoryNames =
  | "housing"
  | "mental health"
  | "material"
  | "support groups"
  | "medical"
  | "financial"
  | "shelter"
  | "addiction";

export type CategoryForwardTo =
  | "housing"
  | "mentalHealth"
  | "material"
  | "supportGroups"
  | "medical"
  | "financial"
  | "shelter"
  | "addiction";

export type ServiceState = {
  error: string;
  services: ServiceDropped[];
};

export type ListItemType = {
  name: string;
  forwardTo: string;
  color?: ColorTypes;
  droppedInfo?: ServiceDropped;
};

export type FullServiceType = {
  id: number;
  name: string;
  forwardTo: string;
  description: string;
  category: CategoryForwardTo;
  organisation: string;
  maxAge: number | null;
  minAge: number | null;
  contactNumber: string;
  contactEmail: string;
  website: string | null;
  referralPathway: string;
  address: string;
  imageUrl: string;
  needsMet: SingleAttr[];
  clientGroups: SingleAttr[];
  areasServed: SingleAttr[];
};

export type ServiceWithoutSubs = {
  id: number;
  name: string;
  forwardTo: string;
  description: string;
  category: CategoryForwardTo;
  organisation: string;
  maxAge: number | null;
  minAge: number | null;
  contactNumber: string;
  contactEmail: string;
  website: string | null;
  referralPathway: string;
  address: string;
  imageUrl: string;
};

export type ServiceFormType = {
  name: string;
  forwardTo: string;
  description: string;
  category: CategoryForwardTo | string;
  organisation: string;
  maxAge: number | null;
  minAge: number | null;
  contactNumber: string;
  contactEmail: string;
  website: string | null;
  referralPathway: string;
  address: string;
  imageUrl: string;
  needsMet: string[] | string;
  clientGroups: string[] | string;
  areasServed: string[] | string;
};

export type SingleServiceReducerType = {
  data: Service | null;
  isLoading: boolean;
  error: string | null;
};
export type SingeServiceReducerActions =
  | { type: "GET_INIT" }
  | { type: "GET_SUCCESS"; payload: any }
  | { type: "GET_FAILURE"; payload: string };

export type ListReducerType = {
  data: ListItemType[];
  error: string | null;
  isLoading: boolean;
};

export type ListReducerActions =
  | { type: "GET_INIT" }
  | { type: "GET_SUCCESS"; payload: any }
  | { type: "GET_FAILURE"; payload: string }
  | { type: "Set_Categories_List" };

export type SingleAttr = {
  status: "essential" | "secondary";
  value: string;
};
