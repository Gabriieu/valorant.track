import { Routes, Route } from "react-router-dom"
import { AgentsPage } from "../pages/agents/index.agents"
import { WeaponsPage } from "../pages/weapons/index.weapons"
import { MapsPage } from "../pages/maps/index.maps"
import { HomePage } from "../pages/home/index.home"
import { AgentInfoPage } from "../pages/agent-page/index.agent"
import { WeaponInfoPage } from "../pages/weapon-page/index.weapon"
import { Page404 } from "../pages/404/index.404"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/agents" element={<AgentsPage/>}/>
            <Route path="/agents/:agentId" element={<AgentInfoPage/>}/>
            <Route path="/weapons" element={<WeaponsPage/>}/>
            <Route path="/weapons/:weaponId" element={<WeaponInfoPage/>}/>
            <Route path="/maps" element={<MapsPage/>}/>
            <Route path="/*" element={<Page404/>}/>
        </Routes>
    )
}