import React from 'react';
import {Link} from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  render () {
    return (
      <Link to={`/pokemon/${this.props.pokemon.id}`}>
        <li className="pokedex-list-item">
          {this.props.pokemon.id}
          <img className="pokedex-image" src={this.props.pokemon.image_url}></img>
          {this.props.pokemon.name}

        </li>
      </Link>
    );
  }
}


export default PokemonIndexItem;
