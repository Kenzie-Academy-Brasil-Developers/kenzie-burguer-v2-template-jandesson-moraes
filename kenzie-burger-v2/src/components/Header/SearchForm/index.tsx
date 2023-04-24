import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { ChangeEvent, useContext, useState } from "react";
import { CartContext } from "../../../providers/CartContext";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearch } = useContext(CartContext);

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
  };

  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        value={searchInput}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchInput(event.target.value)
        }
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
