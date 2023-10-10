import { NotFoundStyle } from "./style.404"

export const NotFound = () => {
    return(
        <NotFoundStyle>
            <div id="not-found">
                <h1>ERRO 404</h1>
                <p>PÁGINA NÃO ENCONTRADA😧</p>
            </div>
        </NotFoundStyle>
    )
}