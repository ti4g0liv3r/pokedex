import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: auto;
  display: inline;

  > img {
    object-fit: contain;
  }
`;

export const PokemonImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 10px;

  ${({ theme }) => theme.query.xs`
    max-width: 100px;
    max-height: 100px;
   `}
`;

///////////////////////////
/* 

  height: ${({ theme }) =>
    `${theme.logoContainerHeight - theme.windowSize.height}px`};
*/
export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  max-width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ bgColor, theme: { tagColor } }) =>
    bgColor && tagColor[bgColor]};
  padding-top: 20px;
  margin: 20px 0px;

  ${({ theme }) => theme.query.xs`
    max-width: 350px;
   `}
`;

export const HeaderWrapper = styled.div`
  height: 300px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.query.xs`
    max-width: 300px;
    max-height: 230px;
   `}
`;

export const SectionHeader = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 20px;

  > p.pokemon-name {
    text-transform: capitalize;
    margin: 0px;
    font-weight: bold;
    font-size: 28px;
  }

  > p.pokemon-id {
    text-transform: capitalize;
    margin: 0px;
    font-weight: bold;
    font-size: 18px;
  }

  ${({ theme }) => theme.query.xs`
    max-width: 300px;
   `}
`;

export const TypesContainer = styled.div`
  width: 100%;
  height: 40px;
  max-width: 400px;
  ${({ theme }) => theme.query.xs`
    max-width: 300px;
   `}
`;

export const StatsCardContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px 0px;

  -webkit-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const StatsBar = styled.div`
  width: 100%;
  height: 8px;
  border: 1px solid lightgray;
  margin-left: 15px;
  border-radius: 20px;
  background: linear-gradient(
    to right,
    green ${({ stat }) => `${stat}%`},
    white ${({ stat }) => `${stat - 100}%`},
    transparent
  );
`;
export const BasicStatContainer = styled.div`
  height: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BasicStatWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: auto;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  ${({ theme }) => theme.query.xs`
    max-width: 300px;
   `}

  > p {
    color: gray;
    width: 200px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > span:last-child {
      font-weight: bold;
    }
  }
`;
export const BasicTraitsContainer = styled.table`
  margin: auto;
  width: 100%;
  max-width: 400px;
  font-weight: normal;

  ${({ theme }) => theme.query.xs`
    max-width: 300px;
   `}

  tr {
    height: 30px;
  }
  td {
    width: 50%;
    color: gray;

    &:last-child {
      text-align: right;
      font-weight: bold;
    }

    > span {
      margin-left: 10px;
      font-size: 14px;
    }

    > span:after {
      content: ",";
    }

    > span:last-child:after {
      content: "";
    }
  }
`;

export const AdditionalImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid lightgray;
  max-width: 400px;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 20px;
  > p {
    color: gray;
    margin-bottom: 0px;
  }
`;

export const NavContainer = styled.nav`
  width: 200px;
  margin: auto;
  text-align: center;

  > a {
    margin: 0px 10px;
    text-transform: uppercase;
    text-decoration: none;
    color: lightgray;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: gray;
      border-bottom: 2px solid
        ${({ hoverColor, theme: { tagColor } }) =>
          hoverColor && tagColor[hoverColor]};
    }
  }

  > a.active {
    color: gray;
    border-bottom: 2px solid
      ${({ hoverColor, theme: { tagColor } }) =>
        hoverColor && tagColor[hoverColor]};
  }
`;
