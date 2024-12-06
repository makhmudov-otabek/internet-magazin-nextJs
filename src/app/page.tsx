import { ProductType } from "@/interfaces";
import Product from "@/components/product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto  px-8 xl:px-0">
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">SS SHOP DEALS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
          {products.map((product: ProductType) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
