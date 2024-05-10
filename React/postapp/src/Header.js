import './Header.css';

function Header(props) {
  let { toggleFunc } = props;

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
