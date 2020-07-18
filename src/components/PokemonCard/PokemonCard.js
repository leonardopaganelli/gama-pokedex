import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import pokemonService from '../../api/pokemonService';

import './PokemonCard.css';
import './TypeColors.css';

export default (props) => {
  const { name } = props;
  const loadingImage = 'https://thumbs.gfycat.com/DampSpanishCleanerwrasse-size_restricted.gif'

  const [pokemonInfo, setPokemonInfo] = useState({
    sprites: {}
  });

  const [loadingInfo, setLoadingInfo] = useState(true);

  useEffect(() => {
    const loadPokemonInfo = async () => {
      const { data } = await pokemonService.getPokemonDetail(name);

      setPokemonInfo(data);
      setLoadingInfo(false);
    };

    loadPokemonInfo();
  }, []);

  const formatOrder = (order) => `#${String(order).padStart(3, '0')}`;
  const capitalizeText = (text) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

  const loadingContent = () => (
    <Card className="pokemon-card__loading-content">
      <Card.Body>
        <img
          className="pokemon-card__loading-content__image"
          src={loadingImage}
          alt="Carregando informações do pokemon"
        />
      </Card.Body>
    </Card>
  );

  const infoContent = (pokemonInfo) => {
    const {
      sprites,
      types,
      id,
      stats,
    } = pokemonInfo;

    const typesMapped = types
      .map(currentType => currentType.type.name)

    const statsMapped = stats
      .map(currentStats => ({
        name: currentStats.stat.name,
        stat: currentStats.base_stat
      }))

    return (
      <div className={`pokemon-card__content bg-${typesMapped[0]}`}>
        <img
          className="pokemon-card__content__image"
          alt={`Imagem do ${name}`}
          src={sprites.front_default}
        />
        <Card>
          <Card.Body>
            <div className="pokemon-card__content__info">
              { `${formatOrder(id)} - ${capitalizeText(name)}` }
            </div>

            { typesMapped.map(type => (
              <Badge
                pill
                className="pokemon-card__content__type"
              >
                { type }
              </Badge>
            )) }
          </Card.Body>
        </Card>
      </div>
    )
  }

  return (
    <div className="pokemon-card">
      { loadingInfo && loadingContent()}
      { !loadingInfo && infoContent(pokemonInfo)}
    </div>
  );
}