const imagens = [
    "corvinal.jpg",
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
    "char.jpg",
  ];
  
  const cardExclusive = imagens.map((image, indice) => ({
    image,
    idImage: `${indice + 1}`,
  }));
  
  export const cardsTo = [...cardExclusive, ...cardExclusive].map(
    (props, indice) => ({
      ...props,
      id: `${indice + 1}`,
    })
  );