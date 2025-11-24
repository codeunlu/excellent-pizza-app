export interface MenuItem {
  id: string;
  name: { tr: string; de: string };
  description: { tr: string; de: string };
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
  options?: {
    small?: number;
    medium?: number;
    large?: number;
  };
}

export const categories = [
  { id: 'hepsi' },
  { id: 'pizza' },
  { id: 'extra' },
  { id: 'icecek' },
];

export const menuItems: MenuItem[] = [
  // --- PIZZALAR ---
  {
    id: 'p1',
    name: { tr: 'Margherita', de: 'Margherita' },
    description: {
      tr: 'Pizza Sosu, Mozzarella, Domates, Fesleğen',
      de: 'Pizzasauce, Mozzarella, Tomaten, Basilikum'
    },
    price: 160,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    options: { small: 130, medium: 160, large: 200 }
  },
  {
    id: 'p2',
    name: { tr: 'Sosisli', de: 'Wurst Pizza' },
    description: {
      tr: 'Mozzarella, Sosis, Cheddar',
      de: 'Mozzarella, Wurst, Cheddar'
    },
    price: 170,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    options: { small: 140, medium: 170, large: 220 }
  },
  {
    id: 'p3',
    name: { tr: 'Vejetaryan', de: 'Vegetarisch' },
    description: {
      tr: 'Mozzarella, Mısır, Kapya, Çarliston, Zeytin, Mantar',
      de: 'Mozzarella, Mais, Paprika, Oliven, Pilze'
    },
    price: 170,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1541745537411-b8096dc29c42?w=800&q=80',
    options: { small: 140, medium: 170, large: 220 }
  },
  {
    id: 'p4',
    name: { tr: 'Meksikalı', de: 'Mexicana' },
    description: {
      tr: 'Mozzarella, Jalapeno, Mısır, Mantar, Domates, Kekik, Dana Sucuk',
      de: 'Mozzarella, Jalapeños, Mais, Pilze, Tomaten, Oregano, Rindersudzuk'
    },
    price: 180,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80',
    isPopular: true,
    options: { small: 150, medium: 180, large: 230 }
  },
  // --- YAN ÜRÜNLER (Örnek) ---
  {
    id: 'e1',
    name: { tr: 'Patates Cipsi', de: 'Pommes Frites' },
    description: { tr: 'Kızartılmış Patates Cipsi', de: 'Frittierte Kartoffelchips' },
    price: 60,
    category: 'extra',
    image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd75c5?w=800&q=80',
  },
  {
    id: 'i1',
    name: { tr: 'Kola', de: 'Cola' },
    description: { tr: '330ml Kutu', de: '330ml Dose' },
    price: 40,
    category: 'icecek',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
  },
];
