import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: ${(props) => (props.$mode ? "#242424" : "#868585")};
  color: ${(props) => (props.$mode ? "white" : "black")};
  min-height: 92vh;

  input {
    background-color: ${(props) => (props.$mode ? "#333" : "white")};
    color: ${(props) => (props.$mode ? "white" : "black")};
  }
`;
