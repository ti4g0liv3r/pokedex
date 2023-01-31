import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const StyledButton = styled.button``;

export const Button = ({ type = "primary", name = "button" }) => {
  return <StyledButton type={type}>{name}</StyledButton>;
};

const ButtonLinkWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffffff5e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  > a {
    color: white;
    padding-top: 3px;
  }
`;

export const BackButton = ({ path = "", text }) => {
  return (
    <ButtonLinkWrapper>
      <Link to={path}>{text ? text : <FaArrowLeft />}</Link>
    </ButtonLinkWrapper>
  );
};
