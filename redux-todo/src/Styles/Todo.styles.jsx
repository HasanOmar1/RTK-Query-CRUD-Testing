import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  font-size: 2rem;
  gap: 1rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  input {
    font-size: 2rem;
    padding: 20px 10px;
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 10px 30px;
    font-size: 2rem;
    cursor: pointer;
  }
  button:hover {
    color: green;
    background-color: darkgrey;
  }
`;

export const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding-top: 30px;
  font-size: 1.7rem;
`;

export const TodoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 2px solid ${(props) => (props.$mode ? "#00f891a0" : "#991a1a")};
  padding: 15px 30px;
`;

export const Icons = styled.div`
  color: ${(props) => (props.$red ? "red" : "green")};
  transform: scale(1.5);
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    color: ${(props) => (props.$red ? "cyan" : "blue")};
  }
`;
