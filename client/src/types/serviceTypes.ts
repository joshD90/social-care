import { ServiceDropped } from "../classes/serviceClasses";
import { ColorTypes } from "./colorTypes";

export type Service = {
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
  needsMet: string[];
  clientGroups: string[];
  areasServed: string[];
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
  needsMet: string[];
  clientGroups: string[];
  areasServed: string[];
};
