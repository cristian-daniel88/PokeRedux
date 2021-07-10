export const pokemonItems = [
  {
    id: 1,
    name: "Squirtle",
    img: "/img/squirtle.png",
    section: "Agua",
    price: 500,
  },
  {
    id: 2,
    name: "Palpitoad",
    img: "/img/palpitoad.png",
    section: "Agua",
    price: 200,
  },
  {
    id: 3,
    name: "Peraligatr",
    img: "/img/feraligatr.png",
    section: "Agua",
    price: 200,
  },
  {
    id: 4,
    name: "Pandshrew",
    img: "/img/sandshrew.png",
    section: "Tierra",
    price: 150,
  },
  {
    id: 5,
    name: "Rhydon",
    img: "/img/rhydon.png",
    section: "Tierra",
    price: 200,
  },
  {
    id: 6,
    name: "Blastoise",
    img: "/img/blastoise.png",
    section: "Tierra",
    price: 100,
  },
  {
    id: 7,
    name: "Charmeleon",
    img: "/img/charmeleon.png",
    section: "Fuego",
    price: 100,
  },
  {
    id: 8,
    name: "Turtonator",
    img: "/img/turtonator.png",
    section: "Fuego",
    price: 100,
  },
  {
    id: 9,
    name: "Blacephalon",
    img: "/img/blacephalon.png",
    section: "Fuego",
    price: 500,
  },
];

export const arraySections = [
  {
    section: "Agua",
    imgTag: "img/tag_agua.jpg",
  },
  {
    section: "Tierra",
    imgTag: "img/tag_tierra.jpg",
  },
  {
    section: "Fuego",
    imgTag: "img/tag_fuego.jpg",
  },
];

// export const Foods permite orderar comida por secciones

export const Pokemons = pokemonItems.reduce((res, pok) => {
  if (!res[pok.section]) {
    res[pok.section] = [];
  }

  res[pok.section] = [...res[pok.section], pok];

  return res;
}, {});
