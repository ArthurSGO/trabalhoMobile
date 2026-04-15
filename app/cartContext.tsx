import React, { createContext, useContext, useState } from "react";

type Evento = {
  titulo: string;
  data: string;
  local: string;
  preco: string;
  imagem: string;
};

type CartContextType = {
  carrinho: Evento[];
  adicionar: (evento: Evento) => void;
  remover: (titulo: string) => void;
  total: number;
  limparCarrinho: () => void;
};


const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: any) => {
  const [carrinho, setCarrinho] = useState<Evento[]>([]);

  const adicionar = (evento: Evento) => {
    setCarrinho((prev) => {
      const existe = prev.some(e => e.titulo === evento.titulo);

      if (existe) return prev;

      return [...prev, evento];
    });
};

    const remover = (titulo: string) => {
      setCarrinho((prev) => prev.filter(e => e.titulo !== titulo));
    };

    const total = carrinho.reduce((acc, item) => {
    const valor = Number(item.preco.replace(/[^\d,]/g, "").replace(",", "."));
      return acc + valor;
    }, 0);

    const limparCarrinho = () => {
      setCarrinho([]);
    };
  return (
    <CartContext.Provider value={{ carrinho, adicionar, remover, total, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);