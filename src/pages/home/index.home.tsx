import { TfiArrowCircleUp } from "react-icons/tfi";
import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header";
import { WelcomeComponent } from "../../components/welcome/welcome.component";
import { GoToTopButtonStyle, MainStyle } from "../agents/style";
import { useContext, useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <MainStyle>
        <WelcomeComponent />
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
