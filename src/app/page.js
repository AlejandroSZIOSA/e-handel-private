"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [totalQuantityProducts, setTotalQuantityProducts] = useState(0);

  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/product-details"> Link To product Detail Page</Link>
      </p>
      <h2>Increase Total product</h2>
      <p>Total Products:{totalQuantityProducts}</p>
      <button
        onClick={(e) => setTotalQuantityProducts(totalQuantityProducts + 1)}
      >
        Increase Total products
      </button>
    </main>
  );
}
