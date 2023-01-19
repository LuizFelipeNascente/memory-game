import { useState } from "react";
import { createContext } from "react";
 
 export const MemoryGameContext = createContext();

 export const MemoryGameProvider = ({ children }) => {
    const [cards, Scards] = useState([]);
    const [idPairOk, SidPairOk] = useState([]);
    const [cardsOpen, ScardsOpen] = useState([]);

    const [nCardsOpen, SnCardsOpen] = useState(0);
    const [nScore, SnScore] = useState(0);

    const incremetCardsOpen = () => {
        SnCardsOpen((increment) => increment + 1);
    }

    const openCard = ({id, idImage}) => {
        incremetCardsOpen();
        if (cardsOpen.length >= 2) {
            return ScardsOpen([]);
        }
        if (cardsOpen.length == 0) {
            return ScardsOpen([id])
        }

        ScardsOpen((ids) => [...ids, id]);
        const time = 1500;
        setTimeout(() => {
            ScardsOpen([])
        }, time);
    };

    const valor = {
        cards,
        nCardsOpen,
        nScore,

        openCard,

        cardsOpen
    };

    return (
        <MemoryGameContext.Provider value={valor} >
            {children}
        </MemoryGameContext.Provider>
    );
 };