import { iTiers } from "../../provider/types/@tier-types"
import { TierStyled } from "./tier.style"

interface iTierProp {
    tier: iTiers
}
export const TierCard = ({tier}: iTierProp) => {
    return (
        <TierStyled>
            <h1>{tier.uuid}</h1>
        </TierStyled>
    )
}