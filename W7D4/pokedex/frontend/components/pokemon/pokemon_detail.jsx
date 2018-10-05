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
      return null;
    }

    if (!this.props.pokemon.moves) {
      return null;
    }


    return (
      <div className="poke-detail">


        <div className={this.props.pokemon.poke_type}>
          <br></br>
          <img src={this.props.pokemon.image_url}></img>
        </div>
          <div className="move-detail">
          <br></br>
          Attack: {this.props.pokemon.attack}
          <br></br>
          Defense: {this.props.pokemon.defense}
          <br></br><br></br>
          Moves: {this.props.pokemon.moves.join(", ")}
          <br></br><br></br>
        </div>
        <br></br><br></br>
        Items:
        <ul className="items-list">
          {(Object.keys(this.props.items)).map((id)=> {
            return (<li><img className="elliot" src={this.props.items[id].image_url}/></li>);
          })}

        </ul>


      </div>
    );
  }
}

export default PokemonDetail;
