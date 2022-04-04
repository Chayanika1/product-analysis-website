import React from 'react';

const AllReviews = (props) => {
    const{name,comments,image,ratings}=props.comment;

    return (
        <div className='card bg-slate-500 text-white my-8 mx-6 rounded-lg'>
            <img  className="rounded-full"src={image} alt=""/>
            <div className='card-body  mx-3 my-6 text-center'>
            <h1>{name}</h1>
            <h2>{ratings}</h2>
            <p>{comments}</p>

            </div>
            
            
        </div>
    );
};

export default AllReviews;