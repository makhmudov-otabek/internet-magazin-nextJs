import { ProductType } from "@/interfaces";
import { FC } from "react";
import CustomImage from "./custom-image";
import Link from "next/link";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="h-96 flex flex-col border p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200"
    >
      {/* <img
        className="h-40 rounded w-full object-cover object-center mb-6"
        src={product.image}
        alt="content"
      /> */}
      <div className="relative max-h-80 flex-1">
        <CustomImage product={product} fill />
      </div>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <p className="leading-relaxed text-base line-clamp-2">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
