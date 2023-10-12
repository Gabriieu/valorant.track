import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api/api";
import { toast } from "react-toastify";
import { iAgent } from "./types/@agent-types";
import { iWeapon } from "./types/@weapon-types";
import { iMap } from "./types/@maps-types";
import { iBuddie } from "./types/@buddie-types";

interface iMainProviderProps {
  children: React.ReactNode;
}

interface iMainContext {
  agents: [] | iAgent[];
  getAgents: () => Promise<void>;
  weapons: [] | iWeapon[];
  getWeapons: () => Promise<void>;
  maps: [] | iMap[];
  getMaps: () => Promise<void>;
  agentInfo: iAgent | null;
  getAgentInfo: (uuid: string) => Promise<void>;
  buddies: [] | iBuddie[];
  getBuddies: () => Promise<void>;
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const [agents, setAgents] = useState<iAgent[] | []>([]);
  const [agentInfo, setAgentInfo] = useState<iAgent | null>(null);
  const [weapons, setWeapons] = useState<iWeapon[] | []>([]);
  const [maps, setMaps] = useState<iMap[] | []>([]);
  const [buddies, setBuddies] = useState<iBuddie[] | []>([]);

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

  const getBuddies = async () => {
    try {
      const response = await api.get("/buddies/levels?language=pt-BR");
      setBuddies(response.data.data);
    } catch (error) {
      toast.error("Houve um erro inesperado ao obter os chaveiros.");
    }
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
        agentInfo,
        getAgentInfo,
        buddies,
        getBuddies,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
