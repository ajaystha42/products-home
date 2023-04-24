import { useEffect, useState } from "react";

import Product from "../../components/Product/Product";
import { ProductInfo } from "../../constants/Product";
import { getProducts } from "../../services/products";

export default function Home() {
  const [products, setProducts] = useState<ProductInfo[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
