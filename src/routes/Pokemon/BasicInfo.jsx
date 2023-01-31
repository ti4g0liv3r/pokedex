import { TypeTag } from "../../components";
import {
  AdditionalImageWrapper,
  BasicTraitsContainer,
  PokemonImage,
  TypesContainer,
} from "./styles";

export const BasicInfo = ({ data }) => {
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
              <TypeTag type={types.type.name} key={types.slot} />
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
