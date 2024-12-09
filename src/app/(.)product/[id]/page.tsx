"use client";

import { ProductType } from "@/interfaces";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomImage from "@/components/custom-image";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
const ProductDetailedPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const product = await res.json();
      setProduct(product);
      setIsLoading(false);
    }
    getData();
  }, [params.id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className={`z-50 relative`}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden={true} />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className={`mx-auto max-w-3xl rounded bg-white p-10`}>
            {isLoading ? (
              <div className="w-8 h-8 rounded-full border-dotted border-2 border-blue-600 animate-spin" />
            ) : (
              <div className="flex gap-8 h-96">
                {product?.image && (
                  <div className="relative w-72 h-full hidden md:inline">
                    <CustomImage product={product} fill />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="font-semibold">{product?.title}</h4>
                    <p className="font-medium text-sm">
                      {product?.description}
                    </p>{" "}
                    <p className="font-medium text-sm">{product?.price}$</p>
                    <div className="flex items-center text-sm my-4">
                      <p>{product?.rating.rate}</p>
                      {product?.rating.rate && (
                        <div className="flex items-center ml-2 mr-6">
                          {Array.from(
                            {
                              length: Math.floor(product.rating.rate),
                            },
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )}
                          {Array.from(
                            {
                              length: 5 - Math.floor(product.rating.rate),
                            },
                            (_, i) => (
                              <StarIconOutline
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                              />
                            )
                          )}
                        </div>
                      )}
                      <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                        See all {product?.rating.count} reviews
                      </p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <button className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
                        Add to bag
                      </button>
                      <button
                        onClick={() => window.location.reload()}
                        className="button w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"
                      >
                        View full details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default ProductDetailedPage;
