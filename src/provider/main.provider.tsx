import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api/api";
import { toast } from "react-toastify";
import { iAgent } from "./types/@agent-types";
import { iWeapon } from "./types/@weapon-types";
import { iMap } from "./types/@maps-types";
import { iTier, iTiers } from "./types/@tier-types";

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
  tiers: [] | iTiers[];
  getTiers: () => Promise<void>;
  agentInfo: iAgent | null;
  getAgentInfo: (uuid: string) => Promise<void>;
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const [agents, setAgents] = useState<iAgent[] | []>([]);
  const [agentInfo, setAgentInfo] = useState<iAgent | null>(null);
  const [weapons, setWeapons] = useState<iWeapon[] | []>([]);
  const [maps, setMaps] = useState<iMap[] | []>([]);
  const [tiers, setTiers] = useState<iTiers[] | []>([]);

  useEffect(() => {}, []);

  const getAgents = async () => {
    if (agents.length == 0) {
      try {
        const response = await api.get("/agents?language=pt-BR");
        const removeSova = response.data.data.filter(
          (agent: iAgent) => agent.isPlayableCharacter
        );
        setAgents(removeSova);
      } catch (error) {
        toast.error("Houve um erro inesperado ao obter os agentes.");
      }
    }
  };

  const getAgentInfo = async (uuid: string) => {
    try {
      const response = await api.get(`/agents/${uuid}?language=pt-BR`);
      setAgentInfo(response.data.data);
    } catch (error) {
      toast.error("Houve um erro inesperado ao obter o agente.");
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

  const getTiers = async () => {
    if (tiers.length == 0) {
      try {
        const response = await api.get("/competitivetiers?language=pt-BR");
        const filterResponse = response.data.data[0].tiers.filter(
          (tier: iTier) => tier.smallIcon
        );
        setTiers(filterResponse);
      } catch (error) {
        toast.error("Houve um erro ao obter os ranks.");
      }
    }
    console.log(tiers);
  };

  return (
    <MainContext.Provider
      value={{
        agents,
        getAgents,
        weapons,
        getWeapons,
        maps,
        getMaps,
        tiers,
        getTiers,
        agentInfo,
        getAgentInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
