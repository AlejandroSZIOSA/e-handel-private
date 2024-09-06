"use client";
import React, { useState } from "react";
import Link from "next/link";

//3- Retrieve, update and send data back to the "Home page"

export default function CartPage({ searchParams }) {
  const { totalProducts } = searchParams;
  const [newTotalProduct, setNewTotalProducts] = useState(
    parseInt(totalProducts)
  );

  return (
    <div>
      <h1>Cart Page</h1>
      <Link
        href={{
          pathname: "/",
          query: { totalProducts: newTotalProduct },
        }}
      >
        <button>To Home Page</button>
      </Link>
      <h2>Retrieved Data</h2>
      {totalProducts}

      <h2>Increase Total products</h2>
      <button onClick={() => setNewTotalProducts(newTotalProduct + 1)}>
        Increase Total products
      </button>
      <br></br>

      <h2>New Total products</h2>
      {newTotalProduct}
    </div>
  );
}
