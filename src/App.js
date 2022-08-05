//import logo from './logo.svg';
import React from 'react'
import './index.css';
import './App.css';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Navbar, Container } from 'react-bootstrap';
import {BsPersonCircle, BsBag} from "react-icons/bs";
import { Routes , Route, useNavigate } from 'react-router-dom';
import { Searchbar } from './components/Searchbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Allcoffee } from './pages/Allcoffee';
import { Roastery } from './pages/Roastery';
import { Brands } from './pages/Brands';
import { Detail } from './pages/Detail';
import { Cart } from './pages/Cart';

 
function App() {
  const navigate = useNavigate()

  return (
   <>
    <header>
      <Navbar className='navbar' bg="light" variant="light" >
          <Container>
            <Navbar.Brand onClick={()=>{navigate('/')}}>
              <img
                alt="코케로고"
                src="./image/logo.png"
                width="120"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <div>
              <Searchbar/>
            </div>
            <div>
            <Navbar.Brand>
             <BsPersonCircle size='28'/>
            </Navbar.Brand>
            <Navbar.Brand>
             <BsBag size='28' onClick={()=>{navigate('/cart')}}/>
            </Navbar.Brand>
            </div>
          </Container>
      </Navbar>
      <nav className='lnb'>
          <ul>
            <li onClick={()=>{navigate('/allcoffee')}}>모든커피</li>
            <li>싱글오리진</li>
            <li>블렌드</li>
            <li onClick={()=>{navigate('/roastery')}}>로스터리</li>
          </ul>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/allcoffee' element={<Allcoffee />}>
      </Route>
      <Route path='/roastery' element={<Roastery />}></Route>
      <Route path='/brand' element={<Brands />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <Footer></Footer>
   </>
  )
}

export default App;
