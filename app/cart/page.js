"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.product_id}>
                <Image
                  src={item?.image || ""}
                  width={100}
                  height={100}
                  alt={item.name}
                />
                <p>{item?.name}</p>
                <p>Quantity: {item?.quantity}</p>
                <p>Price: {item?.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <h2>Total Price: {totalPrice?.toFixed(2)}</h2>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
