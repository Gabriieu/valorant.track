import { NotFound } from "../../components/404/404";
import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header";
import { MainStyle } from "../agents/style";

export const Page404 = () => {
  return (
    <>
      <Header />
      <MainStyle>
        <NotFound/>
      </MainStyle>
      <Footer />
    </>
  );
};
