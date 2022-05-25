
import Head from "next/head"
import React, { FC } from "react"
import Navbar from "../ui/Navbar"

interface LayoutProps {
    title?: string,
    children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({children, title}) => {
    return(
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="David Sanchez Hurtado"></meta>
                <meta name="description" content="Informacion sobre el pokemon xxxx"></meta>
                <meta name="keywords" content="xxxx, pokemon, pokedex"></meta>
            </Head>
            <Navbar />
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}