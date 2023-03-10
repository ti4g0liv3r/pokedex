import { BasicStatContainer, BasicStatWrapper, StatsBar } from "./styles";

const StatsLabels = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "S. attack",
  "special-defense": "S. defense",
  speed: "Speed",
};
export const BasicStats = ({ stats }) => {
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
