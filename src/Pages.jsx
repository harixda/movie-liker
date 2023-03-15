import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favmovies from './Favmovies'
import Moviesearch from './Moviesearch'
function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Moviesearch />} />
            <Route path='/favourite/' element={<Favmovies />} />
        </Routes>
    )
}

export default Pages