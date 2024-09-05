import React from "react";

//Get Dynamic params
export default function ProductDetailPage({ params }) {
  return (
    <main>
      <h1>Product Details Page</h1>
      <p>{params.id}</p>
    </main>
  );
}
