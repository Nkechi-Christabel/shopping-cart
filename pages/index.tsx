import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { data } from "../utils/cart";

import CartItems from "./CartItems";

const Home = () => {
  const [cartData, setCartData] = useState(data);

  let subTotal = cartData.reduce((a, b) => a + b.prices.amount, 0);
  const tax = (subTotal * 21) / 100;
  const total = subTotal + tax;

  return (
    <div className="container mx-auto p-3">
      <h1 className="text-lg font-bold my-6">Cart</h1>
      <div className="border-t">
        {cartData.map((item, i) => (
          <CartItems
            item={item}
            index={i}
            key={item.id}
            cartData={cartData}
            setCartData={setCartData}
          />
        ))}
      </div>
      <p className="mt-6 mb-2">
        Tax 21%: <span className="font-semibold">{`$${tax.toFixed(2)}`}</span>
      </p>
      <p>
        Quantity:{" "}
        <span className="font-semibold">
          {cartData.reduce((a, b) => a + b.quantity, 0)}
        </span>
      </p>
      <p className="py-3">
        Total:
        <span className="font-semibold ml-3">{`$${total.toFixed(2)}`} </span>
      </p>
      <button className="py-2 px-10 rounded bg-green-500 text-center text-white">
        Order
      </button>
    </div>
  );
};

export default Home;
