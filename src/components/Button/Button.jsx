import styled from "styled-components";

const StyledButton = styled.button``;

export const Button = ({ type = "primary", name = "button" }) => {
  return <StyledButton type={type}>{name}</StyledButton>;
};
