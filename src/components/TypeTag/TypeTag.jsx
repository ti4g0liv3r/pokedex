import styled from "styled-components";

const StyledTag = styled.small`
  padding: 5px 10px;
  background-color: #ffffff5c;
  color: white;
  margin: 0px 5px;
  border-radius: 50px;
  cursor: pointer;
`;

export const TypeTag = ({ type = "normal" }) => {
  return <StyledTag>{type}</StyledTag>;
};
