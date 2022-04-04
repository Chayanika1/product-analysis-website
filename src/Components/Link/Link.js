import React from 'react';
import './Link.css'

const Link = () => {
    return (
        <nav id="my-nav">
            <ul className='text-amber-300 p-4 my-8 md:flex justify-between text-2xl'>
                <li><a href ="/Home">Home</a></li>
                <li><a href ="/Reviews">Reviews</a></li>
                <li><a href ="/DashBoard">DashBoard</a></li>
                <li><a href ="/Blogs">Blogs</a></li>
                <li> <a href="/About">About</a></li>
            </ul>
            
            
            
            
           
            
        </nav>
    );
};

export default Link;