"use client";
import Link from "next/link";

//1-Dynamic Params Here
//2-retrieve Obj from Home Page

export default function ProductsDetailsPage({ searchParams }) {
  console.log(searchParams);
  return (
    <main>
      <h1>Product details</h1>
      <p>
        <Link href={`product-details/${1}`}> To product 1</Link>
      </p>
      <p>
        <Link href={`product-details/${2}`}> To product 2</Link>
      </p>
      <h2>Retrive Data</h2>
      <p>{}</p>
    </main>
  );
}
