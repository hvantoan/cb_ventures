declare interface Product {
  id: string;
  code: string;
  name: string;
  displayName?: string;
  description: string;
  isNPK: boolean;
  npkType?: string;
  netWeight: number;
  isPromotion: boolean;
  images?: Array<ImageDto> | null;
  storeId?: Array<string> | null;
  categoryIds?: Array<string> | null;
  categories?: Array<Category> | null;
  brandIds?: Array<string> | null;
}

declare interface SaleProduct extends Omit<Product, 'images'> {
  images: Array<string>;
}

declare interface CartItem {
  product: SaleProduct;
  quantity: number;
}

declare interface ProductListRequest extends BaseListRequest {
  categoryIds?: Array<string>;
  brandIds?: Array<string>;
  storeId: string;
  ids?: Array<string>;
}

declare interface BestSellingRequest extends BaseListRequest {
  storeId: string;
  numberOfSuggest: number;
}
