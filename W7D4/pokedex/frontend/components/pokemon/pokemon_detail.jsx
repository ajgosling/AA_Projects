import React from 'react';


class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pokemonId !== nextProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(nextProps.match.params.pokemonId);
    }
  }

  render () {
    if (!this.props.pokemon) {
      return (<h1></h1>);
    }
    return (
      <div className="poke-detail">


        <div className={this.props.pokemon.poke_type}>
          <br></br>
          <img src={this.props.pokemon.image_url}></img>
        </div>

        <br></br>
        Attack: {this.props.pokemon.attack}
        <br></br>
        Defense: {this.props.pokemon.defense}
        <br></br>
        <ul className="items-list">
          {Object.keys(this.props.items).map((id)=> {
            return (<img src="/assets/pokemon_egg.svg"/>);
          })}

        </ul>


      </div>
    );
  }
}

export default PokemonDetail;
