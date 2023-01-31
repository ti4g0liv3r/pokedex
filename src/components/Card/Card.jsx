import styled from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ecebeb;
  border-radius: 5px;
  background-color: #ecebeb;

  &:hover {
    background-color: #ecebeb;
    transform: scale(1.1);
    transition: transform 0.1s;
    -webkit-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.03);
    -moz-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.03);
    box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.03);
  }
`;

export const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
