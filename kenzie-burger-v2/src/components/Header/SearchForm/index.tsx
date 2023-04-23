import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
// import { useContext } from "react";
// import { CartContext } from "../../../providers/CartContext";

const SearchForm = () => {
  // const { setfilter, searchInput, setSearchInput } = useContext(CartContext);

  // const submit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   setfilter(searchInput);
  //   setSearchInput("");
  // };

  return (
    <StyledSearchForm>
      {/* <StyledSearchForm onSubmit={submit}> */}
      <input
        type="text"
        placeholder="Digitar pesquisa"
        // value={searchInput}
        // onChange={(event) => setSearchInput(event.target.value)}
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
