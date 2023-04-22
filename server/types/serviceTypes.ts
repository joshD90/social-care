export interface ServiceBaseType {
  id: number;
  name: string;
  category: Category;
  organisation: String;
  maxAge: number;
  minAge: number;
  contactNumber: string;
  contactEmail: string;
  referralPathway: string;
  address: string;
  imageUrl: string;
}

export interface Category {
  color: string;
  categoryName: string;
  forwardTo: string;
}

export interface CategoryEntry extends Category {
  id: number;
}
