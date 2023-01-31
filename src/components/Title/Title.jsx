import styled from "styled-components";

const StyledTitle = styled.p`
  text-transform: ${({ capitalized }) => (capitalized ? "capitalize" : "none")};
  margin: 10px 0px;
  font-size: ${({ size }) => size};
`;

const TITLE_SIZES = {
  1: "48px",
  2: "38px",
  3: "28px",
  4: "18px",
  5: "8px",
};

export const Title = ({ size = 4, capitalized = true, children }) => {
  const titleSize = TITLE_SIZES[size];
  return (
    <StyledTitle size={titleSize} capitalized={capitalized}>
      {children}
    </StyledTitle>
  );
};
