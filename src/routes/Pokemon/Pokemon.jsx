import { useState } from "react";
import { useParams } from "react-router-dom";

import { AddToFav, BackButton, Title } from "../../components";
import { useClient } from "../../hooks";
import { BasicStats } from "./BasicStats";
import { BasicInfo } from "./BasicInfo";
import {
  NavContainer,
  PokemonImage,
  SectionHeader,
  StatsCardContainer,
  StyledSection,
  HeaderWrapper,
} from "./styles";

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
      <HeaderWrapper>
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
      </HeaderWrapper>

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
