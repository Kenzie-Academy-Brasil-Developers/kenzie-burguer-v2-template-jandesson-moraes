import styled from "styled-components";

export const StyledNotFound = styled.div`
  @media (min-width: 320px) {
    display: flex;
    margin-top: 5rem;
    div {
      display: flex;
      img {
        width: 100vw;
        max-height: 100vh;
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    margin-top: 0;
    align-items: center;
    justify-content: center;
    max-height: 100vh;
    max-width: 100vw;

    div {
      img {
        width: 700px;
        /* max-height: 100vh; */
        max-height: 650px;
      }
    }
  }
`;
