import { Product } from "../types/types";

export const categories = [
  { name: "Sculpture Vase" },
  { name: "Furniture" },
  { name: "Bedroom Kit" },
  { name: "Glassware" },
];

export const links = [
  { name: "Terms and condition" },
  { name: "Refund Policy" },
  { name: "Privacy Policyt" },
];

export const testimonials = [
  {
    comment: "Very Nice products really happy with their service",
    name: "Mohammed Hossain",
  },
  {
    comment: "Love their products always make me so happy!!",
    name: "Abrar Hossain",
  },
  {
    comment: "Very minimal and aesthetic, just glows the every space in home!",
    name: "Hafsah Begum",
  },
  {
    comment: "Amazing products, changes the look of your sweet home!",
    name: "Rodela Amin",
  },
  {
    comment: "Very Nice products really happy with their service",
    name: "Mohammed Hossain",
  },
  {
    comment: "Love their products always make me so happy!!",
    name: "Abrar Hossain",
  },
];

// // types
// interface ProductInfo {
//   description: string;
//   delivery?: string;
//   policy?: string;
// }

// interface ProductImage {
//   src: string;
// }

// interface Product {
//   image: ProductImage[];
//   name: string;
//   slug: string;
//   qty: number;
//   regularPrice?: number;
//   discountPrice: number;
//   color?: string[];
//   info: ProductInfo[];
// }

export const latest: Product[] = [
  {
    image: [
      { src: "/images/latest/table1.webp" },
      { src: "/images/latest/table2.webp" },
      { src: "/images/latest/table3.webp" },
    ],
    name: "Marta Small Table",
    slug: "marta-small-table",
    qty: 87,
    regularPrice: 2300,
    discountPrice: 1700,
    color: ["rgb(245, 166, 35)", "rgb(126, 211, 33)", "rgb(65, 117, 5)"],
    info: [
      {
        description:
          "We take our customers’ needs very seriously. Our team works tirelessly to craft fresh new designs and the quality of goods meets high standards. At the same time with us you can expect low prices on a wide variety of exciting items. We care about the planet and use only modern, recyclable, eco-friendly materials and not plastic packaging.",
        delivery:
          "Our delivery is completely free. It will take no more than 2 days from your order to your door. We start packing your order right from the time of purchase.",
        policy:
          "If you’re not totally satisfied with your purchase you can return unopened products within 180 days, together with your proof of purchase, for a full refund.",
      },
    ],
  },

  {
    image: [
      { src: "/images/latest/chair1.webp" },
      { src: "/images/latest/chair2.webp" },
      { src: "/images/latest/chair3.webp" },
    ],
    name: "Michael Armchair",
    slug: "michael-armchair",
    qty: 92,
    discountPrice: 12000,
    color: ["rgb(250, 205, 149)", "rgb(155, 155, 155)", "rgb(74, 144, 226)"],
    info: [
      {
        description:
          "We take our customers’ needs very seriously. Our team works tirelessly to craft fresh new designs and the quality of goods meets high standards. At the same time with us you can expect low prices on a wide variety of exciting items. We care about the planet and use only modern, recyclable, eco-friendly materials and not plastic packaging.",
        delivery:
          "Our delivery is completely free. It will take no more than 2 days from your order to your door. We start packing your order right from the time of purchase.",
        policy:
          "If you’re not totally satisfied with your purchase you can return unopened products within 180 days, together with your proof of purchase, for a full refund.",
      },
    ],
  },

  {
    image: [
      { src: "/images/latest/doorothy1.webp" },
      { src: "/images/latest/doorothy2.webp" },
      { src: "/images/latest/doorothy3.webp" },
      { src: "/images/latest/doorothy4.webp" },
    ],
    name: "Doorothy Tables",
    slug: "doorothy-tables",
    qty: 95,
    regularPrice: 5900,
    discountPrice: 3200,
    color: ["rgb(245, 166, 35)", "rgb(74, 144, 226)", "rgb(65, 117, 5)"],
    info: [
      {
        description:
          "We take our customers’ needs very seriously. Our team works tirelessly to craft fresh new designs and the quality of goods meets high standards. At the same time with us you can expect low prices on a wide variety of exciting items. We care about the planet and use only modern, recyclable, eco-friendly materials and not plastic packaging.",
        delivery:
          "Our delivery is completely free. It will take no more than 2 days from your order to your door. We start packing your order right from the time of purchase.",
        policy:
          "If you’re not totally satisfied with your purchase you can return unopened products within 180 days, together with your proof of purchase, for a full refund.",
      },
    ],
  },

  {
    image: [
      { src: "/images/latest/miranda.webp" },
      { src: "/images/latest/miranda.webp" },
    ],
    name: "Miranda Couch",
    slug: "miranda-couch",
    qty: 9,
    regularPrice: 15000,
    discountPrice: 1000,
    info: [
      {
        description:
          "We take our customers’ needs very seriously. Our team works tirelessly to craft fresh new designs and the quality of goods meets high standards. At the same time with us you can expect low prices on a wide variety of exciting items. We care about the planet and use only modern, recyclable, eco-friendly materials and not plastic packaging.",
        delivery:
          "Our delivery is completely free. It will take no more than 2 days from your order to your door. We start packing your order right from the time of purchase.",
        policy:
          "If you’re not totally satisfied with your purchase you can return unopened products within 180 days, together with your proof of purchase, for a full refund.",
      },
    ],
  },
];

