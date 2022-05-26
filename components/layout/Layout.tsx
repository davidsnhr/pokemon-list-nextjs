
import Head from "next/head"
import React, { FC } from "react"
import Navbar from "../ui/Navbar"

interface LayoutProps {
    title?: string,
    children: React.ReactNode
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin)

export const Layout: FC<LayoutProps> = ({children, title}) => {
    return(
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta property="og:title" content={`Esta es la informacion de ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
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