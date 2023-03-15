import { useContext, useEffect } from "react"
import FavContext from "./context/FavContext"
import { FcLike, FcDislike } from 'react-icons/fc'


function Favmovies() {
    const { favourite, remFav } = useContext(FavContext)

    // build by hari
    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favourite))
    }, [favourite])


    return (
        <>
            <h1 style={{ color: "white" }}> <FcLike /> Favorite movies</h1>
            <div className='moviecard'>
                <div style={{ backgroundColor: "black" }} className='movieitem'>
                    {
                        favourite.map((fav) =>
                        (<div style={{ marginTop: 20, }} div key={fav.imdbID} >
                            <img src={fav.Poster} alt={fav.Title} />
                            {/* <p>{fav.Title}</p> */}
                            <button className='love' style={{ marginLeft: 55 }} onClick={() => remFav(fav.imdbID)}><FcDislike /></button>
                        </div>)
                        )
                    }
                    {console.log(favourite)}
                </div>
            </div>
        </>
    )
}

export default Favmovies