import { ServiceDropped } from "../classes/serviceClasses";

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

export type ServiceState = {
  error: string;
  services: ServiceDropped[];
};
