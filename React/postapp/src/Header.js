import { useContext } from 'react';
import './Header.css';
import MyContext from './context/MyContext';

function Header() {
  let context = useContext(MyContext);
  let { toggleFunc } = context;

  return (
    <header className='container'>
      <div className='logo'>Post App</div>
      <div className='menuToggle' onClick={toggleFunc}>
        <i className='fa-solid fa-bars'></i>
      </div>
    </header>
  );
}

export default Header;
