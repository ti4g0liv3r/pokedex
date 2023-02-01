import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  padding: 0px;
`;

export const StyledListItem = styled.li`
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;
