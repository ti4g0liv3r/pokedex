import styled from "styled-components";

const StyledTitle = styled.p`
  text-transform: ${({ capitalized }) => (capitalized ? "capitalize" : "none")};
  text-align: center;
  margin: 10px 0px;
  font-size: ${({ size, theme: { titleSizes } }) => size && titleSizes[size]};

  ${({ theme }) => theme.query.xs`
      font-size: ${({ theme }) => theme.titleSizes[4]}
   `}
`;

export const Title = ({ size = 4, capitalized = true, children }) => {
  return (
    <StyledTitle size={size} capitalized={capitalized}>
      {children}
    </StyledTitle>
  );
};
