import { ServiceDropped } from "../classes/serviceClasses";
import { Service } from "../types/serviceTypes";

const backLane = new ServiceDropped(
  "Back Lane",
  "shelter",
  "St. Vincent DePaul",
  "Accommodation, Food and Support for Homeless Men in Dublin",
  ["Accommodation"],
  "backlane",
  18,
  null
);

const lightHouse = new ServiceDropped(
  "The LightHouse",
  "material",
  "Dublin Christian Mission",
  "Provides Food and an opportunity to make connections",
  ["food", "emotional support"],
  "lighthouse",
  18,
  null
);

const capuchinCenter = new ServiceDropped(
  "Capuchin Day Center",
  "material",
  "Capuchin Day Center",
  "A service where homeless people can get food",
  ["medical", "dental", "food", "emotional support"],
  "capuchinCenter",
  18,
  null
);

const parkgateHall = new ServiceDropped(
  "Parkgate Hall",
  "housing",
  "Dublin City Council",
  "Central Placement Service for Allocating temporary homeless accommodation",
  ["shelter"],
  "parkgateHall",
  18,
  null
);

const cedarHouse = new ServiceDropped(
  "Cedar House",
  "shelter",
  "Crosscare",
  "STA Accommodation for Homeless Adults",
  ["shelter"],
  "cedarHouse",
  18,
  null
);

const merchantsQuay = new ServiceDropped(
  "Merchants Quay",
  "addiction",
  "Merchants Quay Ireland",
  "A drop-in service for homeless people experiencing drug addiction",
  ["addiction", "food", "counselling", "needle-exchange"],
  "merchantsQuay",
  18,
  null
);

export const services: ServiceDropped[] = [
  backLane,
  lightHouse,
  parkgateHall,
  capuchinCenter,
  cedarHouse,
  merchantsQuay,
];
