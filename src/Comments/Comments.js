import React from 'react';
import './Comments.css'

const Comments = (props) => {
    const{comments,name,image,ratings} = props.comment;
    return (
        <div className='my-comment'> 
        <div className='card'>
        <img src={image} alt=""/>
        <div className='card-body'>
        <h4>{name}</h4>
            <p>{comments}</p>
            <p><small>{ratings}</small></p>

        </div>

        </div>
           
           
            
        </div>
    );
};

export default Comments;