declare interface RevenueChartDto {
  date: string;
  count: number;
  total: number;
}

interface SaleBrandData {
  type: string;
  value: number;
  details: Array<{
    productName: string;
    quantity: number;
  }>;
}

declare interface SaleBrandChartDto {
  summarySaleByBrandChartData: Array<SaleBrandData>;
}

declare interface HotCoinsDto {
  symbol: string;
  priceChangePercent: string;
  lastPrice: string;
}

declare interface SaleProvinceChartDto {
  brandName: string;
  provinceName: string;
  totalQuantity: number;
}
