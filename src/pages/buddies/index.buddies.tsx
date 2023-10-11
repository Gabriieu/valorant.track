import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header";
import { MainContext } from "../../provider/main.provider";
import { iBuddie } from "../../provider/types/@buddie-types";
import { MainStyle } from "../agents/style";
import { useContext, useEffect, useState } from "react";

export const BuddiesPage = () => {
  const quantity: number = 20;
  const { buddies, getBuddies } = useContext(MainContext);
  const [perPageBuddies, setPerPageBuddies] = useState<iBuddie[] | []>([]);
  const [page, setPage] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>(quantity);

  const anterior = () => {
    setPage(0);
        setNextPage(quantity);
        setPerPageBuddies(buddies.slice(page, nextPage));
        console.log(page, nextPage);
  }
  const proxima = () => {
    if (nextPage > buddies.length) {
      setPage(buddies.length - 20);
      setNextPage(nextPage + quantity);
      setPerPageBuddies(buddies.slice(page, nextPage));
    } else {
      setPerPageBuddies(buddies.slice(page, nextPage));
      setPage(page + quantity);
      setNextPage(nextPage + quantity);
      console.log(page, nextPage);
    }
  };

  useEffect(() => {
    getBuddies();
    ///console.log(buddies.length);
    setPerPageBuddies(buddies.slice(0, 20));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        {perPageBuddies.map((buddie) => (
          <h1>{buddie.displayName}</h1>
        ))}
        <button onClick={() => anterior()}>Anterior</button>
        <button onClick={() => proxima()}>Proxima</button>
      </MainStyle>
      <Footer />
    </>
  );
};
