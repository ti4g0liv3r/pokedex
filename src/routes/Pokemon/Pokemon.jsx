import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Title, TypeTag } from "../../components";
import { useClient } from "../../hooks";

const PokemonImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 150px;
  margin-bottom: 30px;
`;

///////////////////////////
const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: teal;
`;

const SectionHeader = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  padding: 20px;

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
`;

const TypesContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

const StatsCardContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: white;
  border: 1px solid white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 0px 20px;
  padding: 20px;

  -webkit-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Pokemon = () => {
  const [activeMenu, setActiveMenu] = useState("basic-info");
  const { pokemonName } = useParams();
  const { data, isLoading, error } = useClient(`pokemon/${pokemonName}`);

  if (isLoading) return <Title>Loading...</Title>;

  if (error) return <Title>Oops, something went wrong</Title>;

  console.log(data);
  const mainImage = data?.sprites?.front_default;
  const { types, stats } = data;

  return (
    <StyledSection>
      <SectionHeader>
        <p className="pokemon-name">{pokemonName}</p>
        <p className="pokemon-id">{`#${data.id}`}</p>
      </SectionHeader>
      <TypesContainer>
        {types &&
          types.map((types) => (
            <TypeTag type={types.type.name} key={types.type.slot} />
          ))}
      </TypesContainer>
      <PokemonImage
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`}
      />
      <StatsCardContainer>
        <CardMenuNav active={activeMenu} setActive={setActiveMenu} />
        {activeMenu === "stats" ? (
          <BasicStats stats={stats} />
        ) : (
          <BasicInfo data={data} />
        )}
      </StatsCardContainer>
    </StyledSection>
  );
};

const StatsBar = styled.div`
  width: 100%;
  height: 8px;
  border: 1px solid lightgray;
  border-radius: 20px;
  background: linear-gradient(
    to right,
    green ${({ stat }) => `${stat}%`},
    white ${({ stat }) => `${stat - 100}%`},
    transparent
  );
`;

const BasicStatsContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  > p {
    font-weight: bold;
    color: gray;
    text-transform: uppercase;
  }
`;

const BasicStats = ({ stats }) => {
  return (
    stats &&
    stats.map(({ base_stat, stat }) => (
      <BasicStatsContainer key={stat.name}>
        <p>{stat.name}</p> <StatsBar stat={base_stat} />
      </BasicStatsContainer>
    ))
  );
};

const BasicTraitsContainer = styled.table`
  margin: auto;
  width: 100%;
  max-width: 400px;
  font-weight: bold;
  tr {
    height: 30px;
  }
  td {
    width: 50%;
    color: gray;

    &:last-child {
      text-align: right;
      font-weight: normal;
    }

    > span {
      margin-left: 10px;
    }
  }
`;

const BasicInfo = ({ data }) => {
  const { abilities, base_experience, height, weight, types } = data;
  return (
    <BasicTraitsContainer>
      <tbody>
        <tr>
          <td>Height</td>
          <td>{height}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{`${weight} Kgs`}</td>
        </tr>
        <tr>
          <td>Abilities</td>
          <td>
            {abilities.map((ability) => (
              <span key={ability.slot}>{ability.ability.name}</span>
            ))}
          </td>
        </tr>
      </tbody>
    </BasicTraitsContainer>
  );
};

const NavContainer = styled.nav`
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
      border-bottom: 2px solid paleturquoise;
    }
  }

  > a.active {
    color: gray;
    border-bottom: 2px solid paleturquoise;
  }
`;

const CardMenuNav = ({ active, setActive }) => {
  return (
    <NavContainer>
      <a
        className={active === "basic-info" ? "active" : ""}
        onClick={() => setActive("basic-info")}
      >
        Basic Info
      </a>
      <a
        className={active === "stats" ? "active" : ""}
        onClick={() => setActive("stats")}
      >
        Stats
      </a>
    </NavContainer>
  );
};
