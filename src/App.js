
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1 className='text-4xl text-teal-400 p-4'>Welcome to my Shirt Shop</h1>
      <Header></Header>
       
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path ="/Reviews" element ={<Reviews></Reviews>}></Route>
        <Route path="/DashBoard" element ={<DashBoard></DashBoard>}></Route>
        <Route path="/Blogs" element ={<Blogs></Blogs>}></Route>
        <Route path ="/About" element ={<About></About>}></Route>
        <Route path ="*" element ={<Error></Error>}></Route>
      </Routes>

      </div>
      
      
     
    </div>
  );
}

export default App;
