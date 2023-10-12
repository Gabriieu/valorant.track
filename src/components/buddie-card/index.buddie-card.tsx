import { iBuddie } from "../../provider/types/@buddie-types";
import { BuddieCardStyle } from "./buddie.style";

interface iBuddieCardProp {
  buddie: iBuddie;
}

export const BuddieCard = ({ buddie }: iBuddieCardProp) => {
  return (
    <BuddieCardStyle>
      <img className="buddie-image" src={buddie.displayIcon} alt="" />
      <div>
        <h1>{buddie.displayName}</h1>
      </div>
    </BuddieCardStyle>
  );
};
