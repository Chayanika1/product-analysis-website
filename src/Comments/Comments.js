import React from 'react';
import './Comments.css'

const Comments = (props) => {
    const{comments,name,image,ratings} = props.comment;
    return (
        <div className='my-comment'> 
        <div className='card'>
        <img className='rounded-full' src={image} alt=""/>
        <div className='card-body text-justify mx-3 my-6'>
        <h4>{name}</h4>
            <p>{comments}</p>
            <p><small>{ratings}</small></p>

        </div>

        </div>
           
           
            
        </div>
    );
};

export default Comments;