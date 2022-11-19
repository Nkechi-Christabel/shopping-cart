import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import { Products } from "../utils/types";
import { data } from "../utils/cart";

interface IProps {
  item: Products;
  index: number;
  cartData: Products[];
  setCartData: Dispatch<SetStateAction<Products[]>>;
}

const CartItems: React.FC<IProps> = ({
  item,
  index,
  cartData,
  setCartData,
}: IProps) => {
  // const [cartData, setCartData] = useState(data);
  const [size, setSize] = useState("");
  const [counter, setCounter] = useState(0);
  const prevRef = useRef<null | HTMLSpanElement>(null);
  const nextRef = useRef<null | HTMLSpanElement>(null);

  const handleSizeClick = (id: string) => {
    setSize(id);
  };

  const handleIncrease = () => {
    setCartData((prev) =>
      prev.map((product, i) =>
        product.id === item.id
          ? {
              ...product,
              quantity: product.quantity + 1,
              prices: {
                currency: {
                  label: product.prices.currency.label,
                  symbol: product.prices.currency.symbol,
                },
                amount: product.prices.amount + data[i].prices.amount,
              },
            }
          : product
      )
    );
  };

  const handleDecrease = () => {
    setCartData((prev) =>
      prev.map((product, i) =>
        product.id === item.id
          ? {
              ...product,
              quantity: product.quantity - 1,
              prices: {
                currency: {
                  label: product.prices.currency.label,
                  symbol: product.prices.currency.symbol,
                },
                amount: product.prices.amount - data[i].prices.amount,
              },
            }
          : product
      )
    );
  };

  const handleRemoveItem = () => {
    setCartData(cartData.filter((product) => product.id !== item.id));
  };

  const handlePrev = () => {
    setCounter((prev) => (prev -= 1));

    if (counter <= 0) {
      setCounter((prev) => (prev = 0));
    }
    if (counter === 0) {
      if (prevRef.current) {
        prevRef.current.style.pointerEvents = "none";
        prevRef.current.style.opacity = "0.3";
      }

      if (nextRef.current) {
        nextRef.current.style.pointerEvents = "auto";
        nextRef.current.style.opacity = "1";
      }
    }
  };

  const handleNext = (item: Products) => {
    setCounter((prev) => (prev += 1));
    if (counter >= item.gallery.length - 1) {
      setCounter((prev) => (prev = item.gallery.length - 1));
    }

    if (counter === item.gallery.length - 1) {
      if (nextRef.current) {
        nextRef.current.style.pointerEvents = "none";
        nextRef.current.style.opacity = "0.3";
      }

      if (prevRef.current) {
        prevRef.current.style.pointerEvents = "auto";
        prevRef.current.style.opacity = "1";
      }
    }
  };

  return (
    <div>
      <div className="sm:flex justify-between py-7 h-100 border-b">
        <div>
          <p className="font-semibold">{item.name.split(" ")[0]}</p>
          <p className="font-light">{item.name.split(" ").slice(1)}</p>
          <p>{`${item.prices.currency?.symbol}${item.prices.amount.toFixed(
            2
          )}`}</p>
          <p className="font-semibold pt-3">size:</p>
          {item.attributes.map((attr) =>
            attr.items.map((val) => (
              <span
                key={val.id}
                className={`inline-block border border-black cursor-pointer mr-3 py-1 p-3 focus:text-white ${
                  size === val.id ? "bg-black" : " "
                } ${size === val.id ? "text-white" : "text-black"}`}
                onClick={() => handleSizeClick(val.id)}
              >
                {val.value}
              </span>
            ))
          )}
        </div>
        <div className="sm:grid sm:grid-cols-2 py-3 sm:py-0 justify-between">
          <div className="sm:grid py-3 md:py-0 flex gap-4">
            <span
              className="flex justify-center items-center border border-black cursor-pointer w-7 h-7"
              onClick={() => handleIncrease()}
            >
              +
            </span>
            <span className="flex justify-center items-center w-7">
              {item.quantity}
            </span>
            <span
              className="flex justify-center items-center border border-black cursor-pointer w-7 h-7"
              onClick={() => {
                item.quantity === 1 ? handleRemoveItem() : handleDecrease();
              }}
            >
              -
            </span>
          </div>
          <div className="relative">
            <Image
              src={item.gallery[counter]}
              alt={item.name}
              width={100}
              height={120}
              className="w-full h-auto object-cover mt-3"
            />
            <div className="flex text-white absolute bottom-3 right-2">
              <span
                ref={prevRef}
                className="inline-block mr-2"
                data-index={item.id}
                onClick={() => handlePrev()}
              >
                <HiChevronLeft className="border cursor-pointer bg-slate-700 w-5 h-6" />
              </span>
              <span
                className="inline-block"
                data-index={item.id}
                ref={nextRef}
                onClick={() => handleNext(item)}
              >
                <HiChevronRight className="border cursor-pointer bg-slate-700 w-5 h-6 " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
