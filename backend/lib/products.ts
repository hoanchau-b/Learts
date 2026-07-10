export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  imageHover: string;
  category: string;
  badges?: ("hot" | "onsale" | "outofstock")[];
  colors?: string[];
  sizes?: string[];
  stock: number;
  sku: string;
  description: string;
  tags: string[];
}

export const CATEGORIES = [
  "All",
  "Gift ideas",
  "Home Decor",
  "Kids & Babies",
  "Kitchen",
  "Kniting & Sewing",
  "Pots",
  "Toys",
] as const;

export const PRODUCTS_PER_PAGE = 8;

let lastId = 15;

export function getNextId(): number {
  lastId += 1;
  return lastId;
}

export const products: Product[] = [
  {
    id: 1,
    title: "3D Attractive Pot",
    price: 90,
    image: "/assets/images/product-17.webp",
    imageHover: "/assets/images/product-17-hover.webp",
    category: "Pots",
    stock: 25,
    sku: "LRT-001",
    description:
      "A beautifully crafted 3D printed pot with an eye-catching geometric design. Perfect for succulents and small indoor plants. Made from eco-friendly PLA material with a smooth matte finish.",
    tags: ["3d-printed", "pot", "home-decor", "geometric"],
  },
  {
    id: 2,
    title: "Abstract Folded Pots",
    price: 55,
    oldPrice: 50,
    image: "/assets/images/product-14.webp",
    imageHover: "/assets/images/product-14-hover.webp",
    category: "Pots",
    badges: ["outofstock"],
    stock: 0,
    sku: "LRT-002",
    description:
      "Abstract folded design pots that bring a modern artistic touch to any space. Each pot features a unique folded shape that plays with light and shadow.",
    tags: ["abstract", "pot", "modern", "artistic"],
  },
  {
    id: 3,
    title: "Adhesive Tape Dispenser",
    price: 15,
    image: "/assets/images/product-30.webp",
    imageHover: "/assets/images/product-30-hover.webp",
    category: "Home Decor",
    badges: ["hot"],
    stock: 50,
    sku: "LRT-003",
    description:
      "Stylish and functional adhesive tape dispenser with a weighted base for one-handed use. The non-slip bottom keeps it steady on any desk surface.",
    tags: ["dispenser", "office", "desk", "home-decor"],
  },
  {
    id: 4,
    title: "Aluminum Equestrian",
    price: 100,
    image: "/assets/images/product-9.webp",
    imageHover: "/assets/images/product-9-hover.webp",
    category: "Home Decor",
    stock: 12,
    sku: "LRT-004",
    description:
      "Handcrafted aluminum equestrian sculpture that captures the grace and power of horses. A stunning statement piece for any living room or office.",
    tags: ["sculpture", "equestrian", "aluminum", "handmade"],
  },
  {
    id: 5,
    title: "Antique Sewing Scissors",
    price: 12,
    oldPrice: 15,
    image: "/assets/images/product-25.webp",
    imageHover: "/assets/images/product-25-hover.webp",
    category: "Kniting & Sewing",
    badges: ["onsale"],
    stock: 30,
    sku: "LRT-005",
    description:
      "Vintage-style sewing scissors with sharp stainless steel blades and an ornate brass handle. Perfect for fabric cutting and embroidery work.",
    tags: ["scissors", "sewing", "vintage", "antique"],
  },
  {
    id: 6,
    title: "Boho Beard Mug",
    price: 39,
    oldPrice: 45,
    image: "/assets/images/product-1.webp",
    imageHover: "/assets/images/product-1-hover.webp",
    category: "Kitchen",
    badges: ["onsale"],
    stock: 20,
    sku: "LRT-006",
    description:
      "A whimsical boho-style ceramic mug featuring a sculpted beard design. Holds 14oz of your favorite beverage and is microwave and dishwasher safe.",
    tags: ["mug", "ceramic", "boho", "kitchen"],
  },
  {
    id: 7,
    title: "Bouncer Measuring Cup",
    price: 150,
    image: "/assets/images/product-31.webp",
    imageHover: "",
    category: "Kitchen",
    stock: 8,
    sku: "LRT-007",
    description:
      "Professional-grade measuring cup with a unique bouncer base that prevents tipping. Clear measurement markings in both metric and imperial units.",
    tags: ["measuring", "kitchen", "baking", "professional"],
  },
  {
    id: 8,
    title: "Brush & Dustpan Set",
    price: 9,
    image: "/assets/images/product-15.webp",
    imageHover: "/assets/images/product-15-hover.webp",
    category: "Home Decor",
    stock: 40,
    sku: "LRT-008",
    description:
      "Compact brush and dustpan set with a sleek stand-up design. The brush snaps onto the dustpan handle for easy storage. Perfect for quick cleanups.",
    tags: ["cleaning", "brush", "dustpan", "home"],
  },
  {
    id: 9,
    title: "Cape Cottage Playhouse",
    price: 35,
    image: "/assets/images/product-12.webp",
    imageHover: "/assets/images/product-12-hover.webp",
    category: "Kids & Babies",
    stock: 15,
    sku: "LRT-009",
    description:
      "Charming Cape Cottage playhouse made from durable, child-safe materials. Features working doors, windows, and a mail slot. Easy to assemble.",
    tags: ["playhouse", "kids", "toys", "outdoor"],
  },
  {
    id: 10,
    title: "Cleaning Dustpan & Brush",
    price: 50,
    oldPrice: 38,
    image: "/assets/images/product-32.webp",
    imageHover: "/assets/images/product-32-hover.webp",
    category: "Home Decor",
    badges: ["outofstock"],
    colors: ["#000000", "#ffffff"],
    stock: 0,
    sku: "LRT-010",
    description:
      "Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable.",
    tags: ["cleaning", "dustpan", "brush", "home"],
  },
  {
    id: 11,
    title: "Clear Silicate Teapot",
    price: 140,
    image: "/assets/images/product-6.webp",
    imageHover: "/assets/images/product-6-hover.webp",
    category: "Kitchen",
    stock: 10,
    sku: "LRT-011",
    description:
      "Elegant clear silicate glass teapot with a built-in infuser for loose leaf tea. Heat-resistant borosilicate glass with an ergonomic handle.",
    tags: ["teapot", "glass", "kitchen", "tea"],
  },
  {
    id: 12,
    title: "Country Feast Set",
    price: 39,
    oldPrice: 45,
    image: "/assets/images/product-19.webp",
    imageHover: "",
    category: "Kitchen",
    badges: ["onsale"],
    stock: 18,
    sku: "LRT-012",
    description:
      "Complete country-style dinnerware set for four. Includes dinner plates, salad plates, bowls, and mugs. Stoneware with a rustic glazed finish.",
    tags: ["dinnerware", "set", "country", "kitchen"],
  },
  {
    id: 13,
    title: "Decorative Christmas Fox",
    price: 50,
    image: "/assets/images/product-8.webp",
    imageHover: "/assets/images/product-8-hover.webp",
    category: "Toys",
    badges: ["outofstock", "hot"],
    colors: ["#000000", "#b2483c"],
    sizes: ["Large", "Medium", "Small"],
    stock: 0,
    sku: "LRT-013",
    description:
      "Adorable decorative Christmas fox figurine, hand-painted with festive details. Available in multiple sizes and colors to match your holiday decor.",
    tags: ["christmas", "fox", "decoration", "holiday"],
  },
  {
    id: 14,
    title: "Digital Camera System",
    price: 350,
    image: "/assets/images/product-28.webp",
    imageHover: "/assets/images/product-28-hover.webp",
    category: "Gift ideas",
    stock: 5,
    sku: "LRT-014",
    description:
      "Compact digital camera system with 24MP sensor, 4K video recording, and built-in WiFi. Includes an 18-55mm zoom lens perfect for everyday photography.",
    tags: ["camera", "digital", "photography", "gift"],
  },
  {
    id: 15,
    title: "Electric Egg Blender",
    price: 200,
    image: "/assets/images/product-11.webp",
    imageHover: "/assets/images/product-11-hover.webp",
    category: "Kitchen",
    stock: 6,
    sku: "LRT-015",
    description:
      "High-speed electric egg blender with multiple speed settings. Whips eggs to perfect peaks in seconds. Also great for batters, emulsifying, and frothing milk.",
    tags: ["blender", "kitchen", "electric", "egg"],
  },
];
