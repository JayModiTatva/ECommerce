import { iBrand } from "./brand.interface";
import { iProduct } from "./product.interface";

export interface iCategory {
  id: number;
  name: string;
  brands: iBrand[];
  products: iProduct[];
  documentId: number;
  parentCategoryId: number;
  parentCategory: iCategory;
}
