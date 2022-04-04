import React from 'react';
import Comments from '../../Comments/Comments';
import { useComments } from '../../Hooks/UseComments';
import './Home.css'

const Home = () => {
    const[comments,setComments] = useComments();
    return (
        <div>
            <div>
                <div className='md:grid grid-cols-2 gap-4'>
                <h1 className='text-red-600 text-3xl'>
                You have the swag so wear it now. ... 
                Cannot imagine a life without tees. ...
                <p className='text-white'>Be your best version · Music is the answer · 
                    Best price shop · Violence free is the way to be · 
                    Find your inner diva · Dangerous fashion
                    Your best T-shirt should be like your bed; it just feels 
                    like you are home when you are in it. ·
                     All fashion brands are about looking good.
                     
                     
                     </p>
                     <button className='buy-btn my-8 text-2xl'>Buy Now</button>
                 
                  </h1>
                   
                    <div>
                    <img className='my-img rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKMPi-D6o6Qa20I8HUwpVw04XIygKWbXMDw&usqp=CAU" alt=""/>

                    </div>
                
                               
                              
                </div>
                
                
           
                
                 
                </div>
                <h1 className='text-lime-300 text-3xl my-8'>Customer review</h1>
                        <div className='md:grid grid-cols-3'>
                            
                            {
                                comments.slice(0,3).map(comment=><Comments comment={comment}></Comments>)
                            }
                            
                              
                        </div>
                        <button className='rounded-full bg-teal-400 p-4 text-white'>
                            <a href="/Reviews">Review more</a>
                        </button>
                
            
              
  
         
              
                   
                
                
            
            
        </div>
    );
};

export default Home;