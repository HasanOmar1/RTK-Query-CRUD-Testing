import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Nav } from "./Navbar.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../slices/ToggleSlice";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const toggleModes = useSelector((state) => state.toggleMode.darkMode);

  const dispatch = useDispatch();

  return (
    <Nav>
      <h1 className="logged-user">
        {currentUser &&
          `Welcome ${
            currentUser.name[0].toUpperCase() + currentUser.name.slice(1)
          }`}
      </h1>
      <h1 className="theme-icon" onClick={() => dispatch(toggleMode())}>
        {toggleModes ? <LightModeIcon /> : <DarkModeIcon />}
      </h1>
    </Nav>
  );
}
