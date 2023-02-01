import { Outlet } from "react-router-dom";

import { StyledContainer } from "../";
import logo from "../../assets/images/pokemon_logo.png";
import { LogoWrapper, StyledLogo } from "./styles";

//StyledContainer is used to give the "structure" all over the app.
//Additional components are on styles.js

export const Layout = () => {
  return (
    <StyledContainer>
      <LogoWrapper>
        <StyledLogo src={logo} alt="Pokemon Logo" />
      </LogoWrapper>
      <Outlet />
    </StyledContainer>
  );
};
