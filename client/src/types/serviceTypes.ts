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
