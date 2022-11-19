import { Products } from "./types";

export const data: Products[] = [
  {
    id: "huarache-x-stussy-le",
    name: "Nike Air Huarache Le",
    inStock: true,
    gallery: [
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
    ],
    attributes: [
      {
        id: "Size",
        name: "Size",
        type: "text",
        items: [
          {
            displayValue: "40",
            value: "40",
            id: "40",
          },
          {
            displayValue: "41",
            value: "41",
            id: "41",
          },
          {
            displayValue: "42",
            value: "42",
            id: "42",
          },
          {
            displayValue: "43",
            value: "43",
            id: "43",
          },
        ],
      },
    ],
    prices: {
      currency: {
        label: "USD",
        symbol: "$",
      },
      amount: 144.69,
    },

    quantity: 1,
  },

  {
    id: "jacket-canada-goosee",
    name: "Jacket",
    inStock: true,
    gallery: [
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
    ],
    attributes: [
      {
        id: "Size",
        name: "Size",
        type: "text",
        items: [
          {
            displayValue: "Small",
            value: "S",
            id: "Small",
          },
          {
            displayValue: "Medium",
            value: "M",
            id: "Medium",
          },
          {
            displayValue: "Large",
            value: "L",
            id: "Large",
          },
          {
            displayValue: "Extra Large",
            value: "XL",
            id: "Extra Large",
          },
        ],
      },
    ],
    prices: {
      currency: {
        label: "USD",
        symbol: "$",
      },
      amount: 518.47,
    },

    quantity: 1,
  },
  {
    id: "apple-imac-2021",
    name: "iMac 2021",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    ],
    attributes: [
      {
        id: "Capacity",
        name: "Capacity",
        type: "text",
        items: [
          {
            displayValue: "256GB",
            value: "256GB",
            id: "256GB",
          },
          {
            displayValue: "512GB",
            value: "512GB",
            id: "512GB",
          },
        ],
      },
    ],
    prices: {
      currency: {
        label: "USD",
        symbol: "$",
      },
      amount: 1688.03,
    },
    quantity: 1,
  },
];
