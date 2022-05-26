import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import FavoriteCardPokemon from './FavoriteCardPokemon'

interface Props {
    favoritesPokemones: number[]
}

const FavoritePokemons:FC<Props> = ({favoritesPokemones}) => {


  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      favoritesPokemones.map((id:number) => (
            <FavoriteCardPokemon pokemonId={id} key={id}/>
      ))
    }
  </Grid.Container>
  )
}

export default FavoritePokemons