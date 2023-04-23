import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { StyledRegisterPage } from "./style";
import RegisterForm from "../../components/Form/RegisterForm";
import IllustrationBox from "../../components/IllustrationBox";
import { StyledContainer, StyledGridBox } from "../../styles/grid";
import { StyledTitle } from "../../styles/typography";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  return (
    <>
      <StyledRegisterPage>
        <ToastContainer
          position="top-right"
          autoClose={1990}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <StyledContainer>
          <div className="flexGrid">
            <div className="left">
              <IllustrationBox />
            </div>
            <div className="right">
              <StyledGridBox className="formBox">
                <header>
                  <StyledTitle tag="h1" $fontSize="three">
                    Cadastro
                  </StyledTitle>
                  <Link to="/">Retornar para o login</Link>
                </header>

                <RegisterForm />
              </StyledGridBox>
            </div>
          </div>
        </StyledContainer>
      </StyledRegisterPage>
    </>
  );
};

export default RegisterPage;
