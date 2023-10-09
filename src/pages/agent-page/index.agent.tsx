import { useParams } from "react-router-dom";
import { MainContext } from "../../provider/main.provider";
import { useEffect, useContext } from "react";
import { AgentInfoCard } from "../../components/agent-info-card/agent.info.card";
import { Header } from "../../components/header";
import { GoToTopButtonStyle, MainStyle } from "../agents/style";
import { Footer } from "../../components/footer/footer.index";
import { TfiArrowCircleUp } from "react-icons/tfi";


export const AgentInfoPage = () => {
  const { agentInfo, getAgentInfo } = useContext(MainContext);
  const { agentId } = useParams();

  useEffect(() => {
    getAgentInfo(agentId!);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <AgentInfoCard agent={agentInfo!} key={agentInfo?.uuid} />
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
