import { useParams } from "react-router-dom";
import { MainContext } from "../../provider/main.provider";
import { useEffect, useContext } from "react";
import { AgentInfoCard } from "../../components/agent-info-card/agent.info.card";
import { Header } from "../../components/header";
import { MainStyle } from "../agents/style";
import { Footer } from "../../components/footer/footer.index";
import { GoToTop } from "../../components/go-to-top/go-to-top.index";

export const AgentInfoPage = () => {
  const { agentInfo, getAgentInfo } = useContext(MainContext);
  const { agentId } = useParams();

  useEffect(() => {
    getAgentInfo(agentId!);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <AgentInfoCard agent={agentInfo!} key={agentInfo?.uuid} />
      </MainStyle>
      <GoToTop />
      <Footer />
    </>
  );
};
