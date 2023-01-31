import styled from "styled-components";

const StyledGrid = styled.section`
  width: 100%;
  min-width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};
