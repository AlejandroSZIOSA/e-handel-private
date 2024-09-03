import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <p>
        <Link href="/product-details"> To the products</Link>
      </p>
    </main>
  );
}
