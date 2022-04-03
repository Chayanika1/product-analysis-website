import { comment } from 'postcss';
import React from 'react';
import { useComments } from '../../Hooks/UseComments';

const Reviews = () => {
    const[comments,setComments] = useComments();
    return (
        <div>
            <h2>this is review page</h2>
            {
                comments.map(comment=><li>{comment.comments}</li>)
            }
            
        </div>
    );
};

export default Reviews;