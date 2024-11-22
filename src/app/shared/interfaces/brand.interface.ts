import { iProduct } from "./product.interface";

export interface iBrand {
  id: number;
  name: string;
  categoryId: number;
  products: iProduct[];
}
