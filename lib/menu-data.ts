export interface ProductOption {
  key: string; // '330ml', '1L', 'medium' gibi (kod tarafında kontrol için)
  name: { tr: string; de: string }; // Ekranda görünecek yazı
  price: number; // O seçeneğin satış fiyatı
}
export interface MenuItem {
  id: string;
  name: { tr: string; de: string };
  description: { tr: string; de: string };
  price: number; // Varsayılan en düşük fiyat (Listeleme ekranı için)
  category: string;
  image: string;
  isPopular?: boolean;
  // Eski options yapısı yerine bu yeni yapıyı kullanıyoruz:
  options?: ProductOption[];
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
      tr: 'Pizza Sosu, Mozzarella, Domates',
      de: 'Pizzasauce, Mozzarella, Tomaten'
    },
    price: 160,
    category: 'pizza',
    image: '/pizza-resimleri/margherita.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 160 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 200 }
    ]
  },
  {
    id: 'p2',
    name: { tr: 'Sosisli', de: 'Wurstpizza' },
    description: {
      tr: 'Mozzarella, Sosis, Cheddar',
      de: 'Mozzarella, Wurst, Cheddar'
    },
    price: 170,
    category: 'pizza',
    image: '/pizza-resimleri/sosisli.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 170 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 220 }
    ]
  },
  {
    id: 'p3',
    name: { tr: 'Vejetaryan', de: 'Vegetarisch' },
    description: {
      tr: 'Mozzarella, Mısır, Kapya, Çarliston, Zeytin, Mantar',
      de: 'Mozzarella, Mais, rote & grüne Paprika, Oliven, Pilze'
    },
    price: 170,
    category: 'pizza',
    image: '/pizza-resimleri/vejeteryan.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 170 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 220 }
    ]
  },
  {
    id: 'p4',
    name: { tr: 'Meksikalı', de: 'Mexicana' },
    description: {
      tr: 'Mozzarella, Jalapeno, Mısır, Mantar, Domates, Kekik, Dana Sucuk',
      de: 'Mozzarella, Jalapeños, Mais, Pilze, Tomaten, Oregano, Rindersucuk'
    },
    price: 180,
    category: 'pizza',
    image: '/pizza-resimleri/meksikali.jpg',
    isPopular: true,
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 180 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 230 }
    ]
  },
  {
    id: 'p5',
    name: { tr: 'Mista', de: 'Mista (Gemischt)' },
    description: {
      tr: 'Mozzarella, Mısır, Dana Sucuk, Sosis, Mantar, Zeytin, Kapya, Çarliston',
      de: 'Mozzarella, Mais, Rindersucuk, Wurst, Pilze, Oliven, rote & grüne Paprika'
    },
    price: 180,
    category: 'pizza',
    image: '/pizza-resimleri/mista.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 180 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 230 }
    ]
  },
  {
    id: 'p6',
    name: { tr: 'Anatolia', de: 'Anatolia' },
    description: {
      tr: 'Mısır, Kapya, Çarliston, Mantar, Zeytin, Salam, Dana Sucuk',
      de: 'Mais, rote & grüne Paprika, Pilze, Oliven, Salami, Rindersucuk'
    },
    price: 180,
    category: 'pizza',
    image: '/pizza-resimleri/anatolia.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 180 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 230 }
    ]
  },
  {
    id: 'p7',
    name: { tr: 'Barbekü Tavuklu', de: 'BBQ Chicken' },
    description: {
      tr: 'Barbekü Sos, Mozzarella, Soğan, Mısır, Tavuk Göğüs, Kekik',
      de: 'Barbecue-Sauce, Mozzarella, Zwiebeln, Mais, Hähnchenbrust, Oregano'
    },
    price: 250,
    category: 'pizza',
    image: '/pizza-resimleri/bbq-tavuk.jpg',
    isPopular: true,
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 250 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 300 }
    ]
  },
  {
    id: 'p8',
    name: { tr: 'Taj Mahal', de: 'Taj Mahal (Curry)' },
    description: {
      tr: 'Mozzarella, Tavuk Göğüs, Krema, Köri, Mantar, Çarliston, Kapya',
      de: 'Mozzarella, Hähnchenbrust, Sahne, Curry, Pilze, grüne & rote Paprika'
    },
    price: 250,
    category: 'pizza',
    image: '/pizza-resimleri/taj-mahal.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 250 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 300 }
    ]
  },
  {
    id: 'p9',
    name: { tr: 'Quatro Formaggi', de: 'Vier Käse' },
    description: {
      tr: 'Mozzarella, Beyaz Peynir, Cheddar, Ezine, Permesan',
      de: 'Mozzarella, Schafskäse, Cheddar, Ezine-Käse, Parmesan'
    },
    price: 230,
    category: 'pizza',
    image: '/pizza-resimleri/quatro-formaggi.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 230 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 280 }
    ]
  },
  {
    id: 'p10',
    name: { tr: 'Excellent Special', de: 'Excellent Spezial' },
    description: {
      tr: 'Mozzarella, Salam, Dana Sucuk, Cheddar, Sos, Mantar, Domates, Kapya',
      de: 'Mozzarella, Salami, Rindersucuk, Cheddar, Sauce, Pilze, Tomaten, rote Paprika'
    },
    price: 230,
    category: 'pizza',
    image: '/pizza-resimleri/excellent-special.jpg',
    isPopular: true,
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 230 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 280 }
    ]
  },
  {
    id: 'p11',
    name: { tr: 'Sucuklu', de: 'Sucuk Pizza' },
    description: {
      tr: 'Mozzarella, Dana Sucuk',
      de: 'Mozzarella, Rindersucuk'
    },
    price: 180,
    category: 'pizza',
    image: '/pizza-resimleri/sucuklu.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 180 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 230 }
    ]
  },
  {
    id: 'p12',
    name: { tr: 'Ton Balıklı', de: 'Thunfisch Pizza' },
    description: {
      tr: 'Mozzarella, Ton Balığı',
      de: 'Mozzarella, Thunfisch'
    },
    price: 230,
    category: 'pizza',
    image: '/pizza-resimleri/ton-balikli.jpg',
    options: [
      { key: 'medium', name: { tr: 'Orta Boy', de: 'Mittel' }, price: 230 },
      { key: 'large', name: { tr: 'Büyük Boy', de: 'Groß' }, price: 280 }
    ]
  },

  // --- YAN ÜRÜNLER (EXTRA) ---
  {
    id: 'e1',
    name: { tr: 'Patates Cipsi', de: 'Pommes Frites' },
    description: {
      tr: 'Kızartılmış Patates Cipsi',
      de: 'Frittierte Kartoffelchips'
    },
    price: 60,
    category: 'extra',
    image: '/yan-urunler/patates-cipsi.jpg',
    options: [
      { key: 'standard', name: { tr: 'Porsiyon', de: 'Portion' }, price: 60 }
    ]
  },
  {
    id: 'e2',
    name: { tr: 'Soğan Halkası', de: 'Zwiebelringe' },
    description: {
      tr: 'Pane soslu kızartılmış soğan',
      de: 'Panierte und frittierte Zwiebelringe'
    },
    price: 60,
    category: 'extra',
    image: '/yan-urunler/sogan-halkasi.jpg',
    options: [
      { key: 'standard', name: { tr: 'Porsiyon', de: 'Portion' }, price: 60 }
    ]
  },
  {
    id: 'e3',
    name: { tr: 'Mozzarella Stick', de: 'Mozzarella-Sticks' },
    description: {
      tr: 'Stick Peynir',
      de: 'Frittierte Käsesticks'
    },
    price: 90,
    category: 'extra',
    image: '/yan-urunler/mozzarella-stick.jpg',
    options: [
      { key: 'standard', name: { tr: 'Porsiyon', de: 'Portion' }, price: 90 }
    ]
  },
  {
    id: 'e4',
    name: { tr: 'Çıtır Parmak', de: 'Knusprige Hähnchenfinger' },
    description: {
      tr: 'Pane soslu kızartılmış tavuk',
      de: 'Paniertes und frittiertes Hähnchen'
    },
    price: 110,
    category: 'extra',
    image: '/yan-urunler/citir-parmak.jpg',
    options: [
      { key: 'standard', name: { tr: 'Porsiyon', de: 'Portion' }, price: 110 }
    ]
  },
  {
    id: 'e5',
    name: { tr: 'Special Patates', de: 'Spezial Pommes' },
    description: {
      tr: 'Eritme cheddarlı, kajun baharatlı patates',
      de: 'Pommes mit geschmolzenem Cheddar und Cajun-Gewürz'
    },
    price: 90,
    category: 'extra',
    image: '/yan-urunler/special-patates.jpg',
    isPopular: true,
    options: [
      { key: 'standard', name: { tr: 'Porsiyon', de: 'Portion' }, price: 90 }
    ]
  },
  {
    id: 'e6',
    name: { tr: 'Sıcak Sepeti', de: 'Snack-Mix Korb' },
    description: {
      tr: 'Patates cipsi, mozzarella stick, parmak tavuk, soğan halkası',
      de: 'Pommes, Mozzarella-Sticks, Hähnchenfinger, Zwiebelringe'
    },
    price: 130,
    category: 'extra',
    image: '/yan-urunler/sicak-sepeti.jpg',
    options: [
      { key: 'standard', name: { tr: 'Porsiyon', de: 'Portion' }, price: 130 }
    ]
  },

  // --- İÇECEKLER ---
  {
    id: 'i1',
    name: { tr: 'Kola', de: 'Cola' },
    description: { tr: 'Soğuk İçecek', de: 'Erfrischungsgetränk' },
    price: 50, // Baz fiyat güncellendi
    category: 'icecek',
    image: '/icecekler/kola.jpg',
    options: [
      { key: '200ml', name: { tr: '200ml Şişe', de: '200ml Flasche' }, price: 30 },
      { key: '330ml', name: { tr: '330ml Kutu', de: '330ml Dose' }, price: 50 },
      { key: '1L', name: { tr: '1 Litre', de: '1 Liter' }, price: 60 },
      { key: '2.5L', name: { tr: '2.5 Litre', de: '2,5 Liter' }, price: 75 }
    ]
  },
  {
    id: 'i2',
    name: { tr: 'Fanta', de: 'Fanta' },
    description: { tr: 'Portakal Aromalı', de: 'Orangenlimonade' },
    price: 50,
    category: 'icecek',
    image: '/icecekler/fanta.jpg',
    options: [
      { key: '330ml', name: { tr: '330ml Kutu', de: '330ml Dose' }, price: 50 },
      { key: '1L', name: { tr: '1 Litre', de: '1 Liter' }, price: 60 },
      { key: '2.5L', name: { tr: '2.5 Litre', de: '2,5 Liter' }, price: 75 }
    ]
  },
  {
    id: 'i3',
    name: { tr: 'Sprite', de: 'Sprite' }, // Menüde "Gazoz" olarak geçiyor ama Sprite görseli ile uyumlu
    description: { tr: 'Limon Aromalı Gazoz', de: 'Zitronenlimonade' },
    price: 50,
    category: 'icecek',
    image: '/icecekler/sprite.jpg',
    options: [
      { key: '330ml', name: { tr: '330ml Kutu', de: '330ml Dose' }, price: 50 },
    ]
  },
  {
    id: 'i4',
    name: { tr: 'Ice Tea', de: 'Eistee' },
    description: { tr: 'Şeftali veya Limon', de: 'Pfirsich oder Zitrone' },
    price: 50,
    category: 'icecek',
    image: '/icecekler/ice-tea.jpg',
    options: [
      { key: '330ml', name: { tr: '330ml Kutu', de: '330ml Dose' }, price: 50 },
    ]
  },
  {
    id: 'i5',
    name: { tr: 'Ayran', de: 'Ayran' },
    description: { tr: 'Yoğurtlu İçecek', de: 'Joghurtgetränk' },
    price: 20,
    category: 'icecek',
    image: '/icecekler/ayran.jpg',
    options: [
      { key: '200ml', name: { tr: 'Ayran', de: 'Ayran' }, price: 20 },
    ]
  },
  {
    id: 'i6',
    name: { tr: 'Meyve Suyu', de: 'Fruchtsaft' },
    description: { tr: 'Meyve suyu', de: 'Fruchtsaft' },
    price: 50,
    category: 'icecek',
    image: '/icecekler/meyve-suyu.jpg',
    options: [
      { key: '300ml', name: { tr: '330ml Şişe', de: '330ml Flasche' }, price: 50 },
    ]
  },
  {
    id: 'i8',
    name: { tr: 'Su', de: 'Wasser' },
    description: { tr: 'Doğal Kaynak Suyu', de: 'Mineralwasser' },
    price: 10,
    category: 'icecek',
    image: '/icecekler/su.jpg',
    options: [
      { key: '500ml', name: { tr: '500ml', de: '500ml' }, price: 10 }
    ]
  }
];
