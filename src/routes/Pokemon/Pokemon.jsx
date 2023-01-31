import { useState } from "react";
import { useParams } from "react-router-dom";

import { AddToFav, BackButton, Title, TypeTag } from "../../components";
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

/* 
PENDING MOVE COMPONENTS OUT OF THIS COMPONENT


*/

export const Pokemon = () => {
  const [activeMenu, setActiveMenu] = useState("basic-info");
  const { pokemonName } = useParams();
  const { data, isLoading, error } = useClient(`pokemon/${pokemonName}`);

  if (isLoading) return <Title>Loading...</Title>;

  if (error) return <Title>Oops, something went wrong</Title>;

  const { types, stats } = data;
  const colorByType = types[0].type?.name || "normal";

  return (
    <StyledSection bgColor={colorByType}>
      <SectionHeader>
        <BackButton path="/" />
        <AddToFav pokemonName={pokemonName} />
      </SectionHeader>
      <PokemonImage
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`}
      />
      <SectionHeader>
        <p className="pokemon-name">{pokemonName}</p>
        <p className="pokemon-id">{`#${data.id}`}</p>
      </SectionHeader>

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
  const { abilities, base_experience, height, weight, sprites, types } = data;
  return (
    <>
      <AdditionalImageWrapper>
        <p>Base XP: {base_experience}</p>
        <PokemonImage src={sprites.front_default} />
        <PokemonImage src={sprites.back_default} />
        <TypesContainer>
          {types &&
            types.map((types) => (
              <TypeTag type={types.type.name} key={types.type.slot} />
            ))}
        </TypesContainer>
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
