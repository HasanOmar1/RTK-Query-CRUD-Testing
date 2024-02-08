import styled from "styled-components";

export const Nav = styled.nav`
  height: 8vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  .theme-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 80%;
    margin: 15px 0;
    padding: 10px;
    background-color: #504124;
    width: 3vw;
  }

  .theme-icon:hover {
    color: green;
    background-color: #222;
  }

  .logged-user {
    color: #c68910;
  }
`;

export const LoggedUser = styled.h1``;
