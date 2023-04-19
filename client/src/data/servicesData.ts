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

const usherIsland = new ServiceDropped(
  "Ushers Island",
  "mentalHealth",
  "HSE",
  "A mental health Clinic with a strong emphasis on mental health outreach",
  ["mental health", "physical health", "mental health related medication"],
  "ushersIsland",
  18,
  null
);

const mendicity = new ServiceDropped(
  "The Mendicity",
  "material",
  "The Mendicity Institution",
  "Homeless Day Service for Adults in Homelessness providing a range of services such as food, day-time shelter, showers and access to health-care",
  ["food", "hygeine", "advocacy", "day-time shelter", "health-care"],
  "mendicity",
  18,
  null
);

const focusCoffeeShop = new ServiceDropped(
  "Focus Ireland Coffee Shop",
  "material",
  "Focus Ireland",
  "Open 365 days, this service provides nutritional, good-quality, affordable meals for people experiencing homelessness in a safe and warm environment.",
  ["food", "information"],
  "focusCoffeeShop",
  18,
  null
);

const simonHarcourtStreet = new ServiceDropped(
  "Dublin Simon Harcourt St.",
  "shelter",
  "Dublin Simon",
  "Emergency shelter on Harcourt Street is a low threshold Supported Temporary Accommodation which provides accommodation for 30 single men, single women and couples who are homeless.",
  ["shelter", "sta"],
  "simonHarcourtSt",
  18,
  null
);
const simonMapleHouse = new ServiceDropped(
  "Dublin Simon Maple House",
  "shelter",
  "Dublin Simon",
  "Low threshold Supported Temporary Accommodation (STA) service for 34 single men, women and couples who are homeless",
  ["shelter"],
  "simonMapleHouse",
  18,
  null
);

const simonCarmansHall = new ServiceDropped(
  "Dublin Simon Carmans Hall",
  "shelter",
  "Dublin Simon",
  "A 51 bed Supported Temporary Accommodation unit",
  ["shelter"],
  "simonCarmansHall",
  18,
  null
);

const simonLongfields = new ServiceDropped(
  "Dublin Simon Longfields",
  "shelter",
  "Dublin Simon",
  "A 30 bed Supported Temporary Accommodation Unit",
  ["shelter"],
  "simonLongfields",
  18,
  null
);

const hseAddictionBallymun = new ServiceDropped(
  "HSE Addiction Services Dublin North City and Dublin North County",
  "addiction",
  "HSE",
  "Wide range of addiction treatments from support to detox programs",
  [
    "support",
    "advice",
    "counselling",
    "education",
    "needle exchange",
    "stabilisation programme",
    "detoxification programme",
  ],
  "hseAddictionBallymun",
  18,
  null
);

const anaLiffey = new ServiceDropped(
  "Ana Liffey Drug Project",
  "addiction",
  "Ana Liffey Drug Project",
  "Wide range of outreach and in-house services provided to tackle issues around drug addiction",
  [
    "medical",
    "support",
    "advice",
    "counselling",
    "education",
    "needle exchange",
    "stabilisation programme",
    "detoxification programme",
  ],
  "anaLiffey",
  18,
  null
);

const simonStabilisation = new ServiceDropped(
  "Dublin Simon Stabilisation",
  "addiction",
  "Dublin Simon",
  "Residential Inpatient Service to Support Stabilisation of Drug Use",
  ["drug stabilisation", "counselling"],
  "simonStabilisation",
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
  usherIsland,
  mendicity,
  focusCoffeeShop,
  simonHarcourtStreet,
  simonMapleHouse,
  simonLongfields,
  hseAddictionBallymun,
  simonStabilisation,
  anaLiffey,
];
