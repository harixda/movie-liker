import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Details.css'
import { SiImdb, SiRottentomatoes } from 'react-icons/si'

function Details() {

    const [details, setDetails] = useState([])

    const { id } = useParams();

    async function getDetails(id) {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}`);
            console.log([response.data]);
            setDetails([response.data])
            console.log(details)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDetails(id);
    }, [id])

    return (
        <>
            {details.length > 0 ? (
                <div>
                    {details.map((movie, i) => (
                        <div key={i}>
                            <h1 style={{ textTransform: 'capitalize' }}>About {movie.Type}</h1>
                            <div className='moviedetails'>
                                <div className='movie_poster' >
                                    <img src={movie.Poster} />
                                </div>
                                <div className='movieinfo'>
                                    <h4>{movie.Title} ({movie.Year})</h4>
                                    <p><span> Actors :</span> {movie.Actors}</p>
                                    <p><span>Director :</span> {movie.Director}</p>
                                    <p><span> Genre :</span> {movie.Genre}</p>
                                    <p><span>Language : </span> {movie.Language}</p>
                                    <p><span>Plot: </span> {movie.Plot}</p>
                                    <div className='ratings'>
                                        <p><SiImdb />&nbsp;&nbsp;{movie.Ratings[0].Value}</p>
                                        <p><SiRottentomatoes />&nbsp;&nbsp;{movie.Ratings[1] ? movie.Ratings[1].Value : 'notrated'}/100%</p>
                                        {/* <p>{movie.Ratings[2].Value}</p> */}
                                    </div>
                                </div>
                            </div>  </div>))}

                </div>) : <p>loading...!</p>}
        </>
    )
}

export default Details