export const sculpture: Product[] = [
  {
    image: [
      { src: "/images/sculpture/broken1.webp" },
      { src: "/images/sculpture/broken2.webp" },
    ],
    name: "Broken Tree Flower Vase",
    slug: "broken-tree-flower-vase",
    qty: 97,
    regularPrice: 5000,
    discountPrice: 2100,
    color: ["rgb(255, 239, 173)", "rgb(128, 179, 239)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts",
      },
    ],
  },

  {
    image: [
      { src: "/images/sculpture/soft1.webp" },
      { src: "/images/sculpture/soft2.webp" },
    ],
    name: "Soft Throw Flower Vase",
    slug: "soft-throw-flower-vase",
    qty: 99,
    regularPrice: 8999,
    discountPrice: 7999,
    color: ["rgb(244, 240, 197)", "rgb(65, 117, 5)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts.",
      },
    ],
  },

  {
    image: [
      { src: "/images/sculpture/button1.webp" },
      { src: "/images/sculpture/button2.webp" },
    ],
    name: "Button Sculpture Vase",
    slug: "button-sculpture-vase",
    qty: 99,
    regularPrice: 2000,
    discountPrice: 1800,
    color: ["rgb(208, 2, 27)", "rgb(65, 117, 5)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts.",
      },
    ],
  },

  {
    image: [
      { src: "/images/sculpture/flower1.webp" },
      { src: "/images/sculpture/flower2.webp" },
    ],
    name: "Clomplot Flower Vase",
    slug: "clomplot-flower-vase",
    qty: 100,
    regularPrice: 5500,
    discountPrice: 2100,
    color: ["rgb(233, 230, 183)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts.",
      },
    ],
  },
];

