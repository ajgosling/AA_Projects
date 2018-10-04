import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    console.log(this.props);
    return(

      <ul>
        {this.props.pokemon.map((poke) => {
          return(<li>
            {poke.name}
            <img className="poke-image" src={poke.image_url}></img>

            </li>);
        })}

      </ul>
    );
  }
}

export default PokemonIndex;
