import { iAgent } from "../../provider/types/@agent-types";
import { SkillCard } from "../skill-card/skill.card";
import {
  AgentInfoCardStyle,
  SectionContainer,
  SectionContainer2,
} from "./agent.info.style";
import { useEffect } from "react";

interface iAgentInfoCardProps {
  agent: iAgent;
}

export const AgentInfoCard = ({ agent }: iAgentInfoCardProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <SectionContainer>
        <AgentInfoCardStyle>
          {agent && (
            <>
              <div className="agent-img">
                <img src={agent.fullPortraitV2} alt={agent.displayName} />
              </div>
              <div className="agent-name">
                <h1>{agent.displayName.toUpperCase()}</h1>
              </div>
            </>
          )}
        </AgentInfoCardStyle>
        {agent && (
          <div className="agent-description">
            <h1>Função: {agent.role.displayName}</h1>
            <p>{agent.description}</p>
          </div>
        )}
      </SectionContainer>
      <SectionContainer2>
        {agent && (
          <>
            <h1>Habilidades</h1>
            <ul>
              {agent.abilities.map((ability) => (
                <SkillCard skill={ability} key={ability.displayName} />
              ))}
            </ul>
          </>
        )}
      </SectionContainer2>
    </>
  );
};
