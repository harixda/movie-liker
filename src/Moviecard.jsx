import React, { useContext } from 'react'
import FavContext from './context/FavContext'
import { FcLike } from 'react-icons/fc'
import './App.css'

function Moviecard({ movie }) {


    const { addFav, favourite } = useContext(FavContext)

    // const isFavourite = favourite.includes(movie);

    const existed = favourite.find(o => o.imdbID === movie.imdbID) //good code

    return (
        <div className='movieitem'>
            <div>
                <div key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className='name'><p>{movie.Title} <span style={{ fontWeight: 'lighter' }}>{movie.Year}</span></p>

                        {!existed && (
                            <button className='love' onClick={() => addFav(movie)}><FcLike /></button>
                        )}
                    </div>
                    {/* {console.log(movie)} */}
                </div>
            </div >
        </div>
    )
}

export default Moviecard