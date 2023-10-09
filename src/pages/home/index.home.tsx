import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header";
import { WelcomeComponent } from "../../components/welcome/welcome.component";
import { MainStyle } from "../agents/style";
import { useEffect } from "react";
import { GoToTop } from "../../components/go-to-top/go-to-top.index";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <WelcomeComponent />
      </MainStyle>
      <GoToTop />
      <Footer />
    </>
  );
};
