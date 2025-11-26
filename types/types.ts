export interface ProductOption {
  key: string;
  name: { tr: string; de: string };
  price: number;
}

export interface MenuItem {
  id: string;
  name: { tr: string; de: string };
  description: { tr: string; de: string };
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
  options?: ProductOption[];
}
