import { cardsTo } from "../constants/card"

export const shuffle = async () => {
    return shuffleCards (cardsTo);
}

export const shuffleCards = ( list = []) => {

    for ( let i = list.length -1; i > 0; i --) {
    const iten = list[i];
    const iRandom = Math.floor(Math.random() * (i +1));

    const itenRandom = list[iRandom]
    list[i] = itenRandom
    list[iRandom] = iten

    }

    return list;
}