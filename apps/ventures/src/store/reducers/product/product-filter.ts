export type QueryProductFilter = BaseListRequest & {
  brandIds?: Array<string>;
  includePromotion?: boolean;
  isGetCategory?: boolean;
};
