import React from 'react';
import Comments from '../../Comments/Comments';
import { useComments } from '../../Hooks/UseComments';
import './Home.css'

const Home = () => {
    const[comments,setComments] = useComments();
    return (
        <div>
            <div>
                <div className='md:grid grid-cols-4 gap-2'>
                <h1 className='text-red-600 '>
                You have the swag so wear it now. ... 
                Cannot imagine a life without tees. ... Prints made for you to fall in love with. ...
                 The most affordable t-shirts are always ...

                  </h1>
                   <p className='text-white'>Be your best version · Music is the answer · 
                    Best price shop · Violence free is the way to be · 
                    Find your inner diva · Dangerous fashion
                    Your best T-shirt should be like your bed; it just feels 
                    like you are home when you are in it. ·
                     All fashion brands are about looking good.</p>
                               
                               <img className='my-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKMPi-D6o6Qa20I8HUwpVw04XIygKWbXMDw&usqp=CAU" alt=""/>
                </div>
                <button className='buy-btn my-8'>Buy Now</button>
           
                
                 
                </div>
                <h1 className='text-lime-300 text-3xl my-8'>Customer review</h1>
                        <div className='md:grid grid-cols-3'>
                            
                            {
                                comments.map(comment=><Comments comment={comment}></Comments>)
                            }
                            
                              
                        </div>
                        <button className='bg-sky-500/100 text-white p-3 rounded-lg'>
                                <a href="/Reviews">Reviews</a>
                            </button>
                
            
              
  
         
              
                   
                
                
            
            
        </div>
    );
};

export default Home;