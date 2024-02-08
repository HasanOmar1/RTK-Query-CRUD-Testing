import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../../components/Todo/Todo";
import { HomeContainer } from "../../Styles/HomePage.styles";
import { setCurrentUser } from "../../slices/UserSlice";

export default function Homepage() {
  const toggleMode = useSelector((state) => state.toggleMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      dispatch(setCurrentUser(foundUser));
    }
  }, []);

  return (
    <main>
      <Navbar />
      <HomeContainer $mode={toggleMode}>
        <div>
          <Todo />
        </div>
      </HomeContainer>
    </main>
  );
}
