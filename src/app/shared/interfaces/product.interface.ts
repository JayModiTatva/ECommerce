import { iDocument } from "./document.interface";

export interface iProduct {

  id: number;
  name: string;
  price: number;
  description: string;
  vendorId: number;
  brandId: number;
  discount: number;
  stockQuantity: number;
  rating: number;
  documents: iDocument[];

}
