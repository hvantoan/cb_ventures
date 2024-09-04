declare interface Category {
  id: string;
  code: string;
  name: string;
  createdDate?: string;
  products?: Array<Product> | null;
}

declare interface SaleCategory extends Omit<Category, 'products'> {
  products: Array<SaleProduct>;
}
