import Link from "next/link";

//Dynamic Params
export default function ProductsDetailsPage() {
  return (
    <main>
      <h1>Product details</h1>
      <p>
        <Link href={`product-details/${1}`}> To product 1</Link>
      </p>
    </main>
  );
}
