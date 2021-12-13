import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import Pagination from './Pagination';

export default function App() {
  const [pokemon, setPokemon] = useState();
  const [currentPageURL, setCurrentPageURL] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageURL, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPrevPageURL(res.data.previous);
        setNextPageURL(res.data.next);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageURL]);

  function gotoPrevPage() {
    setCurrentPageURL(prevPageURL);
  }

  function gotoNextPage() {
    setCurrentPageURL(nextPageURL);
  }

  if (loading) return 'Loading...';

  return (
    <div className="container mx-auto">
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoPrevPage={prevPageURL ? gotoPrevPage : null}
        gotoNextPage={nextPageURL ? gotoNextPage : null}
      />
    </div>
  );
}
