import { Routes, Route } from "react-router-dom"
import { AgentsPage } from "../pages/agents/index.agents"
import { WeaponsPage } from "../pages/weapons/index.weapons"
import { MapsPage } from "../pages/maps/index.maps"
import { HomePage } from "../pages/home/index.home"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/agents" element={<AgentsPage/>}/>
            <Route path="/weapons" element={<WeaponsPage/>}/>
            <Route path="/maps" element={<MapsPage/>}/>
        </Routes>
    )
}