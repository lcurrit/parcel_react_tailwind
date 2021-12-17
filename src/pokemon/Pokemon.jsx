import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import Pagination from './Pagination';

export default function Pokemon() {
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
    <>
      <h2>Pokemon List Tutorial</h2>
      <p>
        Following a YouTube Tutorial for pullig a list of Pokemon from the{' '}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          Pokemon API
        </a>
        .
      </p>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoPrevPage={prevPageURL ? gotoPrevPage : null}
        gotoNextPage={nextPageURL ? gotoNextPage : null}
      />
    </>
  );
}
