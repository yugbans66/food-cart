import './App.css';
import "./assets/styles/main.scss"
import TopHeader from './layout/TopHeader';
import MainHeader from './layout/MainHeader';
import Navbar from './layout/Navbar';
import Filter from './components/filter';
import Card from './components/card';
import Login from "./components/login"
import Register from"./components/register"
import Cart from "./components/cart"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<>  
  <div className="App">
<Router>
      <TopHeader />
      <MainHeader />
     
          <Navbar />

          <main className='main-content'>
        <div className='container'>
          <div className='main-content__flex'>

            <div className='filter-section'>
      <Routes>
          <Route exact path={"/"||"/home" }element = { <Filter />} />
           </Routes> 
            </div>
            <div className='card-section'>
      <Routes>

          <Route exact path={"/"||"/home" } element = { <Card />} />
          </Routes> 

            </div>
      

          </div>
        </div>
      </main>
      <Routes>


          <Route exact path="/cart" element = {<Cart /> } />
          <Route exact path="/login" element = {<Login /> } />
          <Route exact path="/register" element = {<Register /> } />
          </Routes> 





      
    </Router>
    </div>

    </>


  );
}

export default App;
