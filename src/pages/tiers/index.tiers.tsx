import { Footer } from "../../components/footer/footer.index"
import { GoToTop } from "../../components/go-to-top/go-to-top.index"
import { Header } from "../../components/header"
import { MainStyle } from "../agents/style"

export const TiersPage = () => {
    return(
        <>
        <Header/>
        <MainStyle>
            <h1>{`< EM DESENVOLVIMENTO />`}</h1>
        </MainStyle>
        <Footer/>
        <GoToTop/>
        </>
    )
}