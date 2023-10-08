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
                    <li onClick={() => navigate("/")}><a href="">HOME</a></li>
                    <li onClick={() => navigate("/agents")}><a href="">AGENTES</a></li>
                    <li onClick={() => navigate("/weapons")}><a href="">ARMAS</a></li>
                    <li onClick={() => navigate("/maps")}><a href="">MAPAS</a></li>
                    <li onClick={() => navigate("/buddies")}><a href="">CHAVEIROS</a></li>
                    <li onClick={() => navigate("/tiers")}><a href="">TIERS</a></li>
                    <li onClick={() => navigate("/cards")}><a href="">CARDS</a></li>
                    <li onClick={() => navigate("/titles")}><a href="">TÍTULOS</a></li>
                    <li onClick={() => navigate("/sprays")}><a href="">SPRAYS</a></li>
                </ul>
            </DropDownMenu>
        ) : (null)
      }
    </>
  );
};
