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

// types
interface ProductInfo {
  description: string;
  delivery: string;
  policy: string;
}

interface ProductImage {
  src: string;
}

interface Product {
  image: ProductImage[];
  name: string;
  qty: number;
  regularPrice?: number;
  discountPrice: number;
  color?: string[];
  info: ProductInfo[];
}

export const latest: Product[] = [
  {
    image: [
      { src: "/images/latest/table1.webp" },
      { src: "/images/latest/table2.webp" },
      { src: "/images/latest/table3.webp" },
    ],
    name: "Marta Small Table",
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
