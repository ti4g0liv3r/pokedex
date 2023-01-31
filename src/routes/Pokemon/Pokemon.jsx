import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Title, TypeTag } from "../../components";
import { useClient } from "../../hooks";
import {
  AdditionalImageWrapper,
  BasicStatContainer,
  BasicStatWrapper,
  BasicTraitsContainer,
  NavContainer,
  PokemonImage,
  SectionHeader,
  StatsBar,
  StatsCardContainer,
  StyledSection,
  TypesContainer,
} from "./styles";

const TAG_COLOR = {
  normal: "#474747",
  fighting: "#995e11",
  flying: "#078",
  poison: "#4a0c6e",
  ground: "#5f3c08",
  rock: "#695a45",
  bug: "#389712",
  ghost: "#45385a",
  steel: "#60777a",
  fire: "#7e1c1c",
  water: "#173e88",
  grass: "#0e5f1b",
  electric: "#d3b21f",
  psychic: "#a2aa5d",
  ice: "#598cb6",
  dragon: "#20b37b",
  dark: "#233235",
  fairy: "#c437d1",
  unknown: "#666666",
  shadow: "#1c2a2c",
};

export const Pokemon = () => {
  const [activeMenu, setActiveMenu] = useState("basic-info");
  const { pokemonName } = useParams();
  const { data, isLoading, error } = useClient(`pokemon/${pokemonName}`);

  if (isLoading) return <Title>Loading...</Title>;

  if (error) return <Title>Oops, something went wrong</Title>;

  const { types, stats } = data;
  const colorByType = TAG_COLOR[types[0].type?.name || "normal"];

  return (
    <StyledSection bgColor={colorByType}>
      <SectionHeader>
        <Link to="/">Back</Link>
        <p>Add</p>
      </SectionHeader>
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
        <NavContainer hoverColor={colorByType}>
          <a
            className={activeMenu === "basic-info" ? "active" : ""}
            onClick={() => setActiveMenu("basic-info")}
          >
            Basic Info
          </a>
          <a
            className={activeMenu === "stats" ? "active" : ""}
            onClick={() => setActiveMenu("stats")}
          >
            Stats
          </a>
        </NavContainer>
        {activeMenu === "stats" ? (
          <BasicStats stats={stats} />
        ) : (
          <BasicInfo data={data} />
        )}
      </StatsCardContainer>
    </StyledSection>
  );
};

const BasicStats = ({ stats }) => {
  const StatsLabels = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "S. attack",
    "special-defense": "S. defense",
    speed: "Speed",
  };

  return (
    <BasicStatContainer>
      {stats &&
        stats.map(({ base_stat, stat }) => (
          <BasicStatWrapper key={stat.name}>
            <p>
              <span>{StatsLabels[stat.name]}</span> <span>{base_stat}</span>
            </p>
            <StatsBar stat={base_stat} />
          </BasicStatWrapper>
        ))}
    </BasicStatContainer>
  );
};

const BasicInfo = ({ data }) => {
  const { abilities, base_experience, height, weight, sprites } = data;
  return (
    <>
      <AdditionalImageWrapper>
        <p>Base XP: {base_experience}</p>
        <PokemonImage src={sprites.front_default} />
        <PokemonImage src={sprites.back_default} />
      </AdditionalImageWrapper>
      <BasicTraitsContainer>
        <tbody>
          <tr>
            <td>Height:</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{`${weight} Kgs`}</td>
          </tr>
          <tr>
            <td>Abilities:</td>
            <td>
              {abilities.map((ability) => (
                <span key={ability.slot}>{ability.ability.name}</span>
              ))}
            </td>
          </tr>
        </tbody>
      </BasicTraitsContainer>
    </>
  );
};
