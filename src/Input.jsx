import React, { useContext, useEffect } from 'react'
import FavContext from './context/FavContext';
import axios from 'axios'
import { BsSearchHeart } from 'react-icons/bs'

function Input() {
    // const [input, setInput] = useState('')
    // const [movies, setMovies] = useState([])
    const { input, setInput, setMovies } = useContext(FavContext)

    function addSearch(e) {
        e.preventDefault()
        // if (input.length >= 3) {
        getMovie(input)
        // }

    }

    async function getMovie(movie) {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${movie}`);
            console.log(response.data.Search);
            setMovies(response.data.Search)
            setInput('')
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovie('superman')

    }, [])

    return (
        <div> <div className='searchbar'>
            <form >
                <input type="text" value={input} minLength='5' placeholder='RRR'
                    onChange={(e) => setInput(e.target.value)} />
                <button type="submit" onClick={addSearch}><BsSearchHeart /></button>
            </form >
        </div></div>
    )
}

export default Input

// ue.length === 10) {
//     window.alert("Username shouldn't exceed 10 characters")
// }