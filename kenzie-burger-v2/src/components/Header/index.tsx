import { MdShoppingCart, MdLogout } from "react-icons/md";
import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
import { SetStateAction, useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const Header = () => {
  const { setIsOpenModal, userLogout } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm
              setSearch={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <div className="buttons">
              <button type="button" onClick={() => setIsOpenModal(true)}>
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={() => userLogout()}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
