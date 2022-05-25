import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from 'next'
import { Layout } from "../../components/layout";
import { FC } from "react";


interface Props {
    id: string
    name: string,
}

const PokemonPage: FC<Props> = (props) => {
    const router = useRouter();
    console.log(router.query)
    return (
        <Layout title="Algun pokemon">
            <p>{props.id} - {props.name}</p>
        </Layout>
    )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {
   //  const { data } = await  // your fetch function here 
    return {
        paths: [
            {
              params: { id: '1', name:'la bolvva'
                    
                }
            }
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    //const { data } = await  

    return {
        props: {
            id: 1,
            name: 'la bolba'
        }
    }
}

export default PokemonPage;