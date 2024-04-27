import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <div className='App'>
      <Header toggleFunc={toggleMenu}></Header>
      <main className='container'>
        <Aside collapsed={isMenuCollapsed}></Aside>
        <div className='routeHolder'>Home</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
