import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts, currency } from "./products";

interface ProductInfo {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

export default function HomeContent() {
  const [products, setProducts] = useState<ProductInfo[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${product.id}`}>
                <a>{product.name}</a>
              </Link>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
        </div>
      ))}
    </div>
  );
}
