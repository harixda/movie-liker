import { createContext, useState } from 'react'

const FavContext = createContext();

export function FavProvider({ children }) {
    const [input, setInput] = useState('')
    const [movies, setMovies] = useState([])

    const [favourite, setFavourite] = useState(() => { return JSON.parse(localStorage.getItem('favorite')) || [] });

    const addFav = (movie) => {
        setFavourite([...favourite, movie])
        // console.log(favourite)
    }
    const remFav = (imdbID) => {
        const newMovies = favourite.filter((el) => (imdbID !== el.imdbID))
        setFavourite(newMovies)
        // console.log(favourite)
    }


    return (
        <FavContext.Provider value={{ favourite, addFav, remFav, input, setFavourite, setInput, movies, setMovies }}>
            {children}
        </FavContext.Provider>
    )
}

export default FavContext