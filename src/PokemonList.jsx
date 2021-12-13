import React from 'react';
import PropTypes from 'prop-types';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.string),
};

PokemonList.defaultProps = {
  pokemon: [],
};