export const bedroom: Product[] = [
  {
    image: [
      { src: "/images/bedroom/big1.webp" },
      { src: "/images/bedroom/big2.webp" },
    ],
    name: "Big Linen Cushion",
    slug: "big-linen-cushion",
    qty: 99,
    regularPrice: 300,
    discountPrice: 200,
    color: ["rgb(138, 136, 136)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts",
      },
    ],
  },

  {
    image: [
      { src: "/images/bedroom/linen1.webp" },
      { src: "/images/bedroom/linen2.webp" },
      { src: "/images/bedroom/linen3.webp" },
      { src: "/images/bedroom/linen4.webp" },
    ],
    name: "Linen Cushion Bundle",
    slug: "linen-cushion-bundle",
    qty: 100,
    regularPrice: 5000,
    discountPrice: 4200,
    color: ["rgb(114, 234, 180)", "rgb(239, 194, 136)", "rgb(172, 172, 172)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts",
      },
    ],
  },
  {
    image: [
      { src: "/images/bedroom/woolen.webp" },
      { src: "/images/bedroom/woolen2.webp" },
      { src: "/images/bedroom/woolen3.webp" },
      { src: "/images/bedroom/woolen4.webp" },
      { src: "/images/bedroom/woolen5.webp" },
    ],
    name: "Woolen Blanket",
    slug: "woolen-blanket",
    qty: 100,
    regularPrice: 4500,
    discountPrice: 3900,
    color: ["rgb(101, 188, 149)", "rgb(255, 255, 255)", "rgb(139, 87, 42)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts",
      },
    ],
  },

  {
    image: [
      { src: "/images/bedroom/cushion1.webp" },
      { src: "/images/bedroom/cushion2.webp" },
      { src: "/images/bedroom/cushion3.webp" },
      { src: "/images/bedroom/cushion4.webp" },
    ],
    name: "Cushion Blanket",
    slug: "cushion-blanket",
    qty: 100,
    regularPrice: 800,
    discountPrice: 350,
    color: ["rgb(74, 74, 74)", "rgb(243, 102, 151)", "rgb(165, 165, 165)"],
    info: [
      {
        description:
          "Inspired by the space where digital and physical forms meet, Wang & Söderström’s Candleholders are unique sculptural objects that serve as miniature pieces of art. The organically shaped 3D models are first developed in the designers’ studio, before the candleholders are 3D printed and moulded in porcelain and stoneware at a ceramic factory. Available in different designs and colours, they are ideal for displaying alone or in clusters in many different spaces and contexts.",
      },
    ],
  },
];

export const glasses: Product[] = [
  {
    image: [
      { src: "/images/glasses/carafe1.webp" },
      { src: "/images/glasses/carafe2.webp" },
      { src: "/images/glasses/carafe3.webp" },
    ],
    name: "Glasses & Carafe",
    slug: "glasses-&-carafe",
    qty: 100,
    regularPrice: 8000,
    discountPrice: 6500,
    color: ["rgb(126, 211, 33)", "rgb(255, 255, 255)", "rgb(139, 87, 42)"],
    info: [
      {
        description:
          "Crafted from glass, plays with the material’s transparency to create a rippled, liquid-like effect. They are part of Collect, a curated line of beautifully crafted soft furnishings and home objects designed by Space Copenhagen.",
      },
    ],
  },

  {
    image: [
      { src: "/images/glasses/carafe1.webp" },
      { src: "/images/glasses/carafe2.webp" },
      { src: "/images/glasses/carafe3.webp" },
    ],
    name: "Brown Seel Glass",
    slug: "brown-seel-glass",
    qty: 0,
    regularPrice: 6000,
    discountPrice: 2500,
    info: [
      {
        description:
          "Crafted from glass, plays with the material’s transparency to create a rippled, liquid-like effect. They are part of Collect, a curated line of beautifully crafted soft furnishings and home objects designed by Space Copenhagen.",
      },
    ],
  },
  {
    image: [
      { src: "/images/glasses/drink.webp" },
      { src: "/images/glasses/drink.webp" },
    ],
    name: "Drinking Glass",
    slug: "drinking-glass",
    qty: 9,
    regularPrice: 4500,
    discountPrice: 2100,
    info: [
      {
        description:
          "Crafted from glass, plays with the material’s transparency to create a rippled, liquid-like effect. They are part of Collect, a curated line of beautifully crafted soft furnishings and home objects designed by Space Copenhagen.",
      },
    ],
  },

  {
    image: [
      { src: "/images/glasses/craft.webp" },
      { src: "/images/glasses/craft.webp" },
    ],
    name: "Hashi Crafted Glass",
    slug: "hashi-crafted-glass",
    qty: 100,
    regularPrice: 5000,
    discountPrice: 2200,
    info: [
      {
        description:
          "Crafted from glass, plays with the material’s transparency to create a rippled, liquid-like effect. They are part of Collect, a curated line of beautifully crafted soft furnishings and home objects designed by Space Copenhagen.",
      },
    ],
  },
];

export const productCollections = [
  ...latest,
  ...sculpture,
  ...bedroom,
  ...glasses,
];
