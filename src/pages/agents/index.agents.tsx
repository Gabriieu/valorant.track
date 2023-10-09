import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../provider/main.provider";
import {
  GoToTopButtonStyle,
  MainStyle,
  SelectStyle,
  TitleStyle,
} from "./style";
import { Header } from "../../components/header";
import { AgentCard } from "../../components/agent-card/agent.card";
import { iAgent } from "../../provider/types/@agent-types";
import { Footer } from "../../components/footer/footer.index";
import { TfiArrowCircleUp } from "react-icons/tfi";

export const AgentsPage = () => {
  const { getAgents, agents } = useContext(MainContext);
  const [filteredAgents, setFilteredAgents] = useState<iAgent[] | []>([]);

  useEffect(() => {
    getAgents();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, []);

  const filterAgents = (role: string) => {
    if (role == "") {
      setFilteredAgents([]);
    } else {
      setFilteredAgents(
        agents.filter((agent) => agent.role.displayName === role)
      );
    }
  };

  return (
    <>
      <Header />
      <MainStyle>
        <TitleStyle>
          <h3>AGENTES</h3>
          <p>
            Personagens dotados de habilidades adaptáveis, rápidas e mortais,
            que abrem espaço para você exibir suas habilidades de tiro.
          </p>
        </TitleStyle>
        <SelectStyle onChange={(event) => filterAgents(event.target.value)}>
          <option value="">Todos</option>
          <option value="Iniciador">Iniciador</option>
          <option value="Duelista">Duelista</option>
          <option value="Controlador">Controlador</option>
          <option value="Sentinela">Sentinela</option>
        </SelectStyle>
        <ul>
          {filteredAgents.length > 0
            ? filteredAgents.map((agent) => (
                <AgentCard agent={agent} key={agent.uuid} />
              ))
            : agents.map((agent) => (
                <AgentCard agent={agent} key={agent.uuid} />
              ))}
        </ul>
      </MainStyle>
      <GoToTopButtonStyle
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <TfiArrowCircleUp color="white" size={48} />
      </GoToTopButtonStyle>
      <Footer />
    </>
  );
};
