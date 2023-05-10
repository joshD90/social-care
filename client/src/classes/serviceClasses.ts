import {
  CategoryForwardTo,
  CategoryNames,
  FullServiceType,
  SingleAttr,
} from "../types/serviceTypes";

export class ServiceInList {
  protected name: string;
  protected category: CategoryForwardTo;

  constructor(name: string, category: CategoryForwardTo) {
    this.name = name;
    this.category = category;
  }
  public getName(): string {
    return this.name;
  }
  public getCategory(): CategoryForwardTo {
    return this.category;
  }
}

export class ServiceDropped extends ServiceInList {
  protected organisation: string;
  protected description: string;
  protected needsMet: SingleAttr[];
  protected forwardTo: string;
  protected minAge: number | null;
  protected maxAge: number | null;
  protected ageRange: string;

  constructor(
    name: string,
    category: CategoryForwardTo,
    organisation: string,
    description: string,
    needsMet: SingleAttr[],
    forwardTo: string,
    minAge: number | null,
    maxAge: number | null
  ) {
    super(name, category);
    this.organisation = organisation;
    this.description = description;
    this.needsMet = needsMet;
    this.forwardTo = forwardTo;
    this.minAge = minAge;
    this.maxAge = maxAge;
    this.ageRange = this.ageRangeString();
  }
  ageRangeString(): string {
    return `${this.minAge ? this.minAge : "No minimum age"} - ${
      this.maxAge ? this.maxAge : "No maximum age"
    }`;
  }
  getOrganisation(): string {
    return this.organisation;
  }

  getDescription(): string {
    return this.description;
  }

  getNeedsMet(): SingleAttr[] {
    return this.needsMet;
  }

  getFowardTo(): string {
    return this.forwardTo;
  }

  getMinAge(): number | null {
    return this.minAge;
  }

  getMaxAge(): number | null {
    return this.maxAge;
  }
  getAgeRangeString(): string {
    return this.ageRange;
  }
}

export class Service extends ServiceDropped {
  private id: number;
  private contactNumber: string;
  private contactEmail: string;
  private website: string | null;
  private referralPathway: string;
  private address: string;
  private imageUrl: string;
  private clientGroups: SingleAttr[];
  private areasServed: SingleAttr[];

  constructor(service: FullServiceType) {
    super(
      service.name,
      service.category,
      service.organisation,
      service.description,
      service.needsMet,
      service.forwardTo,
      service.minAge,
      service.maxAge
    );
    this.id = service.id;
    this.contactNumber = service.contactNumber;
    this.contactEmail = service.contactEmail;
    this.website = service.website;
    this.referralPathway = service.referralPathway;
    this.address = service.address;
    this.imageUrl = service.imageUrl;
    this.clientGroups = service.clientGroups;
    this.areasServed = service.areasServed;
  }

  // Getter methods for accessing private properties
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getOrganisation(): string {
    return this.organisation;
  }

  getMaxAge(): number | null {
    return this.maxAge;
  }

  getMinAge(): number | null {
    return this.minAge;
  }

  getContactNumber(): string {
    return this.contactNumber;
  }

  getContactEmail(): string {
    return this.contactEmail;
  }

  getWebsite(): string | null {
    return this.website;
  }

  getReferralPathway(): string {
    return this.referralPathway;
  }

  getAddress(): string {
    return this.address;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  getNeedsMet(): SingleAttr[] {
    return this.needsMet;
  }

  getClientGroups(): SingleAttr[] {
    return this.clientGroups;
  }

  getAreasServed(): SingleAttr[] {
    return this.areasServed;
  }
}
