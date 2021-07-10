import { Pokemons } from "../../data/data";

const INITIAL_STATE = {
  pokemons: Pokemons,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
