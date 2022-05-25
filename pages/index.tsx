import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layout';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon/index';


interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({pokemons}) => {

  return (
    <Layout title="Listado de pokemones">

      <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
          <PokemonCard  key={pokemon.id} pokemon={pokemon}/>
      ))}
      </Grid.Container>

      <Button color="gradient">Hola Mundo</Button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, idx) => ({
    ...pokemon,
    id: idx +1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx+1}.svg`
  }))

  return {
    props: { pokemons },
  };
};

export default Home;
