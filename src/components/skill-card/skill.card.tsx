import { iAbility } from "../../provider/types/@agent-types";
import { SkillCardStyle } from "./skill.card.style";
import { useState } from "react";

interface iSkillProps {
  skill: iAbility;
}
export const SkillCard = ({ skill }: iSkillProps) => {
  const [display, setDisplay] = useState<true | false>(false);

  return (
    <SkillCardStyle onClick={() => setDisplay(!display)}>
      <div>
        <img
          className="skill-logo"
          src={skill.displayIcon}
          alt={skill.displayName}
        />
        <h2 className="skill-title">{skill.displayName}</h2>
      </div>
      {display && (
        <div className="skill">
          <p>{skill.description}</p>
        </div>
      )}
    </SkillCardStyle>
  );
};
