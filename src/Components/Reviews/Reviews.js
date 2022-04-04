import { comment } from 'postcss';
import React from 'react';
import { useComments } from '../../Hooks/UseComments';
import AllReviews from './AllReviews';

const Reviews = () => {
    const[comments,setComments] = useComments();
    return (
        <div>
            <h2>this is review page</h2>
            <div className='md:grid grid-cols-3'>
            {
                comments.map(comment=><AllReviews comment={comment}></AllReviews>)
            }

            </div>
            
            
        </div>
    );
};

export default Reviews;