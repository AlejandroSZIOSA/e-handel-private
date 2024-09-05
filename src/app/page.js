"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [cartInfo, setCartInfo] = useState({
    userAccountId: 0,
    totalProducts: 0,
    transactionDate: "Date",
  });

  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link
          href={{
            pathname: "/product-details",
            query: cartInfo,
          }}
        >
          <button>To Product detail Page</button>
        </Link>
      </p>
      <h2>Increase Total products</h2>
      <p>Total Products:{cartInfo.totalProducts}</p>
      <button
        onClick={() =>
          setCartInfo({
            ...cartInfo,
            totalProducts: cartInfo.totalProducts + 1,
          })
        }
      >
        Increase Total products
      </button>
    </main>
  );
}
