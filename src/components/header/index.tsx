import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import {
  DropDownMenu,
  HeaderStyle,
  LogoStyle,
  NavigationList,
} from "./header.style";

export const Header = () => {
  const [hambMenuStatus, setHambMenuStatus] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <HeaderStyle>
        <div id="hamb-menu">
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
        <NavigationList>
          <ul>
            <li onClick={() => navigate("/")}>HOME</li>
            <li onClick={() => navigate("/agentes")}>AGENTES</li>
            <li onClick={() => navigate("/armas")}>ARMAS</li>
            <li onClick={() => navigate("/mapas")}>MAPAS</li>
            <li onClick={() => navigate("/chaveiros")}>CHAVEIROS</li>
          </ul>
        </NavigationList>
        <div>
          <a href="https://playvalorant.com/" target="_blank">
            <LogoStyle
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/19040372-valorant-logo-branco-gratis-vetor.jpg"
              alt="logo"
            />
          </a>
        </div>
      </HeaderStyle>
      {!hambMenuStatus ? (
        <DropDownMenu>
          <ul>
            <li onClick={() => navigate("/")}>
              <a href="">HOME</a>
            </li>
            <li onClick={() => navigate("/agentes")}>
              <a href="">AGENTES</a>
            </li>
            <li onClick={() => navigate("/armas")}>
              <a href="">ARMAS</a>
            </li>
            <li onClick={() => navigate("/mapas")}>
              <a href="">MAPAS</a>
            </li>
            <li onClick={() => navigate("/chaveiros")}>
              <a href="">CHAVEIROS</a>
            </li>
          </ul>
        </DropDownMenu>
      ) : null}
    </>
  );
};
