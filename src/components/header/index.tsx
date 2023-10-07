import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { DropDownMenu, HeaderStyle, LogoStyle } from "./header.style";

export const Header = () => {
  const [hambMenuStatus, setHambMenuStatus] = useState(true);
  const navigate = useNavigate()
  
  return (
    <>
      <HeaderStyle>
        <div>
          {hambMenuStatus ? (
            <div onClick={() => setHambMenuStatus(!hambMenuStatus)}>
              <RxHamburgerMenu size={48} />
            </div>
          ) : (
            <div onClick={() => setHambMenuStatus(!hambMenuStatus)}>
              <TfiClose size={48} />
            </div>
          )}
        </div>
        <div>
          <a href="https://playvalorant.com/" target="_blank">
          <LogoStyle
            src="https://static.vecteezy.com/ti/vetor-gratis/p1/19040372-valorant-logo-branco-gratis-vetor.jpg"
            alt="logo"
          />
          </a>
        </div>
      </HeaderStyle>
      {
        !hambMenuStatus ? (
            <DropDownMenu>
                <ul>
                    <li onClick={() => navigate("/agents")}><a href="">Agentes</a></li>
                    <li onClick={() => navigate("/weapons")}><a href="">Armas</a></li>
                    <li onClick={() => navigate("/maps")}><a href="">Mapas</a></li>
                    <li onClick={() => navigate("/buddies")}><a href="">Chaveiros</a></li>
                    <li onClick={() => navigate("/tiers")}><a href="">Tiers</a></li>
                    <li onClick={() => navigate("/events")}><a href="">Eventos</a></li>
                    <li onClick={() => navigate("/cards")}><a href="">Cards</a></li>
                    <li onClick={() => navigate("/titles")}><a href="">Títulos</a></li>
                    <li onClick={() => navigate("/seasons")}><a href="">Seasons</a></li>
                    <li onClick={() => navigate("/sprays")}><a href="">Sprays</a></li>
                </ul>
            </DropDownMenu>
        ) : (null)
      }
    </>
  );
};
