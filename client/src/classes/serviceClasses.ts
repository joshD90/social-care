import { CategoryNames } from "../types/serviceTypes";

export class ServiceInList {
  name: string;
  category: CategoryNames;

  constructor(name: string, category: CategoryNames) {
    this.name = name;
    this.category = category;
  }
}

export class ServiceDropped extends ServiceInList {
  organisation: string;
  description: string;
  needsMet: string[];
  seeMore: string;
  minAge: number | null;
  maxAge: number | null;
  ageRange: string;

  constructor(
    name: string,
    category: CategoryNames,
    organisation: string,
    description: string,
    needsMet: string[],
    seeMore: string,
    minAge: number | null,
    maxAge: number | null
  ) {
    super(name, category);
    this.organisation = organisation;
    (this.description = description), (this.needsMet = needsMet);
    this.seeMore = seeMore;
    this.minAge = minAge;
    this.maxAge = maxAge;
    this.ageRange = this.ageRangeString();
  }
  ageRangeString() {
    return `${this.minAge ? this.minAge : "No minimum age"} - ${
      this.maxAge ? this.maxAge : "No maximum age"
    }`;
  }
}
