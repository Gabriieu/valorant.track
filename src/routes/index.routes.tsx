import { Routes, Route } from "react-router-dom"
import { AgentsPage } from "../pages/agents/index.agents"
import { WeaponsPage } from "../pages/weapons/index.weapons"
import { MapsPage } from "../pages/maps/index.maps"
import { HomePage } from "../pages/home/index.home"
import { AgentInfoPage } from "../pages/agent-page/index.agent"
import { WeaponInfoPage } from "../pages/weapon-page/index.weapon"
import { Page404 } from "../pages/404/index.404"
import { BuddiesPage } from "../pages/buddies/index.buddies"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/agentes" element={<AgentsPage/>}/>
            <Route path="/agentes/:agentId" element={<AgentInfoPage/>}/>
            <Route path="/armas" element={<WeaponsPage/>}/>
            <Route path="/armas/:weaponId" element={<WeaponInfoPage/>}/>
            <Route path="/mapas" element={<MapsPage/>}/>
            <Route path="/chaveiros" element={<BuddiesPage/>}/>
            <Route path="/*" element={<Page404/>}/>
        </Routes>
    )
}