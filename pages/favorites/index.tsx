import { Card, Grid } from '@nextui-org/react'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { FavoritePokemons } from '../../components/pokemon'
import {NoFavorites} from '../../components/ui'
import { localFavorites } from '../../utils'



const FavoritesPage: NextPage = () => {

  const [favoritesPokemones, setFavoritesPokemones] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemones(localFavorites.pokemones());
  }, [])

  return (
    <Layout title="Pokemones favoritos">
        {favoritesPokemones.length === 0 ? <NoFavorites /> :
          (
           <FavoritePokemons favoritesPokemones={favoritesPokemones}/>
          )
        }
        
    </Layout>
  )
}

export default FavoritesPage