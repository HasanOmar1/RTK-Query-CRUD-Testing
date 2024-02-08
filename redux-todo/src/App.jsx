import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./Styles/Global.styles";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import Homepage from "./Pages/Homepage.jsx/Homepage";
import { useSelector } from "react-redux";

function App() {
  const toggleMode = useSelector((state) => state.toggleMode.darkMode);

  return (
    <>
      <GlobalStyles mode={toggleMode} />
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
