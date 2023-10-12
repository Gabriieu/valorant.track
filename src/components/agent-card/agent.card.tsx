import { iAgent } from "../../provider/types/@agent-types"
import { CardStyle, CardStyleBottom, CardStyleTop } from "./agent.style"
import { useNavigate } from "react-router-dom"

interface iAgentProp {
    agent: iAgent
}
export const AgentCard = ({agent}: iAgentProp) => {
    const navigate = useNavigate()

    return (
        <CardStyle onClick={() => navigate(`/agentes/${agent.uuid}`)}>
            <CardStyleTop>
                <img className="agent" src={agent.fullPortraitV2} alt={agent.displayName} />
                <img className="agent-background" src={agent.background} alt={agent.displayName} />
            </CardStyleTop>
            <CardStyleBottom>
                <h4>{agent.displayName}</h4>
                <h5>{agent.role.displayName}</h5>
                <img src={agent.role.displayIcon} alt={agent.role.displayName} />
            </CardStyleBottom>
        </CardStyle>
    )
}