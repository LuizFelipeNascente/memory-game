import { useState } from "react";
import { createContext } from "react";
//import { cardsTo } from "../constants/card" 
import { shuffle } from "./Shuffle";
 export const MemoryGameContext = createContext();

 export const MemoryGameProvider = ({ children }) => {
    
    const [cards, Scards] = useState([]);
    const [idPairOk, SidPairOk] = useState([]);
    const [cardsOpen, ScardsOpen] = useState([]);
    const [nCardsOpen, SnCardsOpen] = useState(0);
    const [nScore, SnScore] = useState(0);

// soma dos pontos
    const incremetCardsOpen = () => {
        SnCardsOpen((increment) => increment + 1);
    }

    const scoreIncremnt =  () => {
        SnScore(point => point + 10)
    }

    const playGame = async () => {
       
        const cards = await shuffle()
        Scards(cards)
        
    }

    const reset = () => {
        SidPairOk([0]);
        ScardsOpen([]);
        cards();
        SnCardsOpen(0);
        SnScore([0]);
        playGame();
        
    } 

   const compareCards = ([id1, id2]) => {
        const idPair1 = cards.find(({ id }) => id === id1)?.idImage;
        const idPair2 = cards.find(({ id }) => id === id2)?.idImage;
        return idPair1 === idPair2;
    }

// fazendo a validação de apenas duas cartas viradas
    const openCard = ({id, idImage}) => {
        incremetCardsOpen();

        const cardThisOpen = cardsOpen.includes(id) || idPairOk.includes(idImage);
        if (cardThisOpen) return;

        if (cardsOpen.length >= 2) {
            return;
        }
        if (cardsOpen.length == 0) {
            return ScardsOpen([id])
        }

        const ids = [cardsOpen[0], id]
        ScardsOpen(ids);


        const cardsIden = compareCards(ids);
        if (cardsIden) {
            scoreIncremnt();
            SidPairOk(ids => [...ids, idImage])
        }

        
        const time = cardsIden ? 0 :1500;
        setTimeout(() => {
            ScardsOpen([])
        }, time);
    };

    const valor = {
        cards,
        nCardsOpen,
        nScore,
        cardsOpen,
        idPairOk,        
        playGame,
        openCard,
        reset,
      

    };

    return (
        <MemoryGameContext.Provider value={valor} >
            {children}
        </MemoryGameContext.Provider>
    );
 };