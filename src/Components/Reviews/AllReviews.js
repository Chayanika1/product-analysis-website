import React from 'react';

const AllReviews = (props) => {
    const{name,comments,image}=props.comment;

    return (
        <div className='card'>
            <img src={image} alt=""/>
            <h1>{name}</h1>
            <p>{comments}</p>
            
        </div>
    );
};

export default AllReviews;