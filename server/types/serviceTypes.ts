import { RowDataPacket } from "mysql2";

export interface ServiceBaseType {
  name: string;
  category: Category;
  organisation: string;
  maxAge: number;
  minAge: number;
  contactNumber: string;
  contactEmail: string;
  referralPathway: string;
  address: string;
  imageUrl: string;
  forwardTo: string;
}
export interface ServiceEntry extends ServiceBaseType {
  id: number;
}
export interface ServiceDBReturn extends RowDataPacket {
  name: string;
  category: Category;
  organisation: string;
  maxAge: number;
  minAge: number;
  contactNumber: string;
  contactEmail: string;
  referralPathway: string;
  address: string;
  imageUrl: string;
  forwardTo: string;
  id: number;
}

export interface Category {
  color: string;
  categoryName: string;
  forwardTo: string;
}

export interface CategoryEntry extends Category {
  id: number;
}

export type SubAttribute = RowDataPacket & {
  [key: string]: string[];
};
