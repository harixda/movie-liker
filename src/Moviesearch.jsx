import React, { useContext } from 'react'
// import axios from 'axios'
import Moviecard from './Moviecard'
import './App.css'
import FavContext from './context/FavContext'


function Moviesearch() {

    // const [input, setInput] = useState('')
    // const [movies, setMovies] = useState([])
    const { movies } = useContext(FavContext)

    // function addSearch(e) {
    //     e.preventDefault()
    //     getMovie(input)
    // }

    // async function getMovie(movie) {
    //     try {
    //         const response = await axios.get(`http://www.omdbapi.com/?apikey=4318152e&s=${movie}`);
    //         // console.log(response.data.Search);
    //         setMovies(response.data.Search)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getMovie('superman')
    // }, [])

    return (
        <>
            {/* <div className='searchbar'>
                <form >
                    <input type="text" value={input} maxlength='5' placeholder='RRR'
                        onChange={(e) => setInput(e.target.value)} />
                    <button type="submit" onClick={addSearch}>Search</button>
                </form >
            </div> */}
            <div className='moviecard'>
                {movies?.map((movieObject, i) => (
                    <Moviecard key={i} movie={movieObject} />))}
                {/* {console.log(movies)} */}
            </div>
        </>
    )
}

export default Moviesearch