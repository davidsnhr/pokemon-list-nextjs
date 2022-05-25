import { Card, Grid } from '@nextui-org/react'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
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
            <Grid.Container gap={2} direction='row' justify='flex-start'>
              {
                favoritesPokemones.map(id => (
                  <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                    <Card hoverable clickable css={{padding:10}}>
                      <Card.Image 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={"100%"}
                        height={140}
                      />
                    </Card>
                  </Grid>
                ))
              }
            </Grid.Container>
          )
        }
        
    </Layout>
  )
}

export default FavoritesPage