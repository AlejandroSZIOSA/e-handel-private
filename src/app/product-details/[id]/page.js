import React from "react";

export default function ProductDetailPage({ params }) {
  return (
    <main>
      <h1>Product Details</h1>
      <p>{params.id}</p>
    </main>
  );
}