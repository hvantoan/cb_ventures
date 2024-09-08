declare interface Brand {
  code: string;
  email: string;
  id: string;
  image: ImageDto;
  name: string;
  phone: string;
}

declare interface SaleBrand extends Brand {
  image: string;
}
