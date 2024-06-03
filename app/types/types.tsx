// types
export interface ProductInfo {
  description: string;
  delivery?: string;
  policy?: string;
}

export interface ProductImage {
  src: string;
}

export interface Product {
  image: ProductImage[];
  name: string;
  slug: string;
  qty: number;
  regularPrice?: number;
  discountPrice: number;
  color?: string[];
  info: ProductInfo[];
}

export interface ProductListProps {
  title: string;
  products: Product[];
}

export interface ButtonProps{
  title:string;
}

