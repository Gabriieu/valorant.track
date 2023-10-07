import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api/api";
import { toast } from "react-toastify";
import { iAgent } from "./types/@agent-types";
import { iWeapon } from "./types/@weapon-types";
import { iMap } from "./types/@maps-types";
import { iEvent } from "./types/@event-types";

interface iMainProviderProps {
  children: React.ReactNode;
}

interface iMainContext {
  getAgents: () => Promise<void>;
  agents: [] | iAgent[];
  weapons: [] | iWeapon[];
  getWeapons: () => Promise<void>;
  maps: [] | iMap[];
  getMaps: () => Promise<void>;
  events: [] | iEvent[];
  getEvents: () => Promise<void>;
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const [agents, setAgents] = useState<iAgent[] | []>([]);
  const [weapons, setWeapons] = useState<iWeapon[] | []>([]);
  const [maps, setMaps] = useState<iMap[] | []>([]);
/*   const [buddies, setBuddies] = useState();
  const [tiers, setTiers] = useState(); */
  const [events, setEvents] = useState<iEvent[] | []>([]);
/*   const [cards, setCards] = useState();
  const [titles, setTitles] = useState();
  const [seasons, setSeasons] = useState();
  const [sprays, setSprays] = useState();
 */
  useEffect(() => {}, []);

  const getAgents = async () => {
    if (agents.length == 0) {
      try {
        const response = await api.get("/agents?language=pt-BR");
        const removeSova09 = response.data.data.filter(
          (agent: iAgent) =>
            agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
        );
        setAgents(removeSova09);
      } catch (error) {
        toast.error("Houve um erro inesperado ao obter os agentes.");
      }
    }
  };

  const getWeapons = async () => {
    if (weapons.length == 0) {
      try {
        const response = await api.get("/weapons?language=pt-BR");
        setWeapons(response.data.data);
      } catch (error) {
        toast.error("Houve um erro inesperado ao obter as armas.");
      }
    }
  };

  const getMaps = async () => {
    if (maps.length == 0) {
      try {
        const response = await api.get("/maps");
        setMaps(response.data.data);
      } catch (error) {
        toast.error("Houve um erro inesperado ao obter os mapas.");
      }
    }
  };

  const getEvents = async () => {
    if (events.length == 0) {
      try {
        const response = await api.get("/events");
        setEvents(response.data.data);
      } catch (error) {
        toast.error("Houve um erro inesperador ao obter os eventos.");
      }
    }
  };
  return (
    <MainContext.Provider
      value={{ agents, getAgents, weapons, getWeapons, maps, getMaps, events, getEvents }}
    >
      {children}
    </MainContext.Provider>
  );
};
