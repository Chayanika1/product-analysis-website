import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='md:grid grid-cols-2 gap-4'>
            <div className='card'>
                <div className='card-body bg-yellow-900 p-4 rounded-lg'>
                    <h1 className='text-lime-500'>WHAT IS CONTEXT API?</h1>
                    <span className='text-white'>Context Api is mainy used to passed data through the 
                        component tree without pass props in every level.If we stored some darta in context ,
                        it can access in all types of nested level in react.

                    </span>
                </div>
            </div>
            <div className='card'>
                <div className='card-body bg-lime-800 p-4 rounded-lg'>
                    <h1 className='text-fuchsia-600 p-4'>WHAT IS SEMANTIC TAG?</h1>
                    <span className='text-white'>semantic tags are mainly used to describe their meaning clearly
                        between human and machine in a readable way.some of semantic tags are
                        "form","table" etc;

                    </span>
                </div>
            </div>
            
            
        </div>
    );
};

export default QuestionAnswer;