import React from 'react';
import Comments from '../../Comments/Comments';
import { useComments } from '../../Hooks/UseComments';
import './Home.css'

const Home = () => {
    const[comments,setComments] = useComments();
    return (
        <div >
            <div className='container'>
                <div>
                <h1>
                You have the swag so wear it now. ... 
                Cannot imagine a life without tees. ... Prints made for you to fall in love with. ...
                 The most affordable t-shirts are always ...

                </h1>
                <p>Be your best version · Music is the answer · 
                    Best price shop · Violence free is the way to be · 
                    Find your inner diva · Dangerous fashion
                    Your best T-shirt should be like your bed; it just feels 
                    like you are home when you are in it. ·
                     All fashion brands are about looking good.</p>
                               <button className='buy-btn'>Buy Now</button>
                </div>
           
                
                  <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKMPi-D6o6Qa20I8HUwpVw04XIygKWbXMDw&usqp=CAU" alt=""/></div>
                </div>
                <h1>Customer review</h1>
                        <div className='customer-review'>
                            
                            {
                                comments.map(comment=><Comments comment={comment}></Comments>)
                            }
                            
                              
                        </div>
                        <button>
                                <a href="/Reviews">Reviews</a>
                            </button>
                
            
              
  
         
              
                   
                
                
            
            
        </div>
    );
};

export default Home;