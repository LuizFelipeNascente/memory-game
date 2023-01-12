const img = [

"plataforma.jpg",
"plataforma.jpg",
"escudo.jpg",
"sonserina.jpg",
"reliquias.jpg",
"lufalufa.jpg",
"grifinoria.jpg",
"pomo.jpg",
"carro.jpg",
"cicatriz.jpg",
"bilhete.jpg",
"char.jpg"

];

const CardsExclusive = img.map((img, idExclusive) => ( {

    idExclusive,
    img
}));

export const CardsTo = [ ...CardsExclusive, ...CardsExclusive].map(
    (card, id) => ({
        ...card,
        id,
    })
);

