import { MdDelete } from "react-icons/md";
import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { useContext } from "react";
import {
  CartContext,
  IproductCartList,
} from "../../../../providers/CartContext";

interface IProductProps {
  product: IproductCartList;
  name: string;
  img: string;
}

const CartProductCard = ({ product, name, img }: IProductProps) => {
  const { removeProductToList } = useContext(CartContext);

  return (
    <>
      <StyledCartProductCard>
        <div className="imageBox">
          <img src={img} alt="" />
        </div>
        <div className="contentBox">
          <StyledTitle tag="h3" $fontSize="three">
            {name}
          </StyledTitle>
          <button
            type="button"
            aria-label="Remover"
            onClick={() => removeProductToList(product.id)}
          >
            <MdDelete size={24} />
          </button>
        </div>
      </StyledCartProductCard>
    </>
  );
};

export default CartProductCard;
