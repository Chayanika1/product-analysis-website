import React from 'react';
import './Link.css'

const Link = () => {
    return (
        <nav className='text-amber-300 p-4 my-8 md:flex justify-between text-2xl '>
            <a href ="/Home">Home</a>
            <a href ="/Reviews">Reviews</a>
            <a href ="/DashBoard">DashBoard</a>
            <a href ="/Blogs">Blogs</a>
            <a href="/About">About</a>
            
        </nav>
    );
};

export default Link;