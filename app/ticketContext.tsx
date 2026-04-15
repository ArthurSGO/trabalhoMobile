import React, { createContext, useContext, useState } from "react";

type Ticket = {
  id: string;
  titulo: string;
  data: string;
  local: string;
  imagem: string;
  codigo: string;
};

type TicketContextType = {
  tickets: Ticket[];
  adicionarTickets: (eventos: any[]) => void;
};

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider = ({ children }: any) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const gerarCodigo = () => {
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `TKT-2026-${random}`;
  };

  const adicionarTickets = (eventos: any[]) => {
    const novos = eventos.map(e => ({
      ...e,
      codigo: gerarCodigo(),
    }));

    setTickets(prev => [...prev, ...novos]);
  };

  return (
    <TicketContext.Provider value={{ tickets, adicionarTickets }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) throw new Error("erro");
  return context;
};