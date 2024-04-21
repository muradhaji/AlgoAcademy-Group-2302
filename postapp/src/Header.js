import './Header.css';

function Header() {
  return (
    <header className='container'>
      <div className='logo'>Post App</div>
      <div className='menuToggle'>
        <i className='fa-solid fa-bars'></i>
      </div>
    </header>
  );
}

export default Header;
