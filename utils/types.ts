interface Prices {
  currency: {
    label: string;
    symbol: string;
  };
  amount: number;
}

interface Items {
  displayValue: string;
  value: string;
  id: string;
}

export interface Products {
  id: string;
  name: string;
  inStock: boolean;
  gallery: Array<string>;
  attributes: {
    id: string;
    name: string;
    type: string;
    items: Items[];
  }[];
  prices: Prices;
  quantity: number;
}
