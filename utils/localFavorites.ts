



const toggleFavorite = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if(favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const onFavorite = (id: number):boolean => {
    if(typeof window === 'undefined') return false;
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id);
}

const pokemones = ():number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

const localFavorites = {
    toggleFavorite,
    onFavorite,
    pokemones
};
export default localFavorites