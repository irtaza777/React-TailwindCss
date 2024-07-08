import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import Register from './Register/Register';
import Login from './login/login';
import Allposts from './Allposts/Allposts';

function App() {
  return (
    <div>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/Register" element={<Register/>}></Route>
<Route path="/Login" element={<Login/>}></Route>
<Route path="/Allposts" element={<Allposts/>}></Route>
</Routes>
    </div>
  );
}

export default App;
