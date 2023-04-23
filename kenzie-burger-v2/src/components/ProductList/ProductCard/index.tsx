import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { CartContext } from "../../../providers/CartContext";
import { useContext } from "react";
import { ICart } from "../../../providers/CartContext";

interface IProductListprops {
  product: ICart;
  name: string;
  img: string;
  price: number;
  category: string;
}

const ProductCard = ({
  product,
  name,
  img,
  price,
  category,
}: IProductListprops) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={img} alt="Hamburguer" />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {name}
        </StyledTitle>
        <StyledParagraph className="category">{category}</StyledParagraph>
        <StyledParagraph className="price">
          {price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
          })}
        </StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => addProductToCart(product)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
