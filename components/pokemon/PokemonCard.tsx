import { Card, Grid, Row, Text } from '@nextui-org/react';
import Router from 'next/router';
import React, { FC } from 'react';
import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const handleClick = () => {
    Router.push(`/name/${pokemon.name}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card hoverable clickable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            width="100%"
            height={140}
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
