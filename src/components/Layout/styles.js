import styled from "styled-components";

export const StyledLogo = styled.img`
  max-height: 100px;
  margin: 10px;
  ${({ theme }) => theme.query.xs`
      max-height: 80px;
   `}
`;

export const LogoWrapper = styled.div`
  height: ${({ theme }) => `${theme.logoContainerHeight}px`};
`;
