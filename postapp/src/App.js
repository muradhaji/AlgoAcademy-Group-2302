import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Home from './Home';
import Posts from './Posts';
import Users from './Users';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <Header toggleFunc={toggleMenu}></Header>
        <main className='container'>
          <Aside collapsed={isMenuCollapsed}></Aside>
          <div className='routeHolder'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/users' element={<Users />} />
              <Route path='*' element={<div>404, Page not found :(</div>} />
            </Routes>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
