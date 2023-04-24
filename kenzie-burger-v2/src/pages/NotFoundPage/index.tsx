import notFound from "../../assets/notfound.jpg";
import { StyledNotFound } from "./style";

export const NotFoundPage = () => {
  return (
    <StyledNotFound>
      <div>
        <img src={notFound} alt="Not Found" />
      </div>
    </StyledNotFound>
  );
};
