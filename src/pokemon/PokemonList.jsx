import React from 'react';
import PropTypes from 'prop-types';

export default function PokemonList({ pokemon }) {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      {pokemon.map((p) => (
        <div key={p} className="border p-4 flex-auto text-center">
          {p}
        </div>
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
