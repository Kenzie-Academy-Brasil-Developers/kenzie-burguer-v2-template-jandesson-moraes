import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { CartContext } from "../../providers/CartContext";

const ProductList = () => {
  const { productList } = useContext(CartContext);

  return (
    <StyledProductList>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          img={product.img}
          category={product.category}
          price={product.price}
          product={product}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
