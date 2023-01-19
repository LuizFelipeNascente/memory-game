import { useState } from "react";
import { createContext } from "react";
 
 export const MemoryGameContext = createContext();

 export const MemoryGameProvider = ({ children }) => {
    const [cards, Scards] = useState([]);
    const [idPairOk, SidPairOk] = useState([]);
    const [cardsOpen, ScardsOpen] = useState([]);

    const [nCardsOpen, SnCardsOpen] = useState(0);
    const [nScore, snScore] = useState(0);

    const incremetCardsOpen = () => {
        ScardsOpen((increment) => increment + 1 );
    }

    const openCard = ({id, idPair}) => {
        incremetCardsOpen();
    };

    const valor = {
        cards,
        nCardsOpen,
        nScore,
        openCard
    };

    return (
        <MemoryGameContext.Provider value={valor} >
            {children}
        </MemoryGameContext.Provider>
    );
 };