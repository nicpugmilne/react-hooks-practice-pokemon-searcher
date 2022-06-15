import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => setPokemonList(data));
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function addPokemon(newPokemon) {
    setPokemonList([...pokemonList, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search searchTerm={searchTerm} onSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemonList={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
