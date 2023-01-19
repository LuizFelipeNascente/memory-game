import { useContext } from "react";
import { MemoryGameContext } from "./MemoryGame";

export const Hook = () => {
  const contexto = useContext(MemoryGameContext);
  return contexto;
};