import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

const CartProductList = () => {
  const { favoriteList, removeProductsAllCart, total } =
    useContext(CartContext);

  const handleRemoveAll = () => {
    removeProductsAllCart();
  };

  return (
    <>
      <StyledCartProductList>
        <ul>
          {favoriteList.map((product) => (
            <CartProductCard
              key={product.id}
              name={product.name}
              img={product.img}
              product={product}
            />
          ))}
        </ul>

        <div className="totalBox">
          <StyledParagraph>
            <strong>Total</strong>
          </StyledParagraph>
          <StyledParagraph className="total">
            R$:{" "}
            {total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </StyledParagraph>
        </div>
        <StyledButton
          $buttonSize="default"
          $buttonStyle="gray"
          onClick={handleRemoveAll}
        >
          Remover todos
        </StyledButton>
      </StyledCartProductList>
    </>
  );
};

export default CartProductList;
