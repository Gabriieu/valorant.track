import { Footer } from "../../components/footer/footer.index"
import { GoToTop } from "../../components/go-to-top/go-to-top.index"
import { Header } from "../../components/header"
import { MainContext } from "../../provider/main.provider"
import { MainStyle } from "../agents/style"
import {useEffect, useContext} from "react"
import { UlStyle } from "../weapons/weapons.style"

export const TiersPage = () => {
    const {tiers, getTiers} = useContext(MainContext)

    useEffect(() => {
        getTiers()
    })
    return(
        <>
        <Header/>
        <MainStyle>
            <h1>{`< EM DESENVOLVIMENTO />`}</h1>
            <UlStyle>
                {tiers.map(tier => <li>{tier.tierName}</li>)}
            </UlStyle>
        </MainStyle>
        <Footer/>
        <GoToTop/>
        </>
    )
}