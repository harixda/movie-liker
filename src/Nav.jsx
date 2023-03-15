import React from 'react'
import { Link } from 'react-router-dom'
import { MdMovieFilter } from 'react-icons/md';
import './App.css'
import Input from './Input';
function Nav() {
    return (
        <div className='navigation'>
            <p className='title'> <Link to='/'>Movie Addict</Link> </p>
            <Input />
            <p className='link'> <Link to='/favourite/'> <MdMovieFilter /></Link></p>
        </div>
    )
}

export default Nav