import React from 'react';

const Comments = (props) => {
    const{comments,name,image,ratings} = props.comment;
    return (
        <div> 
            <img src={image} alt=""/>
            <h4>{name}</h4>
            <p>{comments}</p>
            <p><small>{ratings}</small></p>
            
        </div>
    );
};

export default Comments;