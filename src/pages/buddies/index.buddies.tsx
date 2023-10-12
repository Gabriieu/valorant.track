import { BuddieCard } from "../../components/buddie-card/index.buddie-card";
import { Footer } from "../../components/footer/footer.index";
import { GoToTop } from "../../components/go-to-top/go-to-top.index";
import { Header } from "../../components/header";
import { MainContext } from "../../provider/main.provider";
import { iBuddie } from "../../provider/types/@buddie-types";
//import { iBuddie } from "../../provider/types/@buddie-types";
import { MainStyle, TitleStyle } from "../agents/style";
import { useContext, useEffect, useState } from "react";
import { SearchBarStyle } from "./style";
//import { LoadMoreStyle } from "./style";

export const BuddiesPage = () => {
  const { buddies, getBuddies } = useContext(MainContext);
  const [filteredList, setFilteredList] = useState<iBuddie[] | []>([]);

  /*   const quantity: number = 40;
  const [perPageBuddies, setPerPageBuddies] = useState<iBuddie[] | []>([]);
  const [end, setEnd] = useState<number>(quantity); */

  /*   const nextPage = () => {
    if (end < buddies.length) {
      setPerPageBuddies(buddies.slice(0, end));
      setEnd(end + quantity);
    } else {
      setEnd(buddies.length);
      setPerPageBuddies(buddies);
    }
  }; */
  const filter = (text: string) => {
      const newList = buddies.filter((buddie) =>
        buddie.displayName
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase())
      );
      if(filteredList.length == 0){
        setFilteredList([])
      }
      setFilteredList(newList);
  };
  useEffect(() => {
    getBuddies();
  }, [filteredList]);

  return (
    <>
      <Header />
      <MainStyle>
        <TitleStyle>
          <h3>CHAVEIROS</h3>
          <p>Diversos chaveiros estilosos para personalizar as suas armas.</p>
        </TitleStyle>
        <SearchBarStyle>
          <input onChange={(event) => filter(event.target.value)} type="text" placeholder="Pesquisar"/>
        </SearchBarStyle>
        <section>
          <ul>
            {filteredList.length > 0
              ? filteredList.map((buddie) => (
                  <BuddieCard buddie={buddie} key={buddie.uuid} />
                ))
              : buddies.map((buddie) => (
                  <BuddieCard buddie={buddie} key={buddie.uuid} />
                ))}
          </ul>
        </section>
        {/*        {end !== buddies.length && (
          <LoadMoreStyle>
            <button
              type="button"
              onClick={() => {
                nextPage();
              }}
            >
              CARREGAR MAIS...
            </button>
          </LoadMoreStyle>
        )} */}
      </MainStyle>
      <GoToTop />
      <Footer />
    </>
  );
};
