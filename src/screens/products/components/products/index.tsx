import { FC, ReactElement } from "react";
import { IProduct } from "../../../../types/product.types";
import ProductCard from "../product-card";
import { StyledProducts } from "./styles";

type ProductsProps = {
  products: IProduct[] | undefined;
};

const Products: FC<ProductsProps> = ({ products }): ReactElement => {
  if (!products) return <div>loading...</div>;

  return (
    <StyledProducts>
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </StyledProducts>
  );
};

export default Products;
