import styled from "styled-components";

export const Toolsbar = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.query.xs`
      flex-wrap: wrap;
   `}
`;

export const InputContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const SearchInput = styled.input`
  border: 1px solid lightgray;
  height: 20px;
  padding: 10px;
  border-radius: 20px;
  min-width: 300px;
`;
export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;

  > a {
    width: auto;
    margin-right: 30px;
    cursor: pointer;
    color: gray;
    > svg {
      padding: 0px 5px;
    }
  }
  > a.active {
    font-weight: bold;
    color: darkblue;
  }

  > a:hover {
    font-weight: bold;
    color: darkblue;
  }
`;
