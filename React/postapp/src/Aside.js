import { useContext } from 'react';
import './Aside.css';
import { Link } from 'react-router-dom';
import MyContext from './context/MyContext';

function Aside() {
  let context = useContext(MyContext);
  const { collapsed } = context;

  return (
    <aside className={collapsed ? 'collapsed' : ''}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/users'>Users</Link>
        <Link to='/localposts'>Local posts</Link>
      </nav>
    </aside>
  );
}

export default Aside;
