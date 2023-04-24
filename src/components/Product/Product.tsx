import { Link } from "react-router-dom";
import { ProductInfo } from "../../constants/Product";
import { currency } from "../../services/products";

interface ProductProps {
  product: ProductInfo;
}

export default function Product({ product }: ProductProps) {
  return (
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
  );
}
