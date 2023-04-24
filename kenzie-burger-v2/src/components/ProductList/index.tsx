import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { CartContext } from "../../providers/CartContext";

const ProductList = () => {
  const { productList, searchResults, search } = useContext(CartContext);

  const currentProductList = search !== "" ? searchResults : productList;

  return (
    <StyledProductList>
      {currentProductList.map((product) => (
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
