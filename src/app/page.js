"use client";
import Link from "next/link";
import { useEffect, useState, searchParams } from "react";

export default function Home({ searchParams }) {
  const retrieveTotalProducts = searchParams.totalProducts;
  const [cartInfo, setCartInfo] = useState({
    userAccountId: 0,
    totalProducts: 0,
    transactionDate: "Date",
  });

  //Holds the total products updated in home page
  useEffect(() => {
    if (retrieveTotalProducts) {
      setCartInfo({
        ...cartInfo,
        totalProducts: parseInt(retrieveTotalProducts),
      });
    }
  }, [retrieveTotalProducts]);

  return (
    <main>
      <h1>Home Page</h1>
      <Link
        href={{
          pathname: "/product-details",
          query: cartInfo,
        }}
      >
        <button>To Product detail Page</button>
      </Link>
      <br></br> <br></br>
      <Link
        href={{
          pathname: "/cart",
          query: cartInfo,
        }}
      >
        <button>To Cart Page</button>
      </Link>
      <h2>Retrieve Data</h2>
      <p>{retrieveTotalProducts}</p>
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
      <br></br>
    </main>
  );
}